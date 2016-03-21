/// <reference path="journal-interfaces.ts" />

$(document).ready(function () {
  var entries = [];
  $('#entrysubmit').click(function() {
    var author : string = $('#author').val();
    $('#author').val('');
    var title : string = $('#title').val();
    $('#title').val('');
    var text : string = $('#text').val();
    $('#text').val('');
    var newEntry = new Journal.Entry(author, title, text);
    if (newEntry.validate()) {
      entries.push(newEntry);      
    }
    console.log(entries);
  });
});
