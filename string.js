const s = "abc"
const t = "ahbgdc"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(let i=0; i< s.length; i++){
        console.log(s[i]);

        for(let j=0; j< t.length; j++){
            console.log(t[j]);
            if(s[i] == t[j]){
                i++;
            }else{
                j++;
            }

            if(i == s.length){
                return true;
            }else{
                return false
            }
        }
    }
};

console.log(isSubsequence(s,t));