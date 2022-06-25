const repeatString = function(String,rep) {
    let StringRep = String;
    for (let index = 1; index < rep; index++) {
        StringRep = StringRep + String;
        
    };
    return(StringRep);
};

// Do not edit below this line
module.exports = repeatString;
