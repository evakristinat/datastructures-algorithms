//Luodaan itse setti-rakenne käyttäen taulukkoa pohjana.
class MySet {
//Konstruktori ottaa vastaan valmiin taulukon tai luo sellaisen,
//jos sitä ei anneta.
  constructor(arr) {
    if (arr) {
      this.arr = arr;
      this.size = arr.length;
    } else {
      this.arr = [];
      this.size = 0;
    }
  }

  //add on metodi, joka lisää taulukkoon alkion, mikäli sitä ei
  //ole jo olemassa taulkossa.
  add(data) {
    if (this.arr.indexOf(data) < 0) {
      this.arr.push(data);
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  //delete on metodi, joka poistaa alkion mikäli se on olemassa.
  delete(data) {
    const pos = this.arr.indexOf(data);
    if (pos > -1) {
      this.arr.splice(pos, 1);
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  //has on metodi, joka kertoo booleanina onko parametrina annettu
  //data taulukossa.
  has(data) {
    if (this.arr.indexOf(data) > -1) {
      return true;
    } else {
      return false;
    }
  }

  //union on metodi, joka yhdistää ensimmäiseen parametrina annettuun settiin
  //toisena parametrina annetun setin alkiot.
  union(setA, setB) {
    //otetaan setA muuttujaan u ja lisätään forEachillä kaikki alkiot (addilla) set Bstä Ahan.
    const u = setA;
    setB.arr.forEach((e) => {
      u.add(e);
    });
    return u;
  }
}
const Set1 = new MySet([1, 2, 10]);

const Set2 = new MySet();

Set2.add(10);
Set2.add(20);

console.log(Set1);
console.log(Set2);
console.log(Set1.union(Set1, Set2));
console.log('Sisältääkö Set1 alkion 2: ' + Set1.has(2));

module.exports = MySet;
