module.exports = function check(str, bracketsConfig) {
  let brackets = [];

  for (let elem of bracketsConfig) {
    brackets.push(elem.join(''));
  }

  for (let i = 0; i < brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '');
      i = -1;
    }
  }

  return str.length === 0;
};