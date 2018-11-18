graph = {
    "A" : ["B", "C"],
    "B" : ["A", "C", "D"],
    "C" : ["A", "B", "D", "E"],
    "D" : ["B", "C", "E", "F"],
    "E" : ["C", "D"],
    "F" : ["D"]
}

def DFS(graph, start):
    stack = [start]
    seen = set()
    seen.add(start)
    while(len(stack) > 0):
        vertex = stack.pop()
        nodes = graph[vertex]
        for node in nodes: 
            if node not in seen:
                stack.append(node)
                seen.add(node)
        print(vertex)

DFS(graph, "A")