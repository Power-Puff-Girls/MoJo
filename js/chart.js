// chart js here

// create empty arrays to store user's inputs
Entry.date = [];
Entry.mood = [];
Entry.text = [];

function newStoredData(){
  for(var i=0; i < Entry.allEntries.length; i++){
    Entry.date.push(Entry.allEntries[i].day);
    Entry.mood.push(Entry.allEntries[i].mood);
    Entry.mood.push(Entry.allEntries[i].text);
  }
}

// parsing data
function chartData(){
  var dataEntry = localStorage.getItem('entry');
  var parsedEntry = JSON.parse(dataEntry);
}

//https://www.chartjs.org/docs/latest/
function viewChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Entry.date,
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
viewChart();
