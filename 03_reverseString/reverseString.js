const reverseString = function(text) {
    let array = text.split("");
    const rev = array.reverse();
    return(rev.join("")); 
};

// Do not edit below this line
module.exports = reverseString;
