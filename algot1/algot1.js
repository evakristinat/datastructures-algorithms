const readLineSync = require('readline-sync');

//collectFeed kokoaa ja näppäimistöltä syötetyt merkit jonoon,
//kunnes painetaan #. Lopuksi palautetaan merkkijono ilman päätösmerkkiä.
function collectFeed() {
  let string = '';
  let key = '';
  while (key !== '#') {
    key = readLineSync.keyIn('Anna merkki:');
    key === '#' ? string : (string += key);
  }
  return string;
}


module.exports = collectFeed;
