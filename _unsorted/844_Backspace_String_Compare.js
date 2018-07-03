/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    if (S.length === 0 && T.length === 0) {
        return true;
    }
    const getFinalString = S => {
        let stack = [];
        for (let i = 0; i < S.length; i++) {
            if (S[i] !== "#") {
                stack.push(S[i]);
            } else {
                stack.pop();
            }
        }
        return stack.join("");
    };

    let nS = getFinalString(S),
        nT = getFinalString(T);

    if (nS.length !== nT.length) {
        return false;
    } else {
        for (let i = 0; i < nS.length; i++) {
            if (nS[i] !== nT[i]) {
                return false;
            }
        }
        return true;
    }
};

console.log(backspaceCompare("ac#b", "ad#a#b"));
