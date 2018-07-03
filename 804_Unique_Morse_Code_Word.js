/* @param {string[]} words
 * @return {number}
 *
 */

var uniqueMorseRepresentations = function(words) {
    const morseTable = [
        ".-"   , 
        "-..." , 
        "-.-." , 
        "-.."  , 
        "."    , 
        "..-." , 
        "--."  , 
        "...." , 
        ".."   , 
        ".---" , 
        "-.-"  , 
        ".-.." , 
        "--"   , 
        "-."   , 
        "---"  , 
        ".--." , 
        "--.-" , 
        ".-."  , 
        "..."  , 
        "-"    , 
        "..-"  , 
        "...-" , 
        ".--"  , 
        "-..-" , 
        "-.--" , 
        "--.."
    ];

    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const pattern = new Set();
    for(let i = 0 ; i < words.length ; i++){
        
        let word = words[i].toLowerCase().split("");
        let wordStr = word.map((w, i) => morseTable[alpha.indexOf(w)]).join("");
        pattern.add(wordStr);
    }
    return pattern.size;
};

// there is a better way, store the query table by dictionary 
// it won't take liner time to query the morse string


let words  = ["gin", "zen", "gig", "msg"];

console.log(uniqueMorseRepresentations(words));



