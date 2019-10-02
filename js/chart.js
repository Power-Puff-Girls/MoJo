// local storage js here
'use strict';

// Global variables
Entry.allEntries = [];
var addEntry = document.getElementById('newEntry');
// var numDay = 0;
// var reflect = document.getElementById('reflect');


// create empty arrays to store user's inputs
Entry.day = [];
Entry.mood = [];
Entry.text = [];


//constructor function
// function Entry(mood, text, day) {
//   this.mood = mood;
//   this.text = text;
//   this.day = day;
//   Entry.allEntries.push(this);

// }

//local storage for journal entries takes in user input to instantiate new objects
// function handleNewEntry(event) {
//   event.preventDefault();
//   // dayCounter();
//   console.log(event.target);
//   var myMoodValue = event.target.inputMoodChoice.value;
//   console.log(myMoodValue);
//   var myTextValue = event.target.journalEntry.value;
//   console.log(myTextValue);
//   var thisDayValue = event.target.inputDay.value;
//   console.log(thisDayValue);

//   new Entry(myMoodValue, myTextValue, thisDayValue);

//   var json = JSON.stringify(Entry.allEntries);
//   localStorage.setItem('entry', json);


//   hideJournal();
// }


//reflections link event handler
function handleChart() {
  // getEntry();
  viewChart();
}

window.onload = handleChart();

// TODO: Change to CSS hide show method
//TODO: hide entry box after click submit; show entry logged message
function hideJournal() {
  var journal = document.getElementById('newEntry');
  journal.style.display = 'none';
  // var submitMessage = document.getElementById('submitMessage');
  // submitMessage.style.display = 'block';
}

// function getEntry() {
//   if (localStorage.entry) {
//     var entries = localStorage.getItem('entry');
//     var parsed = JSON.parse(entries);
//     for (var i = 0; i < parsed.length; i++) {
//       new Entry(parsed[i].mood, parsed[i].text, parsed[i].day);
//     }
//     // numDay = Entry.allEntries.length;
//   }
// }


// function newStoredData() {
//   for (var i = 0; i < Entry.allEntries.length; i++) {
//     Entry.day.push(Entry.allEntries[i].day);
//     Entry.mood.push(Entry.allEntries[i].mood);
//     Entry.text.push(Entry.allEntries[i].text);
//   }
// }

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
// addEntry.addEventListener('submit', handleNewEntry);