// chart js here
'use strict';


//reflections link event handler
function handleChart() {
  // getEntry();
  renderReflections();
  viewChart();
}

window.onload = handleChart();




function newStoredData() {
  for (var i = 0; i < Entry.allEntries.length; i++) {
    Entry.day.push(Entry.allEntries[i].day);
    Entry.mood.push(Entry.allEntries[i].mood);
    Entry.text.push(Entry.allEntries[i].text);
  }
}

function renderReflections() {
  var reflection = document.getElementById('entries');
  for (var i = 0; i < Entry.text.length; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = Entry.text[i];
    reflection.appendChild(newLi);
  }
}

// TODO: make a function that calls the graph after 7days of entries
// function dayCounter() {
//   if (numDay === 6) {
//     viewChart();
//   }
// }

//https://www.chartjs.org/docs/latest/
function viewChart() {
  newStoredData();
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Entry.day,
      datasets: [{
        label: 'Mood',
        data: Entry.mood,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
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
