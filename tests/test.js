const tape = require('tape');
const search = require('../src/search.js');


tape('wordSearch returns and array', function(t){
  t.equal(Array.isArray(search('Buffy')), true, "wordSearch returns an array");
  t.end();
})

tape('wordSearch returns all items that contain all letters in string', function(t){
  t.deepEqual(search('le'), ['Wesley', 'Giles'], 'wordSearch returns all items that contain all letters in string');
  t.end();
})

tape('wordSearch results have capitalised first letters', function(t){
  t.deepEquals(search('le'), ['Wesley', 'Giles'], 'wordSearch results have capitalised first letters');
  t.end();
})
