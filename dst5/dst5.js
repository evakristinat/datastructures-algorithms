//Luodaan ja käsitellään jonoa käyttäen valmista kirjastoa apuna.
const Queue = require('queue-fifo');

//makeQueue luo uuden jonon parametrina syötetystä taulukosta.
function makeQueue(arr) {
  const myQueue = new Queue();
  arr.forEach((e) => myQueue.enqueue(e));
  return myQueue;
}

//checkQueue poistaa jonon alusta alkioita kunnes se kohtaa
//stopperin kokoisen tai sitä suuremman arvon ja palauttaa jäljelle
//jääneen jonon.
function checkQueue(myQueue, stopper) {
  while (true) {
    if (myQueue.peek() >= stopper) {
      break;
    }
    myQueue.dequeue();
  }
  return myQueue;
}

//clearQueue tyhjentää jonon alkio kerrallaan ja lisää poistetut samalla
//taulukkoon, joka palautetaan.
function clearQueue(queue) {
  const cleared = [];
  const length = queue.size();
  for (let i = 0; i < length; i++) {
    cleared.push(queue.peek());
    queue.dequeue(queue.peek());
  }
  return cleared;
}

const myQueue1 = makeQueue([2, 1, 9, 15, 3, 4, 7, 5]);

console.log(myQueue1);

console.log(checkQueue(myQueue1, 10));

console.log(clearQueue(myQueue1));

console.log(myQueue1.isEmpty());

module.exports = { makeQueue, checkQueue, clearQueue };
