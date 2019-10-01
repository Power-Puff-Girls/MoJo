// local storage js here
'use strict';

// Global variables
var addEntry = document.getElementById('newEntry');

Entry.allEntries = [];

// create empty arrays to store user's inputs
Entry.date = [];
Entry.mood = [];
Entry.text = [];

//constructor function
function Entry(mood, text, day) {
  this.mood = mood;
  this.text = text;
  this.day = day;
  Entry.allEntries.push(this);
}

addEntry.addEventListener('submit', handleNewEntry);

//local storage for journal entries takes in user input to instantiate new objects
function handleNewEntry(event) {
  event.preventDefault();
  console.log(event.target);
  var myMoodValue = event.target.moodChoice.value;
  console.log(myMoodValue);
  var myTextValue = event.target.journalEntry.value;
  var thisDayValue = event.target.day.value;

  new Entry(myMoodValue, myTextValue, thisDayValue);

  var json = JSON.stringify(Entry.allEntries);
  localStorage.setItem('entry', json);
  console.log(Entry.allEntries);

  hideJournal();
}
console.log(handleNewEntry());

//TODO: hide entry box after click submit; show entry logged message
function hideJournal() {
  var journal = document.getElementById('newEntry');
  journal.style.display = 'none';
  var submitMessage = document.getElementById('submitMessage');
  submitMessage.style.display = 'block';
}

function getEntry() {
  if (localStorage.entry) {
    var entries = localStorage.getItem('entry');
    var parsed = JSON.parse(entries);

    for (var i = 0; i < parsed.length; i++) {
      new Entry(parsed[i].entry);
    }
  }
}


function newStoredData(){
  for(var i=0; i < Entry.allEntries.length; i++){
    Entry.date.push(Entry.allEntries[i].date);
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