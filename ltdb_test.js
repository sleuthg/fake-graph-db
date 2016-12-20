
var db = require('./ltdb.js');

db.createDB();

// Make some nodes
db.nodes.insert([
  {title:"My First Node"},
  {title:"My Second Node"},
  {title:"My Third Node"},
  {title:"My Fourth Node"},
  {title:"My Fifth Node"},
  {title:"My Sixth Node"}
]);
//console.log(db.nodes({title:"My Second Node"}).first().___id);
//console.log(db.nodes().last());

// Get the nodes
node_ids = db.nodes().select('___id');

// Make some edges
db.edges.insert([
  {from:node_ids[0], to:node_ids[1]},
  {from:node_ids[1], to:node_ids[2]},
  {from:node_ids[2], to:node_ids[4]},
  {from:node_ids[2], to:node_ids[5]}
]);

// Get the edge ids (@todo: right now these are not unique compared to the node ids, which will eventually be a problem)
edge_ids = db.edges().select('___id');

// Make some graphs
db.graphs.insert([
  {nodes:[node_ids[0], node_ids[1], node_ids[2]], edges:[edge_ids[0],edge_ids[1]]},
  {nodes:[node_ids[2], node_ids[4], node_ids[5]], edges:[edge_ids[2],edge_ids[3]]}
]);
//console.log(db.graphs().get());

// Get all nodes in a graph
//console.log(db.nodes({___id:db.graphs().last().nodes}).get());

// Get all edges in a graph
//console.log(db.edges({___id:db.graphs().first().edges}).get());

// Get all edges associated with a node
//console.log(db.edges([
//  {to:db.nodes({title:"My Second Node"}).first().___id},
//  {from:db.nodes({title:"My Second Node"}).first().___id}
//]).get());

// Get all graphs that contain a node
//var nodeID = db.nodes({title:"My Fourth Node"}).first().___id;
//console.log(db.graphs(function() {
//  for (var i=0;i<this.nodes.length;i++) {
//    if (this.nodes[i] === nodeID) {
//      return true;
//    }
//  }
//  return false;
//}).get());

// Testing the "onInsert" event implemntation
//db.nodes.settings().onInsert = function() {
//  console.log(this);
//};
//db.nodes.insert({title:"Test"});

// Testing get just the data based on the template
//console.log(db.nodes().get());

// Testing manually incrementing the taffy db record index
//console.log(db.nodes().getDBI().dm());
//
//db.nodes.insert({title:"test", ___id:"myID"});
//console.log(db.nodes().last());

// Testing update of nodeId within array in graph
db.graphs().each(function(g,gIdx) {
  console.log(gIdx + ":");
  console.log(g);
  db.graphs(g.___id).update({rating:"3"});
});
console.log(db.graphs().get());