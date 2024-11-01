class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graphs
    }
  
    printGraph() {
      for (const vertex in this.adjacencyList) {
        console.log(vertex, "->", this.adjacencyList[vertex]);
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'C');
  graph.printGraph();D