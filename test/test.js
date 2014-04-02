

var wooderson = require('./index')

console.log(wooderson());

wooderson(function(quote) {
  console.log(quote);
});
