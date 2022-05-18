const readLineSync = require('readline-sync');

//collectFeedRec on versio edellisestä collectFeed funktiosta, joka käyttää rekursiota.
function collectFeedRec(str = '') {
  const key = readLineSync.keyIn('Anna merkki: ');
  if (key === '#') {
    return str;
  } else {
    str += key;
    //funktio kutsuu itseään lisäten samalla parametriin, kunnes se pysätetään.
    return collectFeedRec(str);
  }
}
console.log(collectFeedRec());

module.exports = collectFeedRec;
