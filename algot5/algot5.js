//mahdollisimman hidas ratkaisu. Etenkin sisäkkäiset loopit erityisen hitaita
//aikavaativuus on 0(n*n*n*n)???(tarkista)

//käydään merkit läpi ja verrataan seuraaviin merkkeihin
//jos käsitellään pitkää merkkijonoa, voidaan lyhyet alimerkkijonot
//eliminoida.
function getAllSubstrs(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      //käsitellään i:stä seuraavaa merkkiä
      const substr = str.slice(i, j); //slice ei ota mukaan j:tä, joten length +1 on mahdollinen
      result.push(substr);
    }
  }
  return result;
}

function findLcsBrute(s1, s2) {
  const s1subs = getAllSubstrs(s1);
  const s2subs = getAllSubstrs(s2);
  //vertaillaan alimerkkijonotaulukoita, etsitään yhteiset alkiot
  //vähimmällä koodilla päästään filter-metodilla.
  const intersect = s1subs.filter((ele) => s2subs.includes(ele));
  //etsitään intersect taulukosta pisin alimerkkijono.
  //reduce vertaa taulukon alkioita a ja b. Ternary on lyhyempi if.
  const lcs = intersect.reduce((a, b) => (a.length > b.length ? a : b), '');
  return lcs;
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

module.exports = { getAllSubstrs, findLcsBrute, genString };
