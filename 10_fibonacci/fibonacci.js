const fibonacci = function(a) {
    if (a<0) return "OOPS";
    if(a===0) return 0;
    if (a==1||a==2) return 1;
    let f = 1;
    let b =0;

    for (let i = 1; i < a; i++) {
        let c=f;
        f=f+b;
        b=c;       
    } 
    return f;
};

// Do not edit below this line
module.exports = fibonacci;
