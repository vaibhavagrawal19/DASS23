import Graph from "./Graph/Graph.js";  
import findShortestPath from "./Dijkistra.js";

let G = new Graph(10000);

let bakul = G.addNode("bakul");
let parijaat = G.addNode("parijaat");
let nilgiri = G.addNode("nilgiri");
let generator = G.addNode("generator");
let vc = G.addNode("vc");
let jc = G.addNode("jc");
let kadamb = G.addNode("kadamb");

G.addPath(bakul.nodeID, parijaat.nodeID, 2, ["move towards the south direction", "your destination is on your right"], ["move towards north direction", "move towards the road intersection", "your destination is on your left"]);
G.addPath(parijaat.nodeID, jc.nodeID, 1000, ["move towards the south direction", "continue straight on the first road intersection", "on the second road intersection, take a slight left turn and go straight."]);
G.addPath(jc.nodeID, generator.nodeID, 3, ["move towards the east direction", "stop at the first intersection. You should see a huge generator."], ["move towards the west direction", "you should see a huge generator."]);
G.addPath(generator.nodeID, vc.nodeID, 1, ["move towards the north direction", "at the intersection, you will see the canteen, your destination"], ["move towards the south direction", "you should see a huge generator."]);
G.addPath(bakul.nodeID, nilgiri.nodeID, 1, ["move towards the east direction", "your destination is to your right."]);
G.addPath(nilgiri.nodeID, vc.nodeID, 10);
// G.addPath(kadamb.nodeID, vc.nodeID, 3);
// G.addPath(parijaat.nodeID, kadamb.nodeID, 2);

// console.log(kadamb);
// console.log()



let path = findShortestPath(G, bakul.nodeID, nilgiri.nodeID);
path.forEach((elem) => {
    console.log(G.nodeList[elem].desc);
});

