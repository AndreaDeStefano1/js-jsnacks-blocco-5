// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

/**
 * 
 * @param {string} string 
 */
// function giraTutto(string){
//   let output = '';
//   const lettere = [];
//   for (let i = 0; i < string.length; i++) {
    
//     lettere.push(string.charAt(i));
    
    
    
   

//   };
//   lettere.reverse();
//   for (let i = 0; i < lettere.length; i++) {
//     output += lettere[i];
   

    
//   } 
//   console.log(output);
// }
// stri = 'cacca'
// giraTutto(stri)

const giraTuttoDue = (string) => string.split('').reverse().join('');

console.log(giraTuttoDue('peppe'));
