// chart js here
'use strict';

// create empty arrays to store user's inputs
var day = [];
var mood = [];
var text = [];

//reflections link event handler
function handleChart() {
  var refData = getReflections();
  renderReflections(refData);
  viewChart(refData);
}

window.onload = handleChart();

function getReflections() {
  if (localStorage.entry) {
    var entries = localStorage.getItem('entry');
    var parsed = JSON.parse(entries);
    return parsed;
  }
}


function newStoredData(arr) {
  for (var i = 0; i < arr.length; i++) {
    day.push(arr[i].day);
    mood.push(arr[i].mood);
    text.push(arr[i].text);
  }
}

function renderReflections(arr) {
  var reflection = document.getElementById('entries');
  for (var i = 0; i < arr.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = arr[i].text;
    reflection.appendChild(newLi);
  }
}


//https://www.chartjs.org/docs/latest/
function viewChart(arr) {
  newStoredData(arr);
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: day,
      datasets: [{
        label: 'Mood',
        data: mood,
        backgroundColor: [
          'rgba(238, 206, 248, 0.5)',
        ],
        borderColor: [
          'rgba(131, 81, 206, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
