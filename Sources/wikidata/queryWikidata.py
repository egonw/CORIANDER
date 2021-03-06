# -*- coding: utf8 -*-
# Filename: queryWikidata.py
"""
########################################################################
# A script to query Wikidata with a given query multiple times with
# varying topics extracted from a csv.
# Execution time highly depends on numer of topics. The more the longer.
# (for 107 qids about 0.5h)
#
# @author: martina
#
########################################################################
"""

import requests
import json
import csv

# collect received results into dictionary that will later become a json
allresults = {}

# first get list of QIDs to process from csv
qidlist = []
# open and read comma separated file
with open('../tadirah-mapping.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    # skip first line
    next(csv_reader)
    # from each row get the QIDs and add them to the list if present
    # column 4: Wikidata
    for row in csv_reader:
        qid=row[4].split(';') # allows for more entries per cell
        if len(qid)>0:
            for id in qid:
                if id != '':
                    qidlist.append(id)

# set Wikidata SPARQL endpoint
url = 'https://query.wikidata.org/sparql'
# set a header to avoid 403 response from server
header = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

# read in query from file
with open('querytemplate.rq', 'r') as query_file:
    query = query_file.read()

# query Wikidata for each QID
totalqids = len(qidlist)
currentqid = 0
for qid in qidlist:
    data = ''
    currentqid += 1
# for testing purposes uncomment next two lines; will then stop after four requests
#    if currentqid == 5:
#        break
    if len(qid)>0:
        # take the template and replace the place holder with actual QID
        queryID = query.replace('<topicQID>', qid)
        # query SPARQL endpoint of Wikidata
        try:
            print('\nQuerying for', qid, '(% 3d/%3d)'%(currentqid, totalqids))
            r = requests.get(url, headers = header, params = {'format': 'json', 'query': queryID})
            data = r.json()
            print('Success!')
        # on failure
        except json.decoder.JSONDecodeError:
        # except: # uncomment this line if the one above does not work
            print('... got no valid result')
            print('Server response:', r)
            # try querying with simpler query (no child concepts of topic)
            if r.status_code == 500:
                # for very broad topics try to use a reduced query
                queryID = queryID.replace('?work wdt:P921 / (wdt:P361+ | wdt:P1269+ | (wdt:P31* / wdt:P279*) )','?work wdt:P921')
                try:
                    print('...Trying simpler query for', qid)
                    r = requests.get(url, headers = header, params = {'format': 'json', 'query': queryID})
                    data = r.json()
                    print('Success!')
                # on second time failure
                except json.decoder.JSONDecodeError:
                # except: # uncomment this line if the one above does not work
                    print('... still no valid result')
                    print('Server response:', r)
                    print('Topic might be too general to query for in reasonable time.')
        # only include result if there was one and it actually contains works
        if data and len(data['results']['bindings']) > 0:
            if not allresults:
                for work in data['results']['bindings']:
                    # add qid used in the query to each work
                    work['maintopic-qid'] = qid
                # since dictinary is empty, we can use output directly
                allresults = data
            else:
                for work in data['results']['bindings']:
                    # add qid used in the query to each work
                    work['maintopic-qid'] = qid
                    # add each work to existing dictionary
                    allresults['results']['bindings'].append(work)


# create js file with all query results for further scripting
with open('worksWikidata.js', 'w') as outfile:
    # store whole json object as js variable
    outfile.write('var dat_wiki = ')
    json.dump(allresults, outfile)
