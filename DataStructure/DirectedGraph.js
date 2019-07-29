//building a directed graph with adjacency list
// bfs()
// dfs()

// Reference: https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563

// create a graph 
class Graph {

    constructor() {
        // this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        // this.AdjList.set(v,[]);
        // equivalent:
        if(!this.AdjList.has(v))
        this.AdjList[v] = [];
        this.noOfVertices++;
        // console.log(v)
    }

    removeVertex(v){
        this.AdjList.delete(v);
        this.noOfVertices--;
    }

    addEdge(v, w){
        this.AdjList[v].push(w);
    }

    printGraph(){
        // var vertex_keys = this.AdjList.keys();
        // console.log(vertex_keys)
        // for(var vertex_key of vertex_keys){
        //     console.log(vertex_key)
        //     var v_edges = this.AdjList.get(vertex_key);
        //     var conc = "";

        //     for(var edges of v_edges){
        //         conc += edges + " ";
        //     }

        //     console.log(vertex_key + " -> " + conc);
        // }
        for(let [key,value] of this.AdjList){
            console.log(key + ":" + value)
        }
    }
}



var test = new Graph();
test.addVertex('a');
test.addVertex('b');
test.addEdge('a','b')
test.addVertex('c');
test.printGraph();
// console.log(test.AdjList['a'])
// // console.log(test.AdjList['b'])

// // for(var vertex_key in test.AdjList.keys()){
// //     console.log(vertex_key)
// // }
