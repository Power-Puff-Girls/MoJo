// local storage js here
'use strict';

Entry.allEntries =[];

//constructor function
function Entry(mood, text){
  this.mood = mood;
  this.text = text;
}

var addEntry = document.getElementById('txtBtn');
addEntry.addEventListener('submit', addNewEntry);

//TODO: hide entry box after click submit; show entry logged message


//local storage for journal entries
function addNewEntry(){
  var json = JSON.stringify(addEntry);
  localStorage.setItem('entry', json);
}

function getEntry() {
  if(localStorage.product){
    var entries = localStorage.getItem('entry');
    var parsed = JSON.parse(entry);

    for (var i = 0; i < parsed.length; i++) {
      new Entry(parsed[i].entry);
    }
  }
}
