const sumAll = function(start,end) {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum = sum + index;       
    };
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
