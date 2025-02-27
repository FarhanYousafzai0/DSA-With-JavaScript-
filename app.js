// Data Structures and Algorithems Begginning to advance questions:



// 1:concatenation:In JavaScript, concatenation refers to combining two or more strings into a single string. There are multiple ways to achieve this:
// const a = 100;
// const b = 240;
// console.log(`The Sum Of a & b is ${a + b}.`);


/* 
2:Type coercion : refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types
For Examples:
*/

// const num = 42;
// const str = "The number is  " + 42;
// console.log(str)



// console.log('1'+1); // result:11  ....In javascript addition have to meaning addition and contenation; when the string and number is ,its called contenation,and the when the number add with number,it's called Addition. 
// console.log('11'* 2);  // result:22
// console.log('33' / 2); // result:16.5
// console.log('50' % 5)  //result:0



// Accept and Print : promot()

//4:Type Casting:
// const age = prompt('Enter Your Age?');
// console.log(age)
// console.log(typeof age)


// The anwser will be the number you Enter in the Promt:
// And the data type will be String:Why ,we are enter the number but the data-type will be string,because when we enter number in the promot function ,it converts into string.





// 5:Swapping in Js:Swapping in JavaScript means exchanging the values of two variables

// First Method:
// let a = 5,
//  b = 10;
// let temp = a;
// a = b;
// b = temp;

// console.log(a, b); // Output: 10 5



// Second Method:
// let  a = 10;
// let b = 20;
// a = a  + b ; //->30
// b = a - b; // -> 10
// a = a - b; //-> 10
// console.log(a);
// console.log(b);



// Third Method:
// This method is called Array Destructuring Swap. It is the modern and recommended way to swap variables in JavaScript.
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b)



/*  In mathematics, dividend and divisor are terms used in division:

 Dividend: The number that is being divided.
 Divisor: The number by which the dividend is divided.
 Quotient: The result of the division.


20 ÷ 4 = 5

The 20 is divident & and 4 is the divisor.
when the dividend is smaller than divisor; the answer will be divident.
*/


let number = 4450;
console.log(number % 20);