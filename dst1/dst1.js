//Luodaan funktioita, jotka käsittelevät taulukossa sijaitsevia tuloksia.

//setScore asettaa parametrina ensimmäisenä allettuun tulostaulukkoon
//toisena parametrina annetun tuloksen.
function setScore(scores, newScore) {
  scores.push(newScore);
}

//getScores palauttaa kaikki tulokset (taulukon).
function getScores(scores) {
  return scores;
}

//highest palauttaa suurimman tuloksen.
function highest(scores) {
  return Math.max(...scores);
}

//latest palauttaa uusimman tuloksen.
function latest(scores) {
  return scores[scores.length - 1];
}

//topThree palauttaa kolme parasta tulosta järjestämällä taulukon tulokset
//suurimmasta pienimpään ja valitsemalla vain kolme ensimmäistä.
function topThree(scores) {
  const sortedscores = [...scores].sort((a, b) => b - a);
  return sortedscores.slice(0, 3);
}

const score = [];

setScore(score, 1);
setScore(score, 10);
setScore(score, 4);
setScore(score, 7);
setScore(score, 9);

console.log('Paras tulos: ' + highest(score));
console.log('Kolme parasta: ' + topThree(score).join(', '));
console.log('Viimeisin tulos: ' + latest(score));
console.log('Tulokset: ' + getScores(score).join(', '));

module.exports = { setScore, getScores, highest, latest, topThree };