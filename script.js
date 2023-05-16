Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

console.log('gino');
const Fizz = 'Fizz';
const Buzz = 'Buzz';
for (let index = 1; index <= 101; index++){
    console.log(index);
    if (index % 3 === 0){
        console.log('Fizz');
    } else if (index % 5 === 0){
        console.log('Buzz');
    } else if ((index % 3 === 0) && (index % 5 === 0)){
        console.log('BuzzFizz');
    }
}
    
console.log('gina');