//Luodaan settejä ja funktioita niiden käsittelyyn.

//union-funktio yhdistää parametrinä annetun settitaulukon setit
//uudeksi setiksi.
function union(coders) {
  const unionSet = new Set();
  coders.forEach((s) => {
    //tämä toteutetaan jokaiselle setille erikseen.
    for (const e of s) {
      unionSet.add(e);
    }
  });
  return unionSet;
}

//haveCodeSkill-funktio ottaa parametrinä settitaulukon ja
//haettavan kielen. Funktio palauttaa boooleanin.
function haveCodeSkill(coders, lan) {
  //has-metodilla tarkistetaan tietyn kielen olemassaolo setissä
  const set = union(coders);
  return set.has(lan);
}

const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Haskell', 'Ruby']);

const coders = [coderA, coderB, coderC];

console.log('Skill of Go is ' + haveCodeSkill(coders, 'Go'));

module.exports = { union, haveCodeSkill };
