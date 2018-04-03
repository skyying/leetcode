/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.unshuffled = nums;
    return Solution.shuffle; 
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.unshuffled;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
    var shuffledArray = this.unshuffled.slice(0);
    var i= shuffledArray.length, randomIndex, tmp;

    // using Fisher–Yates shuffle algorithm;
    //loop through i in descending order, start from array.length - 1; 
    while(--i>0){
        
        // get a random index between i and 0;
        randomIndex = Math.floor(Math.random() * (i + 1) );
        

        //swap shuffledArray[random index] and shuffledArray[i](right element)
        tmp = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = shuffledArray[i];
        shuffledArray[i] = tmp;
    }

    return shuffledArray;
    
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */