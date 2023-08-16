// Question # 1

// function greetUser(user) {
//     console.log(`Welcome, ${user}`);
// }
// greetUser("Arsalan");

// Question # 2

// let firstName = prompt('Please enter your First name:');
// let lastName = prompt('Please enter your Last name:');
// function welcome (firstName, lastName){
//     let fullName = firstName +' '+ lastName;
//     let greetingMessage = 'Greetings, '+fullName+ '!';
//     return greetingMessage;
// }
// console.log(welcome(firstName, lastName));

// Question # 3

// function sumOfTwoNumbers(){
//     let num1 = +prompt('Enter the First number');
//     let num2 = +prompt('Enter the Second number');
//     let sum = num1 + num2;
//     return sum;
// }
// let result = sumOfTwoNumbers();
// console.log("The sum of two numbers is: " +result);


// Question # 4

// function calculate(num1, num2, operator){
//     var result;
//     switch(operator){
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             return 'Invalid Operator';
//     }
//     return 'Result: '+result
// }
// let num1 = +prompt('Enter first number: ');
// let num2 = +prompt('Enter second number: ');
// let operator = prompt('Enter an operator (+, -, *, /): ');

// var resultMessage = calculate(num1, num2, operator);
// alert(resultMessage);

// Question # 5

function numberSquare(number){
    return number * number;
}
let num = +prompt("Enter a number: ");
let squared = numberSquare(num);
alert("The square of"+ " " + num + " " +'is: ' + squared);
console.log("The square of "  + num + " is: " + squared);




// Question # 6 


// function factorial(num) {
//     if(num === 0 || num === 1){
//         return 1;
//     }else{
//         return num * factorial(num - 1);
//     }
// }
// let num1 = +prompt("Enter a number: ");
// let result = factorial(num1);
// alert("the factorial of" +num1+ "is: " +result);
// console.log("the factorial of" +num1+ "is: " +result);