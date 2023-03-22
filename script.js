var firstNumber;
var secondNumber;
var operator;
var operatorMode;

const buttonsNumber = Array.from(document.getElementsByClassName("number-btn"))
var display = document.getElementById('display');
var displayValue;

const buttonsOperator = Array.from(document.getElementsByClassName("operator-btn"));
const buttonEquals = document.getElementById('equals');
const buttonClear = document.getElementById('clear')

buttonClear.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    operatorMode = true
})

display.textContent = 0


buttonsNumber.forEach((button) => button.addEventListener('click', () => {if(operatorMode == true) { display.textContent = ''    
operatorMode = false}
if(display.textContent == 0) display.textContent = ''
display.textContent += button.textContent;
//return displayValue = display.textContent
}));

buttonsOperator.forEach((button)=> button.addEventListener('click', () => {
    
    
    operatorMode = true;
    

    
if(firstNumber==undefined){
     firstNumber = Number(display.textContent)
     operator = button.textContent
}
else if(secondNumber==undefined) {
     secondNumber = Number(display.textContent)
    
}

if (!(firstNumber==undefined || secondNumber==undefined)){
    result = operate(firstNumber, secondNumber, operator)
    secondNumber = null
    firstNumber = result
    display.textContent = `${result}`
    operator = button.textContent

}
}
    ));

const add = (a, b) => a+b;

const substract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const operate = (firstNumber, secondNumber, operator) => {
    switch(operator){
        case '+':
            result = add(firstNumber, secondNumber)
            break
        case '-':
            result = substract(firstNumber, secondNumber)
            break
        case '*':
            result = multiply(firstNumber, secondNumber)
            break      
        case '/':
            if(secondNumber=0)
            {
                display.textContent = 'DONT DO IT AGAIN'
            }
            else {

            
            result = divide(firstNumber, secondNumber)
        }
            break        
            

    }
    return result    
}

buttonEquals.addEventListener('click', () => {
    if (!(firstNumber==undefined))
    operatorMode = true;
    secondNumber = Number(display.textContent)
    result = operate(firstNumber, secondNumber, operator)
    secondNumber = null
    firstNumber = null
    display.textContent = `${result}`
})

