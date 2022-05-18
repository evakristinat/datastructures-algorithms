/* eslint-disable new-cap */
//Disable new-cap on otettava käyttöön, jotta kirjaston metodien isolla
//alkukirjaimella aloitetut nimet hyväksytään.
const L = require('simple-double-linked-list');

//listFromArray luo listan taulukosta käyttäen kirjaston List-luokkaa.
//Funktio lisää jokaisen taulukon alkion listaan alkuperäisessä järjestyksessä.
function listFromArray(arr) {
  const list = new L.List();
  arr.forEach((e) => {
    list.AddFront(e);
  });
  return list;
}

//InsertToIndexin avulla voidaan lisätä uusi node (item) listan haluttuun indeksiin.
//Mikäli indeksiä ei anneta tai indeksi on listan ulkopuolella lisäys ei onnistu.
function insertToIndex(list, index, item) {
  if (index < 0 || index > list.size) {
    return false;
  }
  const iterator = list.Begin();
  for (let i = 0; i < index - 1; i++) {
    iterator.Next();
  }
  list.InsertAfter(item, iterator);
  return true;
}

//RemoveFromIndex poistaa noden toisena parametrina annetusta sijainnista.
//Funktio toimii vain jos annettu sijainti on käytössä.
function removeFromIndex(list, index) {
  if (index < 0 || index > list.size) {
    return false;
  }
  const iterator = list.Begin();
  for (let i = 0; i < index; i++) {
    iterator.Next();
  }
  list.Remove(iterator);
  return true;
}

//Printlist tulostaa listan hyödyntäen kirjaston metodeita.
//Funktio iteroi listan läpi alusta loppuun tulostaen jokaisen arvon yksitellen.
function print(list) {
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    console.log(item.Value());
  }
  console.log('');
}

//PrintReverse tekee saman kuin print, mutta käänteisessä järjestyksessä.
function printReverse(list) {
  for (const item = list.End(); item.Value() !== null; item.Previous()) {
    console.log(item.Value());
  }
  console.log('');
}

const track1 = 'Foushee - Deep End';
const track2 = 'Giovanni Volpi - Ocean Vibes';
const track3 = 'Kinneret - No Wind Resistance!';
const track4 = 'Penelope Scott - Rät';
const track5 = 'Popp Hunna - Adderall';

const arr = [track1, track2, track3, track4];

const myList = listFromArray(arr);

insertToIndex(myList, 2, track5);
removeFromIndex(myList, 3);
print(myList);
printReverse(myList);

module.exports = {
  listFromArray,
  insertToIndex,
  removeFromIndex,
  print,
  printReverse,
};
