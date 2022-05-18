//Dynaamisen ohjelmoinnin

function findLcs() {
  let lcslen = 0;
  let index = 0;
  const lcsarr = [];
  for (let i = 0; i < s1.length; i++) {
    lcsarr[i] = [];
    for (let j = 0; j < array.length; j++) {}
  }
}

function genString(charset, len) {
  let str = ''; //tyhjä merkkijono, johon rakennetaan
  for (let i = 0; i < len; i++) {
    //otetaan satunnainen merkki charsetistä ja liitetään se str-merkkijonoon
    str += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return str;
}
const str1 = genString('ATGC', 100);
const str2 = genString('ATGC', 100);
const lcs = findLcsBrute(str1, str2);
console.log(lcs);

module.exports = { findLcs, genString };
