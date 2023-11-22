var number = +prompt('Son kiriting!')
if(number % 2 == 0){
    alert('Juft son kiritdingiz')
} else if(number % 2 == 1){
    alert('Toq son kiritdingiz')
} else {
    console.log('Xato kiritdingiz')
}


let user = prompt ('Fakterial raqam kiriting!')
let factorial = 1
for(let a = 1; a <= user; a++){
    factorial = factorial * a
    console.log(factorial)
}