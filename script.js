Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

for (let index = 0; index <= 100; index++){
    if(index % 3 === 0){
        index = 'Fizz'
    } else if (index % 5 === 0){
        index = 'Buzz'
    } else if ((index % 3 === 0) && (index / 5 === 0)){
        index = 'FizzBuzz'
    } else {
        index = 1
    }
    console.log(index)
}