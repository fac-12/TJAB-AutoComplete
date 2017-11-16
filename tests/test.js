const tape = require('tape');
const search = require('../src/search.js');


tape('wordSearch returns and array', function(t){
  t.equal(Array.isArray(search('buffy')), true, "wordSearch returns an array");
  t.end();
})

tape('wordSearch returns all items that contain all letters in string', function(t){
  t.deepEqual(search('le'), ['wesley', 'giles'], 'wordSearch returns all items that contain all letters in string');
  t.end();
})

tape('wordSearch returns items when passed string with uppercase letters', function(t){
  t.deepEquals(search('Le'), ['wesley', 'giles'], 'wordSearch returns items when passed string with uppercase letters');
  t.end();
})
