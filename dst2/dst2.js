//Luodaan mappeja ja funktioita niiden käsittelyyn.

//sum-funktio palauttaa kaupan tuotteiden hintojen summan.
function sum(shop) {
  let sum = 0;
  //values() palauttaa iteraattoriobjektin, joka sisältää kaikki kaupan arvot(hinnat).
  for (const value of shop.values()) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}

//createSumMap palauttaa mapin kaupoista ja niiden tuotteiden hintojen summista.
function createSumMap(key, ...shops) {
  const sumMap = new Map();
  shops.forEach((s) => {
    //Map.get(key) on valmis metodi avaimen noutamiseen, joka toimii vain Mapin kanssa.
    const name = s.get(key);
    //kutsutaan aiemmin luotua funktiota selvittämään kauppojen hintojen summat.
    const summ = sum(s);
    //Map.set(key, value) on myös javascriptin valmis metodi Mapille, joka päivittää
    //tai lisää arvoparin settiin.
    sumMap.set(name, summ);
  });
  return sumMap;
}

//minValueMap käy läpi parametrina annetun mapin etsien ja palauttaen pienimmän arvoparin.
function minValueMap(mapX) {
  //asetetaan aluksi suurin mahdollinen arvo(numero) minimiarvoksi, jotta voidaan varmistua, että kaikki arvot käydään läpi
  //ja että pienin luku löytyy varmasti annetuista arvoista.
  let minVal = Number.MAX_VALUE;
  let minValKey = '';
  mapX.forEach((value, key) => {
    if (typeof value === 'number' && value < minVal) {
      minVal = value;
      minValKey = key;
    }
  });
  const minValueMap = new Map([[minValKey, minVal]]);
  return minValueMap;
}

const xkauppa = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppa = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppa = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

const smap = createSumMap('nimi', xkauppa, ykauppa, zkauppa);
console.log(minValueMap(smap));

module.exports = { sum, createSumMap, minValueMap };
