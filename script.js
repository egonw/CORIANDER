












// Slider functions






var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

var selYear = slider.value;


var innerContainer = document.querySelector('[data-num="0"');
// plotEl = innerContainer.querySelector('.plot');
tdSelector = innerContainer.querySelector('.tddata');

var tdOption = document.createElement('option');
tdOption.text = 'Disciplines';
tdSelector.appendChild(tdOption);
var tdOption = document.createElement('option');
tdOption.text = 'Objects';
tdSelector.appendChild(tdOption);
var tdOption = document.createElement('option');
tdOption.text = 'Techniques';
tdSelector.appendChild(tdOption);

var selValue = tdSelector.value;





output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  selYear = this.value;
  // console.log(selYear);
  generatePlot()

}

tdSelector.addEventListener('change', generatePlot, false);







function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:

function generatePlot() {

  readTextFile("index.json", function(text){
      var data = JSON.parse(text);
      // console.log(data);

      // console.log(getItems(data));
      //
      // getItems(data);

      plot(getItems(data));
  });

}





function getItems(input) {

  selValue = tdSelector.value

  var arr = [];

  for (var i = 0; i < input.length; i++) {
    sd = (input[i].start_date).split(";")[0].split("-")

    if ( (new Date(sd[0],sd[1]-1,sd[2]) >= new Date(parseInt(selYear),9-1,1) )  &&  (new Date(sd[0],sd[1]-1,sd[2]) < new Date(parseInt(selYear)+1,8-1,31)) ) {
      arr.push(input[i])
    }

  };



  var fin = {} ;

  if (selValue == 'Disciplines') {
    var selGr = 'disciplines'
  } else if (selValue == 'Objects') {
    var selGr = 'tadirah_objects'
  } else if (selValue == 'Techniques') {
    var selGr = 'tadirah_techniques'

  }

  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i][selGr].length; j++) {
        if (!fin[arr[i][selGr][j].name]) {
          fin[arr[i][selGr][j].name] = 1;
        } else if (fin[arr[i][selGr][j].name]) {
          fin[arr[i][selGr][j].name] += 1;
        }
      }
  };

  return fin;

}







function plot(dd){



    let x = [];
    let y = [];

    for (var p in dd) {
          x.push(p);
          y.push(dd[p]);
        }

    Plotly.newPlot('graph', [{x,y,  type:'bar'}] );

}

generatePlot()