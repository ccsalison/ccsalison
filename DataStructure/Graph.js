function Graph(){
  this.adjList = {}
}

Graph.prototype.addVertex = function(vertex){
  this.adjList[vertex] = []
}

Graph.prototype.addEdge = function(vertex1, vertex2){
  this.adjList[vertex1].push(vertex2)
}

Graph.prototype.dfs = function() {
  // Creates an array called “nodes”; every element is a vertex in our graph
  const node = Object.keys(this.adjList)
  // Creates an object literal called “visited”
  const visited = {}
  // Calls our utility function on each vertex in the graph.
  for(let i = 0; i < nodes.length; i++){
    const node = nodes[i]
    this._dfsUtil(node,visited)
  }
}

Graph.prototype._dfsUtil = function(vertex,visited) {
  if(!visited[vertex]){
    visited[vertex] = true
    console.log(vertex,visited)
    const neighbors = this.adjList[vertex]
    for( let i = 0; i < neighbors.length; i++){
      const neighbor = neighbors[i]
        this._dfsUtil(neighbor,visited)
    }
  }
}


//Testing
const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')

graph.addEdge('A','B')

console.log(graph)
