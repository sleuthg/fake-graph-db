
var db = require('./saltWater.js');

db.createDB(['nodes_1'], ['edges_1'], ['graphs_1']);

// Make some nodes
db.nodes[0].insert([
  {name:"My First Node"},
  {name:"My Second Node"},
  {name:"My Third Node"},
  {name:"My Fourth Node"},
  {name:"My Fifth Node"},
  {name:"My Sixth Node"}
]);
//console.log(db.nodes[0]({name:"My Second Node"}).first().___id);

// Get the nodes
node_ids = db.nodes[0]().select('___id');

// Make some edges
db.edges[0].insert([
  {from:node_ids[0], to:node_ids[1]},
  {from:node_ids[1], to:node_ids[2]},
  {from:node_ids[2], to:node_ids[4]},
  {from:node_ids[2], to:node_ids[5]}
]);

// Get the edge ids (@todo: right now these are not unique compared to the node ids, which will eventually be a problem)
edge_ids = db.edges[0]().select('___id');

// Make some graphs
db.graphs[0].insert([
  {nodes:[node_ids[0], node_ids[1], node_ids[2]], edges:[edge_ids[0],edge_ids[1]]},
  {nodes:[node_ids[2], node_ids[4], node_ids[5]], edges:[edge_ids[2],edge_ids[3]]}
]);
//console.log(db.graphs[0]().get());

// Get all nodes in a graph
//console.log(db.nodes[0]({___id:db.graphs[0]().last().nodes}).get());

// Get all edges in a graph
//console.log(db.edges[0]({___id:db.graphs[0]().first().edges}).get());

// Get all edges associated with a node
//console.log(db.edges[0]([
//  {to:db.nodes[0]({name:"My Second Node"}).first().___id},
//  {from:db.nodes[0]({name:"My Second Node"}).first().___id}
//]).get());

// Get all graphs that contain a node
//var nodeID = db.nodes[0]({name:"My Fourth Node"}).first().___id;
//console.log(db.graphs[0](function() {
//  for (var i=0;i<this.nodes.length;i++) {
//    if (this.nodes[i] === nodeID) {
//      return true;
//    }
//  }
//  return false;
//}).get());

// Testing the "onInsert" event implemntation
//db.nodes[0].settings().onInsert = function() {
//  console.log(this);
//};
//db.nodes[0].insert({name:"Test"});

// Testing the "template" functionality
db.nodes[0].settings().template = {
  title: "",
  description: "",
  url: "",
  favIconUrl: "",
  type: "",
  rating: "",
  tags: []
};
db.nodes[0].insert({title:"A freakin cool paper."});
console.log(db.nodes[0]().last());