
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

console.log(db.graphs[0]().get());