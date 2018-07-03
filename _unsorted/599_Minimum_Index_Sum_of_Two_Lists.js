/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

// 解法一, 先把array存到object, 再藉由查詢key，加總index，跟current min值做比較即可
 var findRestaurant = function(list1, list2) {
     const turnListToObj = list => {
         let obj = {};
         list.map((x, i) => { obj[x] = i; });
         return obj;
     };
     let l1 = turnListToObj(list1);
     let l2 = turnListToObj(list2);

     let min = Number.MAX_VALUE, let result = [];
     for (let i = 0; i < Object.keys(l1).length; i++) {
         let name = l1Keys[i];
         if (l1[name] >= 0 && l2[name] >= 0)
             if (l1[name] + l2[name] < min) {
                 min = l1[name] + l2[name];
                 result = [l1[name]];
             } else if (l1[name] + l2[name] === min) {
                 console.log("abc");
                 result.push([l1[name]]);
             }
     }
     return result.map(x => list1[x]);
 };

//解法二, loop array, 如果現在的item 另外一個list也有，那就加總index, 看有沒有比current
//min小，有的話就reset result, 若等於min, 則把餐廳名字加到result。
//時間是o(n^2)
var findRestaurant = function(list1, list2) {
    let min = Number.MAX_VALUE,
        result = [];
    list1.map((x, i) => {
        let n = list2.indexOf(x);
        if (n !== -1 && n + i < min) {
            min = n + i;
            result = [x];
        } else if (n !== -1 && n + i === min) {
            result.push(x);
        }
    });
    return result;
};

let l1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
let l2 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
];
console.log("findRestaurant(l1, l2)", findRestaurant(l1, l2));
