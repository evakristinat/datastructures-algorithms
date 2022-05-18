function findMostFreqBrute(arr) {
  let max = 1; //suurin samojen alkioiden lkm
  let found = 1; //yhdellä kierroksella löydetty
  let mostf; //useimmiten esiintyvä arvo
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        found++;
      }
      if (max < found) {
        max = found;
        mostf = arr[i];
      }
    }
    found = 0;
  }
  return mostf;
}

//luodaan suuri taulukko satunnaisilla luvuilla 1-9.
function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * 9) + 1;
    arr.push(random);
  }
  return arr;
}

//const arr = [1, 2, 3, 1, 2, 3, 3, 4, 1, 2];
const arr = createNumArr(1000);

const mf = findMostFreqBrute(arr);
console.log(`Useimmin esiintyvä alkio on: ${mf}`);

module.exports = { findMostFreqBrute, createNumArr };
