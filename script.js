
const elemenUl = document.querySelector ('ul');

for (let index = 1; index < 101; index++){
    
    if ((index % 3 === 0) && (index % 5 === 0)) {
        console.log('BuzzFizz');
    } else if (index % 5 === 0){
        console.log('Buzz');
    } else if (index % 3 === 0){
        console.log('Fizz')
    } else{
        console.log(index)
    }
    const li = document.createElement('li');
    li.innerHTML = (index);
    elemenUl.append(li)
}