const ftoc = function(F) {
  F = (F - 32) * 5/9;
  const result = parseFloat(F.toFixed(1))
  return result;
};

const ctof = function(C) {
  C = C * 9/5 + 32;
  const result = parseFloat(C.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
