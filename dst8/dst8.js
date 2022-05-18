//Toteutetaan graph-data-structure -kirjaston avulla verkko.
//Verkossa kaikki solmut yhdistyvät kaarien avulla, joten rakenne on suljettu,
//toisinkuin binäärihakupuussa.
const Graph = require('graph-data-structure');

//Funktio createGraph luo verkon sille annetuista arvoista.
function createGraph(values) {
  const g = new Graph();
  //addEdge hyväksyy parametreikseen ensin kaksi solmua (luodaan jos ei jo olemassa)
  //ja valinnaisesti viimeisenä niiden välisen painon/etäisyyden. Tästä syystä funktioon syötettyjen
  //arvojen tulee olla juuri siinä järjestyksessä.
  values.forEach((e) => {
    g.addEdge(...e);
  });
  return g;
}

//Funktio shortestDist palauttaa lyhimmän mahdollisen etäisyyden(painon) annettujen solmujen
//välillä hyödyntäen kirjaston metodia.
function shortestDist(graph, x, y) {
  //shortestPath toteuttaa Dijkstras Algoritmin ja palauttaa kaikki solmut lyhimmällä reitillä
  //taulukon muodossa. Taulukolla on myös weight ominaisuus, joka kertoo lyhimmäin reitin kokonaispainon.
  const path = graph.shortestPath(x, y);
  return path.weight;
}

values = [
  ['a', 'b', 7],
  ['a', 'c', 9],
  ['a', 'f', 14],
  ['b', 'c', 10],
  ['b', 'd', 15],
  ['c', 'd', 11],
  ['c', 'f', 2],
  ['d', 'e', 6],
  ['f', 'e', 9],
];

const g = createGraph(values);
const dist = shortestDist(g, 'a', 'e');

//Kutsutaan suoraan kirjaston serialize-metodia. Metodi erittelee verkon solmut antaen niille id:t
//ja erittelee kaikki solmujen väliset yhteydet painoineen.
console.log('Serialisoitu verkko: ');
console.log(g.serialize());

//Topologinen lajittelu tarkoittaa suunnatun verkon solmujen lajittelua järjestykseen siten,
//että solmuun ei mennä mikäli siinä on viittauksia solmuista, joissa ei ole käyty.
//Tässä kirjastossa luotu kääntämällä depth first tulos ympäri.
console.log('Topologinen lajittelu: ');
console.log(g.topologicalSort());
console.log('Lyhyin etäisyys a-e: ');
console.log(dist);
