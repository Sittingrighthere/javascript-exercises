const palindromes = function (string) {
    let a = string.toLowerCase().replace(/[^a-z]/g, "");
    let s= string.toLowerCase().replace(/[^a-z]/g, "").split("").reverse();
    let j=s.join("");
    if (j === a) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
