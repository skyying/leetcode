/**
 * @param {string[]} cpdomains
 * @return {string[]}
 * problem : https://leetcode.com/problems/subdomain-visit-count/description/
 * idea : 先用跑迴圈的方式組出domain name的combination, 再把這些Combination放到dict內，
 * 由於dict內key值不會重複，剛好可以利用是否已經存在這個property來決定要加上數值或者是把新的domain name 加入dict.
 */
var subdomainVisits = function(cpdomains) {

    let re = /\w+/g, countResult = {}, result = [];
    let cp = cpdomains.map((x) => x = x.match(re));

    for(let i = 0; i < cp.length ; i++){
        let prop = "";
        for(let j = cp[i].length-1; j > 0; j--){
            prop = prop ? (cp[i][j] + "." + prop) : cp[i][j];
            if(countResult.hasOwnProperty(prop)){
               countResult[prop]  += +cp[i][0];
            }else{
               countResult[prop]  = +cp[i][0];
            }
        }
    }
    for(key in countResult){
        result.push(countResult[key] + " " + key);
    }
    return result;
};

let input = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

console.log(subdomainVisits(input));
console.log(["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]);
