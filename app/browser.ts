/// <reference path="journal-interfaces.ts" />

$(document).ready(function () {
  var testEntry = new Journal.Entry('Anna', 'I love Typescript', 'Wow, Typescript is so awesome.');
  console.log(testEntry);
});
