// Jsnack 4
// Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
// Stampa a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
  {
    nome: 'Franco',
    peso: 10
  },
  {
    nome: 'Ciro',
    peso: 8
  },
  {
    nome: 'Peppe',
    peso: 75
  },
  {
    nome: 'Manuel',
    peso: 23
  }
];

let target = document.querySelector('#target');
console.log(target);
let pesoInit = bici[0].peso;
let piuLeggero;

for (const iterator of bici) {

  const {nome , peso} = iterator;

 if(peso < pesoInit) {

  pesoInit = peso;
  piuLeggero = iterator

 } else pesoInit = pesoInit;
 console.log(piuLeggero);
}


 target.innerHTML = `La bici con il minor peso è ${piuLeggero.nome} il cui peso è ${piuLeggero.peso} Kg`;