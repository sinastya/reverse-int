module.exports = function reverse (n) {
  let result = "";
  let i = 0;
  let n_str = Math.abs(n).toString();

  while (i < n_str.length) {
   result = `${n_str[i]}${result}`;
   i ++;
  }
  return +result;
}
