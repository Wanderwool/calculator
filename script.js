var firstNumber;
var secondNumber;
var operator;

const add = (a, b) => a+b;

const substract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const operate = (firstNumber, secondNumber, operator) => {
    switch(operator){
        case '+':
            result = add(firstNumber + secondNumber)
            break
        case '-':
            result = substract(firstNumber + secondNumber)
            break
        case '*':
            result = multiply(firstNumber + secondNumber)
            break      
        case '/':
            result = divide(firstNumber + secondNumber)
            break        
            

    }
    return result
}