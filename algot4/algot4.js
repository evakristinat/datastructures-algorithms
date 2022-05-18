//Algoritmin nopeus on n. O(n) ?????? 

function findMostFreqBrute(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      let value = map.get(key);
      value++;
      map.set(key, value);
    }
  }
  console.log(map);
  const maxvalue = Math.max(...map.values());

  for (const [key, value] of map.entries()) {
    if (value === maxvalue) {
      return key;
    }
  }
}

function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * 9) + 1;
    arr.push(rand);
  }
  return arr;
}

const arr = [1, 2, 3, 2, 1, 4, 1, 2, 1];

const mf = findMostFreqBrute(arr);
console.log(`Useimmin esiintyvä alkio on: ${mf}`);

module.exports = {findMostFreqBrute, createNumArr};
