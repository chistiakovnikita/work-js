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

// let min = (a,b) => {
// if (a<b){
//     return a;
// }else{
//         return b
//     }
// }

// console.log(min(50,10));


// const sumTo =(n) => {
//     if (n===1) return 1;
//     return n +sumTo(n-1);
    
// }

// consol.log(sumTo(10));


// function sum (a) {
//     return function (b) {
//         return a+b;
//     };
// }


// const list ={
//     a: 'a',
//     b: 'b',
//     next: {
//         a: 'a-1',
//         b: 'a-1',
//         next: {
//            a: 'a-2',
//            b: 'a-2',
//             next:null
           
//         }
//     } 
// };

// const printA =(list) => {
//     list.a =Math.rundom();
//     if (list.next)

    
// }




// let string = 'aaa bbb ccc';
// console.log(string.substring(4,8));
// console.log(string.slice(4,7));
// console.log(string.substr(3));

let array = [ 1, 2, 3, 'underfind', 0, null, '', 'false', 5, 6];


let compact = array.filter((array) => {
    array.length === 'underfind' || 'null' || 0 || '', 'false';
    return array;
}
)
console.log(compact);