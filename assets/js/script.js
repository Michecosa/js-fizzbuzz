/* 
  Scrivi un programma che stampi i numeri da 1 a 100,
  ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// Ciclo da 1 a 100 per stampare:
// - "Fizz" per i multipli di 3
// - "Buzz" per i multipli di 5
// - "FizzBuzz" per i multipli di entrambi
// Altrimenti, stampo il numero
for(let i=1; i<=100; i++) {
  // Calcolo una sola volta le due condizioni di divisibilità
  const divisibleBy3 = i % 3 == 0; // true se i è multiplo di 3
  const divisibleBy5 = i % 5 == 0; // true se i è multiplo di 5

  // 1. Se è divisibile sia per 3 che per 5, stampo "FizzBuzz"
  if( divisibleBy3 && divisibleBy5){
    console.log("FizzBuzz");

  // 2. Altrimenti, se è solo divisibile per 3, stampo "Fizz"
  } else if ( divisibleBy3 ) {
    console.log("Fizz");

  // Altrimenti, se è solo divisibile per 5, stampo "Buzz"
  } else if( divisibleBy5 ) {
    console.log("Buzz");

  // Altrimeniti, stampo il numero (nessuna delle condizioni precedenti è vera)
  } else {
    console.log(i);
  }
}