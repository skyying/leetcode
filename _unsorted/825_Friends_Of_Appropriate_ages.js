/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {

    // hashtable all ages
    let ageSet = {};

    for (let i = 0; i < ages.length; i++) {
        ageSet[ages[i]] = ageSet[ages[i]] > 0 ? ageSet[ages[i]]+1 : 1;
    }

    let requests = 0,
        peopleAgeList = Object.keys(ageSet);

    
    for (let i = 0; i < peopleAgeList.length; i++) {

        let ageCount = ageSet[peopleAgeList[i]],
            lowerBound = Math.floor(peopleAgeList[i] / 2) + 8;

        for (let j = lowerBound; j <= peopleAgeList[i]; j++) {
            if (j === +peopleAgeList[i]) {
                requests += ageCount * (ageCount - 1); 
            } else {
                requests += ageCount * (ageSet[j] || 0);
            }
        }
    }
    return requests;
};
console.log(numFriendRequests([16, 16]));
console.log(numFriendRequests([16, 17, 18]));
