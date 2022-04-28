const zucchine = [
  {
    nome: 'Zolotinka',
    pesoInKg: 0.70,
    lunghezzaInCm: 40,
  },
  {
    nome: 'Skvorushka',
    pesoInKg: 0.50,
    lunghezzaInCm: 12,
  },
  {
    nome: 'Medusa',
    pesoInKg: 0.80,
    lunghezzaInCm: 25,
  },
  {
    nome: 'Iskander',
    pesoInKg: 0.65,
    lunghezzaInCm: 20,
  },
  {
    nome: 'White Swan',
    pesoInKg: 1,
    lunghezzaInCm: 13,
  },
  {
    nome: 'Aral',
    pesoInKg: 0.55,
    lunghezzaInCm: 15,
  },
  {
    nome: 'Nostromo',
    pesoInKg: 3,
    lunghezzaInCm: 9,
  },
  {
    nome: 'Karisma',
    pesoInKg: 0.70,
    lunghezzaInCm: 25,
  },
  {
    nome: 'Arles',
    pesoInKg: 0.60,
    lunghezzaInCm: 21,
  },
  {
    nome: 'Helena',
    pesoInKg: 0.50,
    lunghezzaInCm: 10,
  }
];

sommaPesoZucchine();

function sommaPesoZucchine(){
  let somma = 0;
   for (const i in zucchine) {
     console.log(zucchine[i].pesoInKg, typeof(zucchine[i].pesoInKg));
     somma += zucchine[i].pesoInKg;    
   }
  console.log(somma, 'Kg')
}