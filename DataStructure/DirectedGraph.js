//building a directed graph with adjacency list
// bfs()
// dfs()

// Reference: 
// https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563
// https://www.geeksforgeeks.org/implementation-graph-javascript/

// create a graph 
class Graph {

    constructor() {
        // this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        
        // this.AdjList.set(v,[]);
        // equivalent:
        if(!this.AdjList.has(v)){
            this.AdjList.set(v, []);
            // console.log(v)
            // this.noOfVertices++;
        }else{
            throw "Vertex exist. Nothing is done."
        }
    }

    removeVertex(v){
        this.AdjList.delete(v);
        // this.noOfVertices--;
    }

    addEdge(v, w){

        if(this.AdjList.has(v)){
            this.AdjList.get(v).push(w);
        }else{
            throw "Vertex not exist. Please add vertex."
        }
        
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
            console.log(key + " : " + value)
        }
    }


// function to performs BFS 
bfs(startingNode) 
{ 

	// create a visited array 
	var visited = []; 
	for (var i = 0; i < this.noOfVertices; i++) 
		visited[i] = false; 

	// Create an object for queue 
	var q = new Queue(); 

	// add the starting node to the queue 
	visited[startingNode] = true; 
	q.enqueue(startingNode); 

	// loop until queue is element 
	while (!q.isEmpty()) { 
		// get the element from the queue 
		var getQueueElement = q.dequeue(); 

		// passing the current vertex to callback funtion 
		console.log(getQueueElement); 

		// get the adjacent list for current vertex 
		var get_List = this.AdjList.get(getQueueElement); 

		// loop through the list and add the element to the 
		// queue if it is not processed yet 
		for (var i in get_List) { 
			var neigh = get_List[i]; 

			if (!visited[neigh]) { 
				visited[neigh] = true; 
				q.enqueue(neigh); 
			} 
		} 
	} 
} 

}






var test = new Graph();
test.addVertex('a');
// test.addVertex('a');
test.addVertex('b');
test.addEdge('a','b')
test.addEdge('a','c')
test.addVertex('c');
test.printGraph();
// console.log(test.AdjList['a'])
// // console.log(test.AdjList['b'])

