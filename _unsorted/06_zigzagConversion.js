/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {

    if(numRows===1) return s;
    
    var interval = (2 * numRows) - 2,
        ans = "",
        j, currentIndex, mid;

    for (var i = 0; i < numRows; i++) {
        
        j = 0;
        currentIndex = i + (j * interval)

        while ( (currentIndex - interval) < s.length) {

            mid = s[currentIndex - (2 * i)];
            
            if (i > 0 && i < (numRows - 1)) {
                    ans += mid || "";
            }
            
            ans += s[currentIndex] || "";
            j++;
            currentIndex = i + (j * interval);
        }
    }
    return ans;
};


console.log("==== Row 3", convert("0123456", 3) === "0413526");
console.log("==== Row 4", convert("0123456", 4) === "0615243");


