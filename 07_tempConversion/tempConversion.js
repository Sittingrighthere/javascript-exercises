const ftoc = function(fa) {
  let cel = (fa-32)/1.8;
  celCal = parseFloat(cel.toFixed(1));
  return celCal;
};

const ctof = function(cel) {
  let fa = cel*1.8+32;
  faCal = parseFloat(fa.toFixed(1));
  return faCal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
