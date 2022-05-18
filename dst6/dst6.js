//Luodaan funktioita testaamaan onko annettu sana tai lause palindromi.
//Apuna käytetään pinon rakennetta valmiista stack-kirjastosta.
const Stack = require('stack-lifo');

//Ensin sana/lause käännetään käänteiseen järjestykseen, joka tehdään
//asettamalla ensin alkiot pinoon ja siirtäen ne sitten stringiin
//poistaen ne samalla pinosta.
const reverseString = function (str) {
  const s = new Stack();
  let rstr = '';
  for (let i = 0; i < str.length; i++) {
    s.push(str[i]);
  }
  while (s.size() > 0) {
    rstr += s.pop();
  }
  return rstr;
};

//ispalindrome poistaa välilyönnit ja vertaa sitten alkupeäistä ja
//käännettyä stingiä. Funktio palauttaa boolean arvon.
const isPalindrome = function (str) {
  str = str.replace(/ /g, '');
  const rstr = reverseString(str);
  return (rstr == str);
};

const lause = 'saippuakivikauppias';

console.log(isPalindrome(lause));
console.log(reverseString(lause));

module.exports = {reverseString, isPalindrome};
