// local storage js here
'use strict';

Entry.allEntries = [];

//constructor function
function Entry(mood, text, day) {
  this.mood = mood;
  this.text = text;
  this.day = day;
  Entry.allEntries.push(this);
}

var addEntry = document.getElementById('txtBtn');
addEntry.addEventListener('submit', addNewEntry);

//local storage for journal entries
function addNewEntry() {
  var myMood= document.getElementById('moodChoice');
  new Entry()
  var json = JSON.stringify(Entry.allEntries);
  localStorage.setItem('entry', json);
  renderSubmit();
}
//TODO: hide entry box after click submit; show entry logged message
function renderSubmit() {
  var journal = document.getElementById('newEntry');
  journal.style.display = 'none';
  var submitMessage = document.getElementById('submitMessage');
  submitMessage.style.display = 'block';
}

function getEntry() {
  if (localStorage.entry) {
    var entries = localStorage.getItem('entry');
    var parsed = JSON.parse(entry);

    for (var i = 0; i < parsed.length; i++) {
      new Entry(parsed[i].entry);
    }
  }
}
