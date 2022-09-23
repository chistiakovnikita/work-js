import "./main.scss";







// const currency = {
//     usd: 'dollar',
//     blr: 'bel rouble',
//     rus: 'russian rouble'
// }



// let descriptor = Object.defineProperty(currency, 'usd',{
// writable:false,
// });

// currency.usd = 'aghjhdashjds'
// alert(descriptor[currency]);



// function sum (a,b){
//     alert( a +b)
// }

// sum( 1,2)


// let sum
// let sum1
// const fn = (...param) =>{
//     let sum = 0;
//     for ( sum1 of param) {
//         sum += sum1
//     }

//     return sum;
// }

// console.log(fn(1,2,3,4,5));

let min = (a,b) => {
if (a<b){
    return a;
}else{
        return b
    }
}

console.log(min(50,10));