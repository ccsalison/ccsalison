//building a directed graph with adjacency list
// bfs()
// dfs()

// Reference: https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563

// create a graph class
function Graph(noOfVertices) {


    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    



    // addEdge(v,w){
    //     thiss.AdjList.get(v).set(w);
    // }

    // // prints the vertices with its adjacency list
    // printGraph(){
    //     var get_keys = this.AdjList.keys();
    //     console.log(get_keys);
    //     // for(var key in get)
    // }
};

Graph.prototype.addVertex = function(v){
    this.AdjList.set(v,[]);
    // equivalent 
}


