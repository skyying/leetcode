/**
 * @param {number[][]} grid
 * @return {number}
 * idea: the key concept will be once two blocks are adjacent,
 * both of their adjacent edges will need to be removed. And due to * blocks are examine sequentially, we only need to check if 
 * current blocks top and left edges are adjacent or not.
 * 
 */
var islandPerimeter = function(grid) {
    let perimeter = 0, unit = 4;
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if(grid[y][x]){
                unit = 4;
                let topHasIsland = y > 0 ? grid[y-1][x] : 0,
                    leftHasIsland = x > 0 ? grid[y][x-1] : 0;
                perimeter += unit - ( 2 * (topHasIsland + leftHasIsland));
            }
        }  
    }
    return perimeter;
};


let iinput = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
]
let input = [[1, 1]];

console.log(islandPerimeter(input));


