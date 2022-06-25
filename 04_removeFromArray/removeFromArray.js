const removeFromArray = function(ray,text) {
    let rem = ray.indexOf(text);
    ray.splice(rem,1);
    return(ray)
};

// Do not edit below this line
module.exports = removeFromArray;
