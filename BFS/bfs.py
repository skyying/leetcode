
# exercise of BFS

graph = {
    "A" : ["B", "C"],
    "B" : ["A", "C", "D"],
    "C" : ["A", "B", "D", "E"],
    "D" : ["B", "C", "E", "F"],
    "E" : ["C", "D"],
    "F" : ["D"]
}

def BFS(graph, start): 
    # build a queue
    queue = [start]
    # build a set to store visted node
    seen = set()
    seen.add(start)
    # while still have nodes to visit in queue
    while(len(queue) > 0):
        # start from first node in queuu
        vertex = queue.pop(0)
        nodes  = graph[vertex]

        # loop through all nodes
        for node in nodes:
            # if current is not visited
            if node not in seen:
                # append it to queue, and mark it as seen
                queue.append(node)
                seen.add(node)
        print(vertex)

BFS(graph, "C")