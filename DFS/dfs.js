let graph = {
    "A" : ["B", "C"],
    "B" : ["A", "C", "D"],
    "C" : ["A", "B", "D", "E"],
    "D" : ["B", "C", "E", "F"],
    "E" : ["C", "D"],
    "F" : ["D"]
}

const DFS = (graph, start) => {
    let stack = [start];
    let seen = new Set();
    seen.add(start);
    while( stack.length > 0){
        let vertex = stack.pop();
        let nodes = graph[vertex];

        for (const node of nodes) {
            if(!seen.has(node)){
                seen.add(node)
                stack.push(node)
            }
        }
        console.log(vertex);
    }
}

DFS(graph, "A")