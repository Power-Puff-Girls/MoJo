// local storage js here
'use strict';

// Global variables
var addEntry = document.getElementById('newEntry');

Entry.allEntries = [];

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
  var myMoodValue = event.target.moodChoice.value;
  var myTextValue = event.target.journalEntry.value;
  var thisDayValue = event.target.day.value;

  new Entry(myMoodValue, myTextValue, thisDayValue);

  var json = JSON.stringify(Entry.allEntries);
  localStorage.setItem('entry', json);
  console.log(Entry.allEntries);

  hideJournal();
}

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
