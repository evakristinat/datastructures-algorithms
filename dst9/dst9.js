//Luodaan yksinkertainen binäärihakupuu bst-js-kirjaston avulla.
const Node = require('bst-js');

//Funktio createTree luo puun annetulla juurella ja arvoilla ja palauttaa puun.
function createTree(root, values) {
  const tree = new Node(root);
  tree.insert(...values);
  return tree;
}
//Määritetään puun oksien/lehtien arvot
const values = [2, 6, 23, 1, 12, 21, 5];

//Luodaan puu "tree" kutsuen createTree funktiota
const tree = createTree(10, values);

console.log(tree);

console.log('Breadth-first search:');

//Kutsutaan kirjaston funktiota, joka hakee tiedot leveyssuunnassa.
tree.breadthFirst(function () {
  console.log(this.value);
});

console.log('Depth-first search:');

//Kutsutaan kirjaston funktiota, joka hakee tiedot korkeussuunnassa.
tree.depthFirst(function() {
  console.log(this.value);
});


module.exports = { createTree };
