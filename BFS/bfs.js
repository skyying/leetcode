

let graph = {
    "A" : ["B", "C"],
    "B" : ["A", "C", "D"],
    "C" : ["A", "B", "D", "E"],
    "D" : ["B", "C", "E", "F"],
    "E" : ["C", "D"],
    "F" : ["D"]
}

const BFS = (graph, start) => {
    let queue = [start];
    let seen = new Set();
    seen.add(start)

    while(queue.length > 0) {
        let vertex = queue.shift();
        let nodes = graph[vertex];
        for (const node of nodes) {
            if(!seen.has(node)){
                seen.add(node)
                queue.push(node)
            }
        }
        console.log(vertex);
    }
}

BFS(graph, "A")