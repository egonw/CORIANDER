var dataMat = [ 
[0, 20, 1, 19, 3, 2, 27, 12, 3, 8, 18, 15, 11, 6, 7, 3, 9, 2, 22, 25, 10, 21, 9, 25, 31, 13, 25, 21, 17, 9, 15, 11, 15, 14, 22, 25, 20, 7, 10, 16, 17, 26, 17, 13, 5, 20, 6, 5, 16, 18, 5, 13, 17, 20, 1, 0, 5, 8, 8, 6, 7, 8, 3, 10, 0, 2, 13, 10, 26, 26, 24, 13, 22, 2, 11, 12, 12, 16, 8, 12, 3, 3, 17, 19, 8, 1, 5, 14, 11, 6, 7], //Archaeology 
[20, 0, 3, 53, 14, 10, 41, 36, 6, 38, 45, 39, 40, 11, 13, 12, 30, 5, 79, 31, 17, 45, 8, 69, 78, 32, 59, 34, 22, 26, 38, 14, 38, 35, 39, 60, 43, 30, 14, 20, 42, 54, 30, 19, 9, 41, 33, 18, 24, 61, 10, 48, 43, 55, 9, 3, 28, 37, 26, 18, 18, 19, 16, 18, 10, 4, 56, 30, 40, 52, 38, 22, 45, 4, 31, 21, 28, 20, 14, 41, 5, 5, 39, 49, 12, 3, 11, 52, 27, 29, 15], //Arts and Cultural Studies 
[1, 3, 0, 5, 3, 1, 2, 4, 0, 1, 5, 1, 2, 0, 2, 0, 1, 1, 2, 2, 0, 3, 1, 6, 5, 3, 2, 2, 2, 5, 5, 2, 2, 0, 1, 3, 3, 2, 3, 3, 3, 6, 4, 3, 0, 4, 3, 3, 3, 5, 0, 4, 3, 3, 0, 0, 1, 3, 2, 2, 1, 3, 1, 2, 1, 0, 3, 2, 1, 5, 4, 4, 1, 0, 4, 1, 3, 2, 4, 4, 3, 0, 2, 3, 3, 2, 0, 5, 3, 1, 2], //Cognitive Science 
[19, 53, 5, 0, 4, 6, 36, 35, 5, 24, 37, 28, 26, 9, 12, 8, 21, 4, 52, 37, 14, 53, 8, 61, 66, 29, 46, 31, 21, 13, 30, 13, 33, 28, 33, 50, 37, 19, 19, 18, 31, 46, 23, 18, 8, 38, 17, 15, 26, 50, 10, 46, 28, 44, 6, 5, 19, 28, 24, 20, 14, 18, 13, 16, 8, 3, 38, 22, 33, 55, 39, 33, 31, 4, 28, 19, 28, 19, 22, 34, 11, 4, 28, 39, 18, 8, 13, 48, 25, 24, 17], //Computer Science 
[3, 14, 3, 4, 0, 1, 6, 4, 2, 3, 14, 4, 3, 0, 4, 1, 8, 2, 12, 2, 1, 4, 2, 13, 7, 4, 3, 1, 4, 12, 12, 3, 4, 2, 2, 5, 10, 10, 2, 4, 4, 6, 5, 2, 0, 4, 9, 9, 4, 4, 1, 6, 10, 3, 2, 1, 4, 5, 0, 2, 3, 3, 0, 1, 1, 0, 11, 1, 3, 4, 4, 1, 2, 0, 2, 3, 1, 1, 3, 5, 0, 0, 3, 3, 1, 0, 0, 3, 2, 2, 0], //Ethnology 
[2, 10, 1, 6, 1, 0, 4, 4, 1, 4, 4, 4, 8, 2, 4, 2, 2, 1, 8, 5, 3, 6, 3, 7, 6, 6, 6, 5, 4, 2, 2, 2, 3, 2, 5, 7, 4, 3, 4, 5, 5, 7, 4, 3, 1, 7, 5, 1, 4, 6, 3, 5, 6, 5, 1, 1, 4, 6, 4, 2, 2, 2, 4, 5, 2, 2, 6, 4, 5, 6, 4, 3, 6, 1, 4, 2, 5, 3, 1, 6, 1, 3, 5, 6, 2, 1, 2, 6, 2, 6, 3], //Gender Studies 
[27, 41, 2, 36, 6, 4, 0, 23, 7, 20, 37, 36, 23, 9, 12, 10, 19, 5, 50, 32, 20, 37, 11, 56, 67, 28, 41, 22, 21, 11, 31, 17, 41, 36, 35, 50, 36, 14, 22, 26, 31, 47, 32, 21, 8, 33, 13, 10, 30, 54, 14, 39, 22, 42, 6, 4, 17, 23, 13, 11, 18, 15, 5, 11, 7, 6, 37, 13, 39, 46, 38, 17, 37, 5, 20, 25, 18, 14, 14, 32, 6, 4, 27, 43, 13, 3, 13, 38, 24, 16, 15], //History 
[12, 36, 4, 35, 4, 4, 23, 0, 4, 14, 41, 22, 19, 4, 3, 7, 12, 2, 36, 13, 8, 24, 4, 35, 38, 14, 17, 13, 10, 7, 31, 8, 20, 15, 19, 33, 16, 9, 17, 10, 15, 28, 12, 7, 3, 22, 12, 15, 13, 40, 5, 27, 14, 24, 3, 4, 10, 17, 12, 16, 7, 18, 7, 10, 4, 2, 29, 12, 18, 35, 20, 14, 16, 1, 26, 13, 17, 4, 24, 21, 5, 2, 12, 21, 10, 4, 8, 33, 13, 13, 8], //Human Language Technologies 
[3, 6, 0, 5, 2, 1, 7, 4, 0, 5, 5, 5, 6, 2, 1, 3, 2, 1, 7, 5, 4, 3, 2, 6, 7, 3, 5, 3, 3, 1, 2, 3, 3, 2, 2, 6, 5, 5, 2, 2, 3, 6, 3, 1, 1, 5, 3, 2, 4, 4, 2, 4, 4, 5, 1, 3, 0, 2, 2, 2, 1, 2, 0, 0, 2, 2, 5, 2, 4, 7, 7, 2, 2, 0, 3, 6, 2, 1, 0, 6, 2, 1, 2, 3, 2, 0, 3, 4, 3, 5, 4], //Legal Studies 
[8, 38, 1, 24, 3, 4, 20, 14, 5, 0, 19, 18, 15, 3, 6, 2, 6, 2, 34, 15, 12, 19, 5, 30, 34, 20, 30, 18, 15, 8, 16, 10, 23, 22, 19, 31, 24, 13, 8, 11, 17, 23, 14, 10, 4, 19, 11, 6, 20, 33, 8, 28, 14, 23, 5, 4, 10, 15, 13, 9, 6, 7, 6, 5, 4, 5, 25, 13, 18, 28, 25, 16, 19, 3, 12, 13, 11, 6, 8, 22, 2, 2, 17, 19, 5, 1, 8, 29, 13, 15, 10], //Library Science and Information Science 
[18, 45, 5, 37, 14, 4, 37, 41, 5, 19, 0, 46, 21, 8, 8, 9, 24, 5, 49, 23, 18, 33, 9, 60, 57, 28, 29, 12, 17, 21, 68, 18, 47, 32, 23, 43, 35, 26, 25, 22, 20, 39, 26, 17, 7, 32, 19, 26, 25, 59, 13, 36, 24, 37, 10, 5, 10, 22, 19, 31, 16, 34, 6, 11, 8, 4, 50, 15, 23, 42, 34, 21, 22, 5, 29, 17, 21, 8, 35, 28, 10, 4, 19, 38, 17, 6, 12, 46, 25, 12, 17], //Linguistics and Language Studies 
[15, 39, 1, 28, 4, 4, 36, 22, 5, 18, 46, 0, 19, 7, 9, 12, 16, 4, 39, 23, 16, 21, 7, 42, 51, 20, 31, 11, 16, 10, 35, 12, 52, 36, 26, 40, 22, 16, 18, 19, 19, 32, 24, 14, 7, 24, 8, 9, 21, 60, 12, 30, 15, 33, 9, 3, 9, 18, 15, 21, 16, 18, 3, 9, 7, 4, 52, 10, 26, 34, 32, 20, 29, 4, 24, 17, 16, 8, 22, 23, 6, 4, 15, 29, 13, 5, 8, 46, 29, 15, 11], //Literary and Philological Studies 
[11, 40, 2, 26, 3, 8, 23, 19, 6, 15, 21, 19, 0, 6, 7, 9, 15, 4, 35, 16, 9, 23, 6, 30, 37, 19, 28, 20, 8, 9, 13, 10, 16, 13, 18, 27, 23, 14, 6, 9, 17, 25, 16, 10, 4, 25, 16, 9, 13, 24, 6, 24, 23, 27, 3, 4, 17, 20, 13, 9, 9, 6, 9, 10, 8, 4, 16, 18, 20, 28, 18, 13, 23, 3, 10, 10, 17, 12, 2, 21, 4, 4, 20, 25, 9, 1, 11, 24, 12, 15, 11], //Media and Communication Studies 
[6, 11, 0, 9, 0, 2, 9, 4, 2, 3, 8, 7, 6, 0, 2, 4, 8, 1, 9, 9, 7, 7, 3, 11, 12, 5, 9, 6, 5, 3, 8, 5, 9, 9, 7, 10, 11, 5, 4, 7, 9, 11, 8, 5, 7, 8, 8, 5, 6, 9, 3, 7, 8, 10, 2, 1, 2, 6, 4, 3, 5, 6, 2, 1, 4, 2, 8, 5, 7, 9, 10, 6, 7, 0, 2, 5, 4, 4, 2, 5, 3, 2, 6, 8, 6, 1, 6, 8, 6, 5, 7], //Musicology 
[7, 13, 2, 12, 4, 4, 12, 3, 1, 6, 8, 9, 7, 2, 0, 3, 6, 3, 7, 10, 4, 12, 5, 16, 16, 9, 13, 9, 9, 4, 5, 7, 10, 6, 11, 13, 10, 8, 6, 7, 11, 15, 12, 6, 1, 12, 4, 3, 10, 11, 4, 11, 7, 10, 2, 1, 7, 6, 4, 4, 4, 6, 2, 7, 3, 2, 8, 3, 12, 12, 8, 7, 10, 1, 4, 7, 5, 9, 4, 9, 1, 4, 9, 13, 3, 2, 2, 9, 6, 6, 3], //Other 
[3, 12, 0, 8, 1, 2, 10, 7, 3, 2, 9, 12, 9, 4, 3, 0, 9, 2, 10, 7, 4, 5, 2, 10, 11, 5, 9, 3, 2, 4, 5, 4, 8, 8, 6, 10, 7, 5, 5, 5, 7, 8, 9, 5, 3, 7, 4, 2, 5, 9, 4, 7, 5, 8, 2, 2, 5, 7, 2, 4, 6, 3, 1, 2, 2, 2, 8, 2, 4, 12, 6, 1, 7, 0, 2, 5, 2, 2, 1, 6, 2, 2, 5, 9, 2, 1, 4, 6, 4, 4, 3], //Philosophy 
[9, 30, 1, 21, 8, 2, 19, 12, 2, 6, 24, 16, 15, 8, 6, 9, 0, 3, 25, 13, 7, 15, 4, 27, 24, 9, 17, 8, 8, 12, 20, 7, 15, 13, 14, 20, 21, 15, 6, 7, 15, 18, 16, 9, 4, 15, 13, 15, 11, 20, 5, 15, 19, 18, 2, 3, 7, 11, 8, 8, 7, 6, 2, 5, 5, 3, 18, 7, 14, 20, 13, 8, 15, 1, 7, 9, 8, 7, 6, 12, 4, 2, 13, 21, 8, 2, 10, 18, 12, 7, 8], //Social Sciences 
[2, 5, 1, 4, 2, 1, 5, 2, 1, 2, 5, 4, 4, 1, 3, 2, 3, 0, 4, 2, 2, 1, 0, 4, 5, 3, 3, 1, 2, 2, 4, 3, 5, 2, 2, 4, 4, 2, 2, 4, 1, 4, 2, 0, 1, 4, 3, 1, 3, 3, 1, 2, 4, 3, 0, 1, 3, 4, 1, 2, 2, 1, 1, 0, 2, 1, 3, 1, 2, 3, 3, 1, 2, 0, 2, 2, 1, 1, 2, 2, 0, 1, 1, 5, 2, 0, 1, 4, 2, 2, 2], //Theology and Religious Studies 
[22, 79, 2, 52, 12, 8, 50, 36, 7, 34, 49, 39, 35, 9, 7, 10, 25, 4, 0, 32, 19, 41, 12, 72, 92, 39, 51, 29, 21, 21, 38, 18, 41, 37, 38, 59, 47, 27, 20, 27, 38, 52, 31, 26, 10, 42, 30, 19, 31, 69, 17, 57, 37, 51, 7, 5, 35, 33, 24, 18, 20, 16, 16, 16, 7, 5, 68, 23, 39, 57, 40, 20, 42, 4, 37, 22, 29, 13, 17, 43, 6, 4, 36, 48, 14, 3, 12, 57, 32, 32, 15], //Theory and Methodology of DH 
[25, 31, 2, 37, 2, 5, 32, 13, 5, 15, 23, 23, 16, 9, 10, 7, 13, 2, 32, 0, 19, 44, 16, 49, 57, 26, 46, 33, 26, 14, 22, 18, 29, 29, 32, 44, 38, 19, 17, 23, 31, 46, 29, 23, 6, 32, 11, 9, 28, 38, 13, 31, 25, 37, 6, 2, 10, 21, 13, 16, 13, 13, 4, 14, 7, 3, 29, 17, 36, 43, 39, 24, 36, 3, 18, 22, 20, 25, 9, 30, 9, 7, 29, 31, 17, 5, 12, 32, 25, 17, 16], //Artifacts 
[10, 17, 0, 14, 1, 3, 20, 8, 4, 12, 18, 16, 9, 7, 4, 4, 7, 2, 19, 19, 0, 16, 11, 21, 26, 14, 22, 11, 12, 6, 18, 10, 22, 22, 16, 22, 15, 8, 11, 15, 12, 16, 14, 10, 5, 13, 7, 3, 15, 21, 12, 14, 11, 18, 6, 1, 5, 10, 6, 9, 9, 10, 4, 3, 3, 3, 17, 11, 15, 18, 18, 10, 13, 2, 13, 7, 8, 8, 4, 14, 5, 3, 14, 15, 10, 2, 6, 14, 14, 9, 12], //BibliographicListings 
[21, 45, 3, 53, 4, 6, 37, 24, 3, 19, 33, 21, 23, 7, 12, 5, 15, 1, 41, 44, 16, 0, 17, 65, 68, 39, 49, 32, 26, 17, 30, 20, 32, 32, 37, 55, 37, 18, 20, 22, 37, 51, 32, 24, 4, 43, 16, 14, 33, 53, 10, 45, 27, 44, 9, 2, 20, 28, 19, 20, 15, 19, 12, 19, 7, 3, 33, 23, 43, 53, 38, 26, 41, 5, 26, 21, 24, 22, 17, 38, 9, 6, 37, 44, 18, 7, 15, 41, 24, 24, 15], //Computers 
[9, 8, 1, 8, 2, 3, 11, 4, 2, 5, 9, 7, 6, 3, 5, 2, 4, 0, 12, 16, 11, 17, 0, 17, 22, 14, 16, 10, 11, 7, 11, 10, 11, 11, 14, 17, 13, 7, 8, 12, 15, 15, 13, 12, 3, 11, 4, 4, 14, 13, 7, 15, 10, 12, 5, 0, 5, 7, 5, 7, 7, 8, 2, 8, 1, 2, 10, 7, 17, 11, 12, 7, 15, 1, 8, 6, 10, 10, 4, 13, 6, 3, 14, 16, 7, 2, 4, 10, 9, 7, 8], //Curricula 
[25, 69, 6, 61, 13, 7, 56, 35, 6, 30, 60, 42, 30, 11, 16, 10, 27, 4, 72, 49, 21, 65, 17, 0, 97, 52, 70, 38, 37, 30, 66, 27, 60, 50, 52, 86, 60, 35, 29, 33, 55, 73, 48, 33, 10, 54, 28, 28, 44, 91, 18, 68, 40, 71, 11, 4, 22, 36, 32, 27, 22, 33, 13, 21, 11, 5, 68, 20, 46, 68, 55, 34, 48, 5, 33, 29, 35, 20, 27, 48, 14, 6, 41, 63, 18, 8, 15, 63, 40, 26, 23], //Data 
[31, 78, 5, 66, 7, 6, 67, 38, 7, 34, 57, 51, 37, 12, 16, 11, 24, 5, 92, 57, 26, 68, 22, 97, 0, 47, 72, 40, 35, 23, 56, 28, 64, 53, 55, 87, 62, 25, 30, 37, 57, 77, 50, 34, 10, 53, 23, 22, 47, 93, 18, 73, 37, 75, 11, 5, 34, 42, 33, 31, 23, 34, 11, 22, 11, 6, 68, 29, 61, 83, 63, 36, 60, 6, 40, 35, 31, 29, 26, 53, 13, 6, 48, 71, 21, 7, 18, 74, 42, 28, 20], //DigitalHumanities 
[13, 32, 3, 29, 4, 6, 28, 14, 3, 20, 28, 20, 19, 5, 9, 5, 9, 3, 39, 26, 14, 39, 14, 52, 47, 0, 44, 24, 21, 19, 26, 25, 31, 26, 25, 47, 31, 17, 19, 25, 29, 37, 28, 24, 7, 40, 19, 12, 34, 47, 14, 42, 25, 36, 9, 3, 14, 25, 20, 18, 17, 16, 10, 19, 9, 4, 31, 17, 24, 34, 27, 17, 24, 5, 19, 22, 23, 13, 13, 34, 7, 6, 29, 34, 12, 6, 11, 33, 15, 19, 14], //File 
[25, 59, 2, 46, 3, 6, 41, 17, 5, 30, 29, 31, 28, 9, 13, 9, 17, 3, 51, 46, 22, 49, 16, 70, 72, 44, 0, 41, 28, 20, 29, 23, 44, 42, 44, 67, 49, 22, 19, 27, 45, 54, 35, 28, 9, 44, 18, 8, 36, 58, 17, 50, 37, 58, 10, 3, 21, 29, 24, 18, 20, 16, 10, 19, 9, 4, 38, 23, 43, 57, 44, 28, 45, 5, 21, 26, 28, 31, 10, 43, 9, 8, 47, 47, 13, 5, 15, 41, 26, 22, 16], //Images 
[21, 34, 2, 31, 1, 5, 22, 13, 3, 18, 12, 11, 20, 6, 9, 3, 8, 1, 29, 33, 11, 32, 10, 38, 40, 24, 41, 0, 20, 12, 15, 14, 17, 19, 28, 36, 32, 13, 9, 15, 26, 34, 22, 18, 5, 30, 14, 8, 19, 28, 5, 28, 28, 31, 4, 2, 10, 15, 17, 9, 6, 8, 9, 16, 6, 3, 18, 19, 30, 33, 26, 23, 30, 4, 13, 17, 19, 24, 2, 23, 5, 6, 28, 28, 10, 3, 11, 26, 16, 15, 12], //Images(3D) 
[17, 22, 2, 21, 4, 4, 21, 10, 3, 15, 17, 16, 8, 5, 9, 2, 8, 2, 21, 26, 12, 26, 11, 37, 35, 21, 28, 20, 0, 13, 19, 18, 26, 22, 27, 38, 26, 16, 14, 20, 22, 34, 26, 20, 5, 25, 8, 10, 23, 29, 7, 28, 16, 27, 8, 1, 7, 15, 8, 12, 8, 14, 4, 8, 4, 2, 18, 9, 23, 24, 25, 13, 22, 2, 15, 16, 13, 10, 7, 20, 4, 3, 17, 21, 10, 3, 8, 22, 19, 13, 9], //Infrastructure 
[9, 26, 5, 13, 12, 2, 11, 7, 1, 8, 21, 10, 9, 3, 4, 4, 12, 2, 21, 14, 6, 17, 7, 30, 23, 19, 20, 12, 13, 0, 23, 15, 15, 14, 12, 22, 24, 20, 12, 16, 15, 21, 17, 15, 4, 16, 16, 15, 17, 19, 5, 20, 18, 18, 5, 0, 7, 13, 8, 10, 12, 11, 3, 7, 6, 1, 21, 8, 14, 16, 14, 9, 14, 3, 10, 10, 9, 7, 6, 18, 5, 2, 11, 14, 7, 4, 4, 13, 11, 8, 8], //Interaction 
[15, 38, 5, 30, 12, 2, 31, 31, 2, 16, 68, 35, 13, 8, 5, 5, 20, 4, 38, 22, 18, 30, 11, 66, 56, 26, 29, 15, 19, 23, 0, 17, 50, 33, 23, 45, 32, 24, 22, 23, 24, 38, 25, 17, 7, 26, 17, 25, 29, 60, 9, 35, 23, 38, 9, 2, 11, 21, 18, 25, 16, 33, 5, 10, 6, 3, 48, 11, 18, 36, 32, 21, 20, 3, 25, 12, 16, 8, 31, 23, 12, 2, 16, 36, 16, 7, 9, 46, 27, 9, 17], //Language 
[11, 14, 2, 13, 3, 2, 17, 8, 3, 10, 18, 12, 10, 5, 7, 4, 7, 3, 18, 18, 10, 20, 10, 27, 28, 25, 23, 14, 18, 15, 17, 0, 20, 16, 18, 26, 21, 13, 14, 20, 15, 25, 22, 16, 5, 22, 10, 10, 23, 23, 8, 23, 14, 20, 8, 2, 6, 14, 5, 9, 13, 10, 3, 8, 7, 2, 16, 10, 17, 18, 18, 8, 16, 3, 10, 14, 12, 9, 5, 21, 4, 4, 14, 22, 8, 3, 9, 13, 11, 12, 8], //Link 
[15, 38, 2, 33, 4, 3, 41, 20, 3, 23, 47, 52, 16, 9, 10, 8, 15, 5, 41, 29, 22, 32, 11, 60, 64, 31, 44, 17, 26, 15, 50, 20, 0, 49, 37, 56, 35, 18, 24, 26, 30, 44, 33, 22, 8, 33, 8, 14, 32, 71, 16, 43, 18, 48, 11, 2, 15, 23, 18, 24, 21, 25, 3, 11, 8, 4, 54, 12, 28, 41, 39, 23, 30, 3, 22, 18, 16, 11, 24, 30, 10, 2, 21, 40, 12, 5, 11, 53, 32, 14, 15], //Literature 
[14, 35, 0, 28, 2, 2, 36, 15, 2, 22, 32, 36, 13, 9, 6, 8, 13, 2, 37, 29, 22, 32, 11, 50, 53, 26, 42, 19, 22, 14, 33, 16, 49, 0, 39, 50, 35, 15, 20, 28, 30, 39, 30, 22, 10, 28, 8, 8, 30, 53, 16, 40, 14, 42, 11, 1, 12, 16, 13, 16, 20, 19, 4, 8, 7, 4, 41, 12, 31, 37, 34, 20, 32, 4, 15, 16, 13, 10, 14, 27, 6, 2, 24, 29, 12, 4, 12, 35, 29, 13, 12], //Manuscript 
[22, 39, 1, 33, 2, 5, 35, 19, 2, 19, 23, 26, 18, 7, 11, 6, 14, 2, 38, 32, 16, 37, 14, 52, 55, 25, 44, 28, 27, 12, 23, 18, 37, 39, 0, 51, 33, 14, 18, 26, 38, 48, 32, 23, 7, 34, 11, 9, 26, 51, 11, 44, 23, 46, 6, 0, 13, 21, 16, 13, 12, 14, 9, 18, 4, 2, 35, 17, 46, 39, 31, 21, 48, 3, 19, 16, 23, 17, 10, 28, 5, 4, 32, 38, 11, 5, 11, 32, 31, 15, 10], //Map 
[25, 60, 3, 50, 5, 7, 50, 33, 6, 31, 43, 40, 27, 10, 13, 10, 20, 4, 59, 44, 22, 55, 17, 86, 87, 47, 67, 36, 38, 22, 45, 26, 56, 50, 51, 0, 52, 25, 29, 32, 51, 67, 42, 28, 10, 49, 21, 17, 46, 76, 16, 62, 33, 66, 11, 5, 20, 34, 25, 22, 21, 27, 10, 20, 9, 4, 51, 21, 46, 64, 51, 28, 48, 5, 30, 31, 30, 20, 21, 49, 10, 6, 41, 54, 15, 6, 17, 56, 38, 25, 18], //Metadata 
[20, 43, 3, 37, 10, 4, 36, 16, 5, 24, 35, 22, 23, 11, 10, 7, 21, 4, 47, 38, 15, 37, 13, 60, 62, 31, 49, 32, 26, 24, 32, 21, 35, 35, 33, 52, 0, 30, 18, 24, 34, 45, 31, 24, 9, 35, 23, 20, 33, 47, 11, 42, 38, 42, 7, 4, 14, 20, 14, 13, 17, 13, 4, 11, 11, 5, 38, 17, 31, 48, 40, 23, 33, 4, 13, 26, 21, 23, 8, 35, 6, 6, 32, 36, 12, 3, 17, 38, 23, 17, 14], //Multimedia 
[7, 30, 2, 19, 10, 3, 14, 9, 5, 13, 26, 16, 14, 5, 8, 5, 15, 2, 27, 19, 8, 18, 7, 35, 25, 17, 22, 13, 16, 20, 24, 13, 18, 15, 14, 25, 30, 0, 11, 12, 17, 24, 19, 14, 3, 17, 18, 19, 16, 24, 8, 24, 22, 24, 6, 2, 8, 14, 9, 15, 10, 13, 2, 5, 7, 3, 24, 9, 12, 20, 17, 12, 15, 3, 13, 10, 14, 7, 8, 19, 6, 4, 10, 17, 10, 3, 7, 21, 17, 14, 11], //Multimodal 
[10, 14, 3, 19, 2, 4, 22, 17, 2, 8, 25, 18, 6, 4, 6, 5, 6, 2, 20, 17, 11, 20, 8, 29, 30, 19, 19, 9, 14, 12, 22, 14, 24, 20, 18, 29, 18, 11, 0, 22, 15, 28, 19, 15, 5, 23, 8, 11, 20, 31, 11, 21, 10, 21, 5, 1, 5, 10, 11, 15, 13, 14, 3, 10, 3, 2, 26, 6, 15, 26, 22, 15, 13, 2, 24, 9, 15, 4, 18, 19, 9, 2, 10, 15, 12, 9, 6, 19, 18, 11, 8], //NamedEntities 
[16, 20, 3, 18, 4, 5, 26, 10, 2, 11, 22, 19, 9, 7, 7, 5, 7, 4, 27, 23, 15, 22, 12, 33, 37, 25, 27, 15, 20, 16, 23, 20, 26, 28, 26, 32, 24, 12, 22, 0, 22, 32, 24, 19, 8, 27, 12, 8, 26, 33, 12, 26, 16, 25, 7, 1, 8, 16, 9, 11, 18, 16, 4, 9, 6, 3, 26, 9, 24, 25, 26, 13, 24, 3, 15, 12, 14, 9, 13, 24, 6, 4, 16, 25, 13, 5, 8, 21, 18, 13, 9], //Persons 
[17, 42, 3, 31, 4, 5, 31, 15, 3, 17, 20, 19, 17, 9, 11, 7, 15, 1, 38, 31, 12, 37, 15, 55, 57, 29, 45, 26, 22, 15, 24, 15, 30, 30, 38, 51, 34, 17, 15, 22, 0, 51, 35, 25, 7, 35, 12, 10, 28, 46, 10, 42, 24, 45, 5, 0, 22, 23, 20, 13, 16, 17, 9, 18, 5, 2, 33, 18, 36, 38, 28, 18, 34, 2, 15, 19, 20, 17, 11, 32, 7, 4, 36, 45, 12, 4, 9, 36, 27, 19, 12], //Projects 
[26, 54, 6, 46, 6, 7, 47, 28, 6, 23, 39, 32, 25, 11, 15, 8, 18, 4, 52, 46, 16, 51, 15, 73, 77, 37, 54, 34, 34, 21, 38, 25, 44, 39, 48, 67, 45, 24, 28, 32, 51, 0, 45, 32, 9, 50, 20, 19, 39, 64, 12, 59, 33, 56, 9, 3, 21, 29, 25, 23, 19, 27, 10, 23, 10, 4, 43, 22, 47, 52, 43, 29, 43, 3, 28, 28, 29, 20, 21, 42, 11, 6, 39, 50, 19, 9, 13, 52, 33, 22, 16], //Research 
[17, 30, 4, 23, 5, 4, 32, 12, 3, 14, 26, 24, 16, 8, 12, 9, 16, 2, 31, 29, 14, 32, 13, 48, 50, 28, 35, 22, 26, 17, 25, 22, 33, 30, 32, 42, 31, 19, 19, 24, 35, 45, 0, 37, 5, 35, 11, 15, 27, 42, 12, 43, 21, 40, 8, 2, 13, 18, 14, 18, 16, 19, 4, 13, 6, 3, 27, 11, 27, 33, 29, 16, 29, 4, 13, 18, 17, 15, 11, 26, 7, 5, 24, 39, 14, 6, 11, 28, 25, 13, 14], //ResearchProcess 
[13, 19, 3, 18, 2, 3, 21, 7, 1, 10, 17, 14, 10, 5, 6, 5, 9, 0, 26, 23, 10, 24, 12, 33, 34, 24, 28, 18, 20, 15, 17, 16, 22, 22, 23, 28, 24, 14, 15, 19, 25, 32, 37, 0, 5, 28, 9, 10, 22, 29, 10, 30, 17, 25, 6, 0, 10, 10, 10, 12, 13, 13, 4, 11, 3, 2, 20, 9, 20, 22, 21, 11, 21, 4, 10, 13, 14, 12, 7, 21, 6, 4, 18, 24, 10, 5, 8, 20, 17, 9, 10], //ResearchResults 
[5, 9, 0, 8, 0, 1, 8, 3, 1, 4, 7, 7, 4, 7, 1, 3, 4, 1, 10, 6, 5, 4, 3, 10, 10, 7, 9, 5, 5, 4, 7, 5, 8, 10, 7, 10, 9, 3, 5, 8, 7, 9, 5, 5, 0, 6, 7, 4, 7, 10, 4, 7, 5, 8, 2, 0, 2, 4, 5, 4, 5, 5, 2, 2, 2, 1, 9, 4, 6, 7, 9, 5, 6, 0, 4, 5, 6, 2, 2, 4, 3, 1, 6, 7, 5, 2, 3, 7, 5, 4, 4], //SheetMusic 
[20, 41, 4, 38, 4, 7, 33, 22, 5, 19, 32, 24, 25, 8, 12, 7, 15, 4, 42, 32, 13, 43, 11, 54, 53, 40, 44, 30, 25, 16, 26, 22, 33, 28, 34, 49, 35, 17, 23, 27, 35, 50, 35, 28, 6, 0, 18, 15, 34, 48, 12, 42, 29, 43, 8, 4, 15, 25, 20, 17, 15, 14, 10, 21, 8, 4, 33, 19, 33, 45, 33, 23, 31, 5, 22, 22, 26, 19, 16, 35, 7, 7, 32, 39, 15, 7, 13, 41, 21, 22, 14], //Software 
[6, 33, 3, 17, 9, 5, 13, 12, 3, 11, 19, 8, 16, 8, 4, 4, 13, 3, 30, 11, 7, 16, 4, 28, 23, 19, 18, 14, 8, 16, 17, 10, 8, 8, 11, 21, 23, 18, 8, 12, 12, 20, 11, 9, 7, 18, 0, 19, 11, 20, 4, 19, 26, 18, 2, 2, 10, 15, 12, 8, 8, 11, 9, 7, 7, 3, 22, 12, 11, 14, 12, 9, 13, 2, 13, 7, 14, 4, 5, 15, 4, 4, 11, 15, 8, 3, 6, 16, 9, 14, 8], //Sound 
[5, 18, 3, 15, 9, 1, 10, 15, 2, 6, 26, 9, 9, 5, 3, 2, 15, 1, 19, 9, 3, 14, 4, 28, 22, 12, 8, 8, 10, 15, 25, 10, 14, 8, 9, 17, 20, 19, 11, 8, 10, 19, 15, 10, 4, 15, 19, 0, 10, 21, 2, 19, 19, 16, 3, 2, 4, 10, 8, 11, 6, 14, 2, 3, 7, 2, 19, 7, 6, 15, 12, 11, 5, 3, 12, 8, 10, 3, 12, 11, 5, 2, 4, 15, 9, 6, 6, 18, 11, 9, 9], //Speech 
[16, 24, 3, 26, 4, 4, 30, 13, 4, 20, 25, 21, 13, 6, 10, 5, 11, 3, 31, 28, 15, 33, 14, 44, 47, 34, 36, 19, 23, 17, 29, 23, 32, 30, 26, 46, 33, 16, 20, 26, 28, 39, 27, 22, 7, 34, 11, 10, 0, 46, 13, 36, 18, 32, 8, 4, 11, 15, 9, 12, 16, 14, 3, 14, 7, 5, 33, 11, 24, 33, 31, 13, 20, 4, 13, 22, 17, 11, 13, 29, 6, 5, 22, 30, 11, 5, 14, 27, 17, 14, 11], //Standards 
[18, 61, 5, 50, 4, 6, 54, 40, 4, 33, 59, 60, 24, 9, 11, 9, 20, 3, 69, 38, 21, 53, 13, 91, 93, 47, 58, 28, 29, 19, 60, 23, 71, 53, 51, 76, 47, 24, 31, 33, 46, 64, 42, 29, 10, 48, 20, 21, 46, 0, 18, 69, 27, 68, 11, 4, 22, 33, 36, 34, 24, 38, 9, 22, 9, 5, 76, 20, 43, 67, 50, 36, 44, 4, 40, 26, 33, 12, 37, 40, 13, 4, 37, 62, 18, 10, 13, 82, 49, 22, 20], //Text 
[5, 10, 0, 10, 1, 3, 14, 5, 2, 8, 13, 12, 6, 3, 4, 4, 5, 1, 17, 13, 12, 10, 7, 18, 18, 14, 17, 5, 7, 5, 9, 8, 16, 16, 11, 16, 11, 8, 11, 12, 10, 12, 12, 10, 4, 12, 4, 2, 13, 18, 0, 12, 4, 14, 5, 1, 5, 8, 5, 7, 9, 5, 2, 5, 2, 2, 16, 3, 9, 13, 12, 5, 7, 1, 7, 5, 8, 4, 5, 12, 4, 3, 9, 10, 6, 3, 5, 10, 8, 8, 6], //TextBearingObjects 
[13, 48, 4, 46, 6, 5, 39, 27, 4, 28, 36, 30, 24, 7, 11, 7, 15, 2, 57, 31, 14, 45, 15, 68, 73, 42, 50, 28, 28, 20, 35, 23, 43, 40, 44, 62, 42, 24, 21, 26, 42, 59, 43, 30, 7, 42, 19, 19, 36, 69, 12, 0, 26, 58, 10, 4, 19, 32, 23, 21, 16, 23, 11, 16, 10, 4, 42, 21, 37, 52, 36, 27, 41, 4, 27, 20, 27, 14, 18, 39, 9, 4, 35, 52, 16, 7, 12, 52, 34, 20, 15], //Tools 
[17, 43, 3, 28, 10, 6, 22, 14, 4, 14, 24, 15, 23, 8, 7, 5, 19, 4, 37, 25, 11, 27, 10, 40, 37, 25, 37, 28, 16, 18, 23, 14, 18, 14, 23, 33, 38, 22, 10, 16, 24, 33, 21, 17, 5, 29, 26, 19, 18, 27, 4, 26, 0, 30, 4, 3, 15, 19, 14, 12, 10, 10, 9, 16, 9, 4, 24, 20, 23, 29, 24, 15, 25, 4, 15, 15, 20, 19, 6, 25, 5, 5, 25, 28, 12, 3, 11, 23, 14, 16, 13], //Video 
[20, 55, 3, 44, 3, 5, 42, 24, 5, 23, 37, 33, 27, 10, 10, 8, 18, 3, 51, 37, 18, 44, 12, 71, 75, 36, 58, 31, 27, 18, 38, 20, 48, 42, 46, 66, 42, 24, 21, 25, 45, 56, 40, 25, 8, 43, 18, 16, 32, 68, 14, 58, 30, 0, 9, 2, 20, 31, 27, 24, 19, 25, 10, 18, 10, 3, 45, 23, 38, 53, 38, 28, 40, 3, 24, 20, 26, 19, 16, 34, 11, 7, 38, 54, 15, 6, 11, 50, 34, 23, 18], //Visualization 
[1, 9, 0, 6, 2, 1, 6, 3, 1, 5, 10, 9, 3, 2, 2, 2, 2, 0, 7, 6, 6, 9, 5, 11, 11, 9, 10, 4, 8, 5, 9, 8, 11, 11, 6, 11, 7, 6, 5, 7, 5, 9, 8, 6, 2, 8, 2, 3, 8, 11, 5, 10, 4, 9, 0, 1, 2, 4, 3, 4, 5, 6, 1, 1, 3, 0, 9, 5, 8, 7, 8, 4, 5, 1, 5, 6, 4, 3, 3, 10, 2, 1, 5, 6, 4, 2, 4, 5, 6, 6, 3], //VREs 
[0, 3, 0, 5, 1, 1, 4, 4, 3, 4, 5, 3, 4, 1, 1, 2, 3, 1, 5, 2, 1, 2, 0, 4, 5, 3, 3, 2, 1, 0, 2, 2, 2, 1, 0, 5, 4, 2, 1, 1, 0, 3, 2, 0, 0, 4, 2, 2, 4, 4, 1, 4, 3, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 2, 0, 0, 5, 5, 1, 0, 1, 0, 5, 1, 0, 1, 5, 0, 1, 1, 2, 0, 0, 4, 3, 0, 2, 1], //Bit Stream Preservation  
[5, 28, 1, 19, 4, 4, 17, 10, 0, 10, 10, 9, 17, 2, 7, 5, 7, 3, 35, 10, 5, 20, 5, 22, 34, 14, 21, 10, 7, 7, 11, 6, 15, 12, 13, 20, 14, 8, 5, 8, 22, 21, 13, 10, 2, 15, 10, 4, 11, 22, 5, 19, 15, 20, 2, 0, 0, 17, 8, 5, 14, 7, 9, 9, 3, 2, 15, 12, 12, 17, 6, 3, 12, 2, 8, 3, 9, 6, 4, 14, 2, 3, 14, 20, 3, 1, 2, 15, 9, 13, 3], //Brainstorming 
[8, 37, 3, 28, 5, 6, 23, 17, 2, 15, 22, 18, 20, 6, 6, 7, 11, 4, 33, 21, 10, 28, 7, 36, 42, 25, 29, 15, 15, 13, 21, 14, 23, 16, 21, 34, 20, 14, 10, 16, 23, 29, 18, 10, 4, 25, 15, 10, 15, 33, 8, 32, 19, 31, 4, 1, 17, 0, 14, 13, 13, 12, 12, 10, 7, 2, 25, 18, 23, 31, 21, 14, 25, 3, 16, 10, 16, 10, 8, 25, 2, 5, 21, 36, 9, 3, 7, 32, 14, 19, 12], //Browsing 
[8, 26, 2, 24, 0, 4, 13, 12, 2, 13, 19, 15, 13, 4, 4, 2, 8, 1, 24, 13, 6, 19, 5, 32, 33, 20, 24, 17, 8, 8, 18, 5, 18, 13, 16, 25, 14, 9, 11, 9, 20, 25, 14, 10, 5, 20, 12, 8, 9, 36, 5, 23, 14, 27, 3, 0, 8, 14, 0, 23, 6, 15, 9, 15, 2, 2, 25, 15, 19, 26, 20, 24, 18, 3, 22, 6, 21, 7, 13, 12, 11, 3, 14, 22, 13, 7, 3, 31, 20, 10, 12], //Cluster Analysis  
[6, 18, 2, 20, 2, 2, 11, 16, 2, 9, 31, 21, 9, 3, 4, 4, 8, 2, 18, 16, 9, 20, 7, 27, 31, 18, 18, 9, 12, 10, 25, 9, 24, 16, 13, 22, 13, 15, 15, 11, 13, 23, 18, 12, 4, 17, 8, 11, 12, 34, 7, 21, 12, 24, 4, 0, 5, 13, 23, 0, 11, 25, 3, 9, 3, 2, 23, 8, 15, 21, 18, 18, 15, 3, 22, 6, 14, 7, 20, 12, 11, 2, 10, 19, 16, 5, 4, 29, 21, 10, 12], //Collocation Analysis  
[7, 18, 1, 14, 3, 2, 18, 7, 1, 6, 16, 16, 9, 5, 4, 6, 7, 2, 20, 13, 9, 15, 7, 22, 23, 17, 20, 6, 8, 12, 16, 13, 21, 20, 12, 21, 17, 10, 13, 18, 16, 19, 16, 13, 5, 15, 8, 6, 16, 24, 9, 16, 10, 19, 5, 0, 14, 13, 6, 11, 0, 13, 3, 4, 6, 2, 20, 6, 11, 14, 13, 5, 11, 4, 7, 8, 7, 4, 8, 15, 6, 3, 10, 16, 7, 3, 5, 15, 13, 12, 6], //Commenting 
[8, 19, 3, 18, 3, 2, 15, 18, 2, 7, 34, 18, 6, 6, 6, 3, 6, 1, 16, 13, 10, 19, 8, 33, 34, 16, 16, 8, 14, 11, 33, 10, 25, 19, 14, 27, 13, 13, 14, 16, 17, 27, 19, 13, 5, 14, 11, 14, 14, 38, 5, 23, 10, 25, 6, 0, 7, 12, 15, 25, 13, 0, 3, 6, 5, 2, 27, 7, 13, 16, 16, 12, 10, 3, 17, 6, 11, 3, 23, 11, 9, 3, 8, 21, 12, 5, 3, 21, 18, 8, 11], //Concordancing  
[3, 16, 1, 13, 0, 4, 5, 7, 0, 6, 6, 3, 9, 2, 2, 1, 2, 1, 16, 4, 4, 12, 2, 13, 11, 10, 10, 9, 4, 3, 5, 3, 3, 4, 9, 10, 4, 2, 3, 4, 9, 10, 4, 4, 2, 10, 9, 2, 3, 9, 2, 11, 9, 10, 1, 0, 9, 12, 9, 3, 3, 3, 0, 7, 1, 1, 9, 10, 9, 8, 4, 5, 9, 1, 8, 1, 9, 3, 1, 9, 2, 2, 10, 11, 5, 2, 2, 10, 5, 9, 5], //Debugging 
[10, 18, 2, 16, 1, 5, 11, 10, 0, 5, 11, 9, 10, 1, 7, 2, 5, 0, 16, 14, 3, 19, 8, 21, 22, 19, 19, 16, 8, 7, 10, 8, 11, 8, 18, 20, 11, 5, 10, 9, 18, 23, 13, 11, 2, 21, 7, 3, 14, 22, 5, 16, 16, 18, 1, 0, 9, 10, 15, 9, 4, 6, 7, 0, 1, 1, 15, 10, 18, 16, 11, 12, 17, 1, 14, 8, 16, 11, 8, 14, 4, 4, 18, 18, 5, 5, 3, 17, 9, 8, 6], //Distance Measures 
[0, 10, 1, 8, 1, 2, 7, 4, 2, 4, 8, 7, 8, 4, 3, 2, 5, 2, 7, 7, 3, 7, 1, 11, 11, 9, 9, 6, 4, 6, 6, 7, 8, 7, 4, 9, 11, 7, 3, 6, 5, 10, 6, 3, 2, 8, 7, 7, 7, 9, 2, 10, 9, 10, 3, 3, 3, 7, 2, 3, 6, 5, 1, 1, 0, 2, 7, 5, 4, 7, 7, 4, 5, 3, 3, 7, 4, 4, 2, 9, 1, 3, 3, 8, 4, 2, 6, 8, 5, 7, 5], //Durable Persistent Media  
[2, 4, 0, 3, 0, 2, 6, 2, 2, 5, 4, 4, 4, 2, 2, 2, 3, 1, 5, 3, 3, 3, 2, 5, 6, 4, 4, 3, 2, 1, 3, 2, 4, 4, 2, 4, 5, 3, 2, 3, 2, 4, 3, 2, 1, 4, 3, 2, 5, 5, 2, 4, 4, 3, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 0, 4, 2, 2, 3, 4, 3, 2, 2, 1, 3, 1, 1, 0, 3, 1, 2, 3, 4, 2, 0, 3, 4, 2, 3, 3], //Emulation  
[13, 56, 3, 38, 11, 6, 37, 29, 5, 25, 50, 52, 16, 8, 8, 8, 18, 3, 68, 29, 17, 33, 10, 68, 68, 31, 38, 18, 18, 21, 48, 16, 54, 41, 35, 51, 38, 24, 26, 26, 33, 43, 27, 20, 9, 33, 22, 19, 33, 76, 16, 42, 24, 45, 9, 2, 15, 25, 25, 23, 20, 27, 9, 15, 7, 4, 0, 14, 33, 46, 42, 24, 30, 3, 35, 20, 23, 5, 30, 34, 10, 3, 20, 35, 14, 6, 9, 52, 33, 22, 16], //Encoding 
[10, 30, 2, 22, 1, 4, 13, 12, 2, 13, 15, 10, 18, 5, 3, 2, 7, 1, 23, 17, 11, 23, 7, 20, 29, 17, 23, 19, 9, 8, 11, 10, 12, 12, 17, 21, 17, 9, 6, 9, 18, 22, 11, 9, 4, 19, 12, 7, 11, 20, 3, 21, 20, 23, 5, 0, 12, 18, 15, 8, 6, 7, 10, 10, 5, 2, 14, 0, 19, 22, 16, 15, 19, 4, 15, 7, 14, 14, 3, 19, 5, 4, 19, 24, 10, 3, 6, 20, 13, 14, 13], //Gamification 
[26, 40, 1, 33, 3, 5, 39, 18, 4, 18, 23, 26, 20, 7, 12, 4, 14, 2, 39, 36, 15, 43, 17, 46, 61, 24, 43, 30, 23, 14, 18, 17, 28, 31, 46, 46, 31, 12, 15, 24, 36, 47, 27, 20, 6, 33, 11, 6, 24, 43, 9, 37, 23, 38, 8, 0, 12, 23, 19, 15, 11, 13, 9, 18, 4, 2, 33, 19, 0, 41, 35, 22, 52, 3, 24, 19, 23, 22, 10, 33, 5, 4, 32, 36, 14, 4, 12, 38, 25, 20, 12], //Georeferencing  
[26, 52, 5, 55, 4, 6, 46, 35, 7, 28, 42, 34, 28, 9, 12, 12, 20, 3, 57, 43, 18, 53, 11, 68, 83, 34, 57, 33, 24, 16, 36, 18, 41, 37, 39, 64, 48, 20, 26, 25, 38, 52, 33, 22, 7, 45, 14, 15, 33, 67, 13, 52, 29, 53, 7, 5, 17, 31, 26, 21, 14, 16, 8, 16, 7, 3, 46, 22, 41, 0, 53, 36, 42, 4, 32, 27, 29, 21, 23, 41, 10, 5, 33, 48, 17, 9, 15, 54, 34, 21, 18], //Information Retrieval 
[24, 38, 4, 39, 4, 4, 38, 20, 7, 25, 34, 32, 18, 10, 8, 6, 13, 3, 40, 39, 18, 38, 12, 55, 63, 27, 44, 26, 25, 14, 32, 18, 39, 34, 31, 51, 40, 17, 22, 26, 28, 43, 29, 21, 9, 33, 12, 12, 31, 50, 12, 36, 24, 38, 8, 5, 6, 21, 20, 18, 13, 16, 4, 11, 7, 4, 42, 16, 35, 53, 0, 30, 33, 4, 27, 25, 22, 18, 15, 33, 11, 3, 20, 33, 17, 7, 13, 38, 27, 17, 16], //Linked Open Data 
[13, 22, 4, 33, 1, 3, 17, 14, 2, 16, 21, 20, 13, 6, 7, 1, 8, 1, 20, 24, 10, 26, 7, 34, 36, 17, 28, 23, 13, 9, 21, 8, 23, 20, 21, 28, 23, 12, 15, 13, 18, 29, 16, 11, 5, 23, 9, 11, 13, 36, 5, 27, 15, 28, 4, 1, 3, 14, 24, 18, 5, 12, 5, 12, 4, 3, 24, 15, 22, 36, 30, 0, 24, 4, 21, 11, 22, 13, 15, 17, 10, 4, 16, 23, 15, 8, 6, 39, 27, 10, 14], //Machine Learning 
[22, 45, 1, 31, 2, 6, 37, 16, 2, 19, 22, 29, 23, 7, 10, 7, 15, 2, 42, 36, 13, 41, 15, 48, 60, 24, 45, 30, 22, 14, 20, 16, 30, 32, 48, 48, 33, 15, 13, 24, 34, 43, 29, 21, 6, 31, 13, 5, 20, 44, 7, 41, 25, 40, 5, 0, 12, 25, 18, 15, 11, 10, 9, 17, 5, 2, 30, 19, 52, 42, 33, 24, 0, 4, 20, 14, 26, 22, 8, 33, 4, 5, 34, 40, 14, 3, 10, 42, 29, 18, 12], //Mapping 
[2, 4, 0, 4, 0, 1, 5, 1, 0, 3, 5, 4, 3, 0, 1, 0, 1, 0, 4, 3, 2, 5, 1, 5, 6, 5, 5, 4, 2, 3, 3, 3, 3, 4, 3, 5, 4, 3, 2, 3, 2, 3, 4, 4, 0, 5, 2, 3, 4, 4, 1, 4, 4, 3, 1, 1, 2, 3, 3, 3, 4, 3, 1, 1, 3, 2, 3, 4, 3, 4, 4, 4, 4, 0, 2, 3, 3, 2, 1, 4, 0, 2, 2, 4, 2, 1, 2, 4, 3, 3, 3], //Migration  
[11, 31, 4, 28, 2, 4, 20, 26, 3, 12, 29, 24, 10, 2, 4, 2, 7, 2, 37, 18, 13, 26, 8, 33, 40, 19, 21, 13, 15, 10, 25, 10, 22, 15, 19, 30, 13, 13, 24, 15, 15, 28, 13, 10, 4, 22, 13, 12, 13, 40, 7, 27, 15, 24, 5, 0, 8, 16, 22, 22, 7, 17, 8, 14, 3, 1, 35, 15, 24, 32, 27, 21, 20, 2, 0, 8, 21, 6, 25, 20, 10, 1, 15, 23, 17, 9, 3, 36, 27, 16, 13], //Named Entity Recognition  
[12, 21, 1, 19, 3, 2, 25, 13, 6, 13, 17, 17, 10, 5, 7, 5, 9, 2, 22, 22, 7, 21, 6, 29, 35, 22, 26, 17, 16, 10, 12, 14, 18, 16, 16, 31, 26, 10, 9, 12, 19, 28, 18, 13, 5, 22, 7, 8, 22, 26, 5, 20, 15, 20, 6, 5, 3, 10, 6, 6, 8, 6, 1, 8, 7, 3, 20, 7, 19, 27, 25, 11, 14, 3, 8, 0, 9, 11, 4, 24, 2, 4, 15, 16, 4, 2, 10, 17, 7, 12, 7], //Open Archival Information Systems 
[12, 28, 3, 28, 1, 5, 18, 17, 2, 11, 21, 16, 17, 4, 5, 2, 8, 1, 29, 20, 8, 24, 10, 35, 31, 23, 28, 19, 13, 9, 16, 12, 16, 13, 23, 30, 21, 14, 15, 14, 20, 29, 17, 14, 6, 26, 14, 10, 17, 33, 8, 27, 20, 26, 4, 1, 9, 16, 21, 14, 7, 11, 9, 16, 4, 1, 23, 14, 23, 29, 22, 22, 26, 3, 21, 9, 0, 9, 12, 19, 9, 4, 20, 24, 15, 8, 7, 27, 20, 13, 10], //Pattern Recognition 
[16, 20, 2, 19, 1, 3, 14, 4, 1, 6, 8, 8, 12, 4, 9, 2, 7, 1, 13, 25, 8, 22, 10, 20, 29, 13, 31, 24, 10, 7, 8, 9, 11, 10, 17, 20, 23, 7, 4, 9, 17, 20, 15, 12, 2, 19, 4, 3, 11, 12, 4, 14, 19, 19, 3, 0, 6, 10, 7, 7, 4, 3, 3, 11, 4, 1, 5, 14, 22, 21, 18, 13, 22, 2, 6, 11, 9, 0, 1, 14, 3, 6, 23, 20, 8, 1, 5, 15, 11, 9, 10], //Photography 
[8, 14, 4, 22, 3, 1, 14, 24, 0, 8, 35, 22, 2, 2, 4, 1, 6, 2, 17, 9, 4, 17, 4, 27, 26, 13, 10, 2, 7, 6, 31, 5, 24, 14, 10, 21, 8, 8, 18, 13, 11, 21, 11, 7, 2, 16, 5, 12, 13, 37, 5, 18, 6, 16, 3, 1, 4, 8, 13, 20, 8, 23, 1, 8, 2, 0, 30, 3, 10, 23, 15, 15, 8, 1, 25, 4, 12, 1, 0, 10, 9, 1, 4, 16, 12, 7, 2, 31, 19, 5, 10], //POS-Tagging 
[12, 41, 4, 34, 5, 6, 32, 21, 6, 22, 28, 23, 21, 5, 9, 6, 12, 2, 43, 30, 14, 38, 13, 48, 53, 34, 43, 23, 20, 18, 23, 21, 30, 27, 28, 49, 35, 19, 19, 24, 32, 42, 26, 21, 4, 35, 15, 11, 29, 40, 12, 39, 25, 34, 10, 5, 14, 25, 12, 12, 15, 11, 9, 14, 9, 3, 34, 19, 33, 41, 33, 17, 33, 4, 20, 24, 19, 14, 10, 0, 7, 3, 31, 34, 11, 4, 15, 35, 18, 24, 14], //Preservation Metadata  
[3, 5, 3, 11, 0, 1, 6, 5, 2, 2, 10, 6, 4, 3, 1, 2, 4, 0, 6, 9, 5, 9, 6, 14, 13, 7, 9, 5, 4, 5, 12, 4, 10, 6, 5, 10, 6, 6, 9, 6, 7, 11, 7, 6, 3, 7, 4, 5, 6, 13, 4, 9, 5, 11, 2, 0, 2, 2, 11, 11, 6, 9, 2, 4, 1, 1, 10, 5, 5, 10, 11, 10, 4, 0, 10, 2, 9, 3, 9, 7, 0, 1, 5, 10, 10, 6, 2, 13, 13, 3, 7], //Principal Component Analysis 
[3, 5, 0, 4, 0, 3, 4, 2, 1, 2, 4, 4, 4, 2, 4, 2, 2, 1, 4, 7, 3, 6, 3, 6, 6, 6, 8, 6, 3, 2, 2, 4, 2, 2, 4, 6, 6, 4, 2, 4, 4, 6, 5, 4, 1, 7, 4, 2, 5, 4, 3, 4, 5, 7, 1, 1, 3, 5, 3, 2, 3, 3, 2, 4, 3, 2, 3, 4, 4, 5, 3, 4, 5, 2, 1, 4, 4, 6, 1, 3, 1, 0, 5, 6, 2, 1, 3, 6, 3, 4, 4], //Replication  
[17, 39, 2, 28, 3, 5, 27, 12, 2, 17, 19, 15, 20, 6, 9, 5, 13, 1, 36, 29, 14, 37, 14, 41, 48, 29, 47, 28, 17, 11, 16, 14, 21, 24, 32, 41, 32, 10, 10, 16, 36, 39, 24, 18, 6, 32, 11, 4, 22, 37, 9, 35, 25, 38, 5, 1, 14, 21, 14, 10, 10, 8, 10, 18, 3, 3, 20, 19, 32, 33, 20, 16, 34, 2, 15, 15, 20, 23, 4, 31, 5, 5, 0, 39, 10, 2, 13, 33, 20, 14, 11], //Scanning 
[19, 49, 3, 39, 3, 6, 43, 21, 3, 19, 38, 29, 25, 8, 13, 9, 21, 5, 48, 31, 15, 44, 16, 63, 71, 34, 47, 28, 21, 14, 36, 22, 40, 29, 38, 54, 36, 17, 15, 25, 45, 50, 39, 24, 7, 39, 15, 15, 30, 62, 10, 52, 28, 54, 6, 2, 20, 36, 22, 19, 16, 21, 11, 18, 8, 4, 35, 24, 36, 48, 33, 23, 40, 4, 23, 16, 24, 20, 16, 34, 10, 6, 39, 0, 16, 5, 12, 51, 29, 19, 18], //Searching 
[8, 12, 3, 18, 1, 2, 13, 10, 2, 5, 17, 13, 9, 6, 3, 2, 8, 2, 14, 17, 10, 18, 7, 18, 21, 12, 13, 10, 10, 7, 16, 8, 12, 12, 11, 15, 12, 10, 12, 13, 12, 19, 14, 10, 5, 15, 8, 9, 11, 18, 6, 16, 12, 15, 4, 0, 3, 9, 13, 16, 7, 12, 5, 5, 4, 2, 14, 10, 14, 17, 17, 15, 14, 2, 17, 4, 15, 8, 12, 11, 10, 2, 10, 16, 0, 8, 6, 21, 20, 9, 13], //Sentiment Analysis  
[1, 3, 2, 8, 0, 1, 3, 4, 0, 1, 6, 5, 1, 1, 2, 1, 2, 0, 3, 5, 2, 7, 2, 8, 7, 6, 5, 3, 3, 4, 7, 3, 5, 4, 5, 6, 3, 3, 9, 5, 4, 9, 6, 5, 2, 7, 3, 6, 5, 10, 3, 7, 3, 6, 2, 0, 1, 3, 7, 5, 3, 5, 2, 5, 2, 0, 6, 3, 4, 9, 7, 8, 3, 1, 9, 2, 8, 1, 7, 4, 6, 1, 2, 5, 8, 0, 2, 8, 9, 2, 4], //Sequence Alignment 
[5, 11, 0, 13, 0, 2, 13, 8, 3, 8, 12, 8, 11, 6, 2, 4, 10, 1, 12, 12, 6, 15, 4, 15, 18, 11, 15, 11, 8, 4, 9, 9, 11, 12, 11, 17, 17, 7, 6, 8, 9, 13, 11, 8, 3, 13, 6, 6, 14, 13, 5, 12, 11, 11, 4, 4, 2, 7, 3, 4, 5, 3, 2, 3, 6, 3, 9, 6, 12, 15, 13, 6, 10, 2, 3, 10, 7, 5, 2, 15, 2, 3, 13, 12, 6, 2, 0, 14, 8, 7, 7], //Technology Preservation 
[14, 52, 5, 48, 3, 6, 38, 33, 4, 29, 46, 46, 24, 8, 9, 6, 18, 4, 57, 32, 14, 41, 10, 63, 74, 33, 41, 26, 22, 13, 46, 13, 53, 35, 32, 56, 38, 21, 19, 21, 36, 52, 28, 20, 7, 41, 16, 18, 27, 82, 10, 52, 23, 50, 5, 3, 15, 32, 31, 29, 15, 21, 10, 17, 8, 4, 52, 20, 38, 54, 38, 39, 42, 4, 36, 17, 27, 15, 31, 35, 13, 6, 33, 51, 21, 8, 14, 0, 45, 22, 22], //Text Mining 
[11, 27, 3, 25, 2, 2, 24, 13, 3, 13, 25, 29, 12, 6, 6, 4, 12, 2, 32, 25, 14, 24, 9, 40, 42, 15, 26, 16, 19, 11, 27, 11, 32, 29, 31, 38, 23, 17, 18, 18, 27, 33, 25, 17, 5, 21, 9, 11, 17, 49, 8, 34, 14, 34, 6, 0, 9, 14, 20, 21, 13, 18, 5, 9, 5, 2, 33, 13, 25, 34, 27, 27, 29, 3, 27, 7, 20, 11, 19, 18, 13, 3, 20, 29, 20, 9, 8, 45, 0, 12, 16], //Topic Modeling 
[6, 29, 1, 24, 2, 6, 16, 13, 5, 15, 12, 15, 15, 5, 6, 4, 7, 2, 32, 17, 9, 24, 7, 26, 28, 19, 22, 15, 13, 8, 9, 12, 14, 13, 15, 25, 17, 14, 11, 13, 19, 22, 13, 9, 4, 22, 14, 9, 14, 22, 8, 20, 16, 23, 6, 2, 13, 19, 10, 10, 12, 8, 9, 8, 7, 3, 22, 14, 20, 21, 17, 10, 18, 3, 16, 12, 13, 9, 5, 24, 3, 4, 14, 19, 9, 2, 7, 22, 12, 0, 10], //Versioning 
[7, 15, 2, 17, 0, 3, 15, 8, 4, 10, 17, 11, 11, 7, 3, 3, 8, 2, 15, 16, 12, 15, 8, 23, 20, 14, 16, 12, 9, 8, 17, 8, 15, 12, 10, 18, 14, 11, 8, 9, 12, 16, 14, 10, 4, 14, 8, 9, 11, 20, 6, 15, 13, 18, 3, 1, 3, 12, 12, 12, 6, 11, 5, 6, 5, 3, 16, 13, 12, 18, 16, 14, 12, 3, 13, 7, 10, 10, 10, 14, 7, 4, 11, 18, 13, 4, 7, 22, 16, 10, 0], //Web Crawling  
];