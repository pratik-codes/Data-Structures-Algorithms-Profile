/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = (num) => {
  if (num < 1) return false;
  if (num === 1) return true;

  var divisor = [2, 3, 5];

  for (var i = 0; i < divisor.length; i++) {
    while (num && num % divisor[i] === 0) {
      num = Math.floor(num / divisor[i]);
      console.log(num);
    }
  }
  return num === 1;
};

console.log(isUgly(17));
