
// Require one of the existing client-side java-script databases
var jsdb = require('./taffy.js').taffy;

// Create the collection
var cities = jsdb.taffy();

// Insert some records
cities.insert({name:"Portland",state:"OR"});
cities.insert([{name:"New York",state:"WA"},{name:"Las Vegas",state:"NV"},{name:"Boston",state:"MA"}]);

// The database is itself a function that can complete queries
var numberOfRecourds = cities({name:"Boston"}).count();
console.log(numberOfRecourds);

// You can chain together methods.
//  - db with no arguments returns all records
//  - limit limits the number of records returned
//  - each calls a function on each returned record
cities().limit(2).each(function(r){
  console.log(r.name);
});

// Update data
cities({name:"New York"}).update({state:"NY"});

// Sort the data
console.log(cities().order("name").first().name);



