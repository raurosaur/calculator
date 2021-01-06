function operate(operator, arg0, arg1) {
    switch(operator){
        case '+':
            return arg0 + arg1;
        case '-':
            return arg0 - arg1;
        case 'x':
            return arg0 * arg1;
        case '÷':
            if(arg1 === 0)
                return 'ERROR';
            return arg0 / arg1;
    }
}

const digits = document.querySelectorAll('.digits div'),
screen = document.getElementsByClassName('screen')[0],
operators = document.querySelectorAll('.operators div');

let arg0 = '', arg1 = '', operator = '';


digits.forEach( button => {
    button.addEventListener('click', (event) => {
        if (event.target.getAttribute("data-type") === 'C') {
            screen.textContent = '';
            return;
        }
        if(screen.innerText && screen.innerText.length >= 10){
            return;
        }
        screen.textContent += event.target.textContent;
    });
});

operators[4].addEventListener('click', (event) => {
    if(operator === '' || arg0 === '' || screen.innerText === ''){
        screen.textContent = 'ERROR';
        return;
    }
    arg1 = +screen.innerText;
    screen.textContent = operate(operator, arg0, arg1);
    arg0 = screen.textContent, arg1 = '', operator = '';
});

operators.forEach( divs => {    
    divs.addEventListener('click', (event) => {
        if(event.target.classList[1] === 'equal')
            return;
        arg0 = +screen.innerText; 
        operator = event.target.innerText;
        screen.textContent = '';
    });
    }
);
