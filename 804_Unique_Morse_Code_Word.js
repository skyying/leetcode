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




let a  = ["gin", "zen", "gig", "msg"];


console.log(uniqueMorseRepresentations(a));



