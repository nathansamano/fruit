var FRUIT_FILE = "[\n " + [
'{ "fruit": "apple", "color": "red", "origin": "County Line Orchard" }',
'{ "fruit": "orange", "color": "orange, "origin": "Florida" }',
'{ "fruit": "grape", "color:" "purple", "origin": "California" }',
'{ "fruit": "banana", "color": "yellow", "origin": "DK Jungle" }',
'{ "fruit": "avocado", "color": "green", "origin": "Mexico" }'
].join(",\n ") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = FRUIT_FILE;
