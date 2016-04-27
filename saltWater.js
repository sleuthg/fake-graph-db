
'use strict';

// taffyjs used for collections
var TAFFY = require('./taffy.js').taffy;

var nodeCollections=[], edgeCollections=[], graphCollections=[];

// Create Node Collection
// There can be various types of nodes, each needing its own collection
var createNodeCollection = function createNodeCollection(name) {
  if (nodeCollections.length > 0) return;

  var nodes = TAFFY();

  // ... extend this TAFFY collection to do special node collection stuff ... //

  nodes.collection_name = name;
  nodeCollections.push(nodes);
};

// Create Edges Collection
// There can be various types of edges, each needing its own collection
var createEdgeCollection = function createEdgeCollection(name) {
  if (edgeCollections.length > 0) return;
  var edges = TAFFY();

  // ... extend this TAFFY collection to do special edge collection stuff ... //

  edges.collection_name = name;
  edgeCollections.push(edges);
};

// Create Graph Collection
// There can be various types of graphs, each needing its own collection
var createGraphCollection = function createGraphCollection(name) {
  if (graphCollections.length > 0) return;
  var graphs = TAFFY();

  // ... extend this TAFFY collection to do special graph collection stuff ... //

  graphs.collection_name = name;
  graphCollections.push(graphs);
};

var createDB = function createDB(nodesNames, edgesNames, graphsNames) {
  var i;
  for (i=0; i<nodesNames.length; i++) {createNodeCollection(nodesNames[i]);}
  for (i=0; i<edgesNames.length; i++) {createEdgeCollection(edgesNames[i]);}
  for (i=0; i<graphsNames.length; i++) {createGraphCollection(graphsNames[i]);}
};

var SaltWater = {
  createDB: createDB,
  nodes: nodeCollections,
  edges: edgeCollections,
  graphs: graphCollections
};

module.exports = SaltWater;