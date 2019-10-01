// local storage js here
'use strict';
var addEntry = document.getElementById('txtBtn');
Entry.allEntries = [];

//constructor function
function Entry(mood, text, day) {
  this.mood = mood;
  this.text = text;
  this.day = day;
  Entry.allEntries.push(this);
}


//local storage for journal entries takes in user input to instantiate new objects
function addNewEntry() {
  var myMood = document.getElementById('moodChoice');
  var myText = document.getElementById('journalEntry');
  var thisDay = document.getElementById('day');
  new Entry(myMood, myText, thisDay);

  // var json = JSON.stringify(Entry.allEntries);
  localStorage.setItem('entry', Entry.allEntries);
  console.log(Entry.allEntries);
  renderSubmit();
}
//TODO: hide entry box after click submit; show entry logged message
function renderSubmit() {
  var journal = document.getElementById('newEntry');
  journal.style.display = 'none';
  var submitMessage = document.getElementById('submitMessage');
  submitMessage.style.display = 'block';
}

addEntry.addEventListener('submit', addNewEntry);

function getEntry() {
  if (localStorage.entry) {
    var entries = localStorage.getItem('entry');
    var parsed = JSON.parse(entries);

    for (var i = 0; i < parsed.length; i++) {
      new Entry(parsed[i].entry);
    }
  }
}
