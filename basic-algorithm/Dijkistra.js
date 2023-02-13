import Graph from "./Graph/Graph.js";
import PriorityQueue from "./PriorityQueue.js";

let infinity = 1000000;

export default function findShortestPath(G, source, dest) {
    let nodeCount = G.nodeCount;
    // assuming that source and destination will be provided as their ids
    let pq = new PriorityQueue(G.nodeCount * 5);
    let prevNodes = new Array(nodeCount + 1).fill(-1);
    let visited = new Array(nodeCount + 1).fill(false);
    let distances = new Array(nodeCount + 1).fill(infinity);
    distances[source] = 0;
    pq.push(source, 0);
    while (true) {
        let topElem = { ...pq.top() };
        pq.pop();
        if (topElem.nodeID === dest) {
            break;
        }
        if (!visited[topElem.nodeID]) {
            visited[topElem.nodeID] = true;
            // console.log("currently exploring: " + topElem.nodeID);
            G.adj[topElem.nodeID].forEach((node) => {
                if (!visited[node.nodeID]) {
                    // console.log("discovering: " + node.nodeID);
                    // console.log("curr val: " + distances[node.nodeID]);
                    // console.log("final val: " + parseFloat(parseFloat(distances[topElem.nodeID]) + parseFloat(node.time)));
                    if (distances[node.nodeID] > distances[topElem.nodeID] + node.time) {
                        distances[node.nodeID] = parseFloat(distances[topElem.nodeID]) + parseFloat(node.time);
                        pq.push(node.nodeID, node.time);
                        prevNodes[node.nodeID] = topElem.nodeID;
                    }
                }
            });
        }

    }
    // console.log("explored!");
    let path = [];
    let currNode = dest;
    while (true) {
        path.push(currNode);
        currNode = prevNodes[currNode];
        if (currNode === -1) {
            break;
        }
    }

    return path.reverse();
}