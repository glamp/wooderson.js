var fs = require('fs')
  , path = require('path');

var wooderson = [];
var lines = fs.readFileSync(path.join(__dirname, './src/dazed_and_confused.txt'))
             .toString()
             .split('\n'); 
var printNext = false;
for(var i=0; i < lines.length; i++) {
 var line = lines[i];
 if (printNext==true) {
   wooderson.push(line);
   printNext = false;
 }
 if (line=="WOODERSON") {
   printNext = true;
 }
}
function talk(fn) {
  var quote = wooderson[Math.floor(Math.random()*wooderson.length)];
  if (fn) {
    fn(quote);
  } else {
    return quote;
  }
}
module.exports = talk;
