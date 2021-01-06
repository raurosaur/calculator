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
        if (event.target.getAttribute("data-type") === 'C' || event.target.getAttribute("data-type") === 'AC') {
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

    operators.forEach(el => {
        el.style.background = '#09093B';
        el.style.color = '#FFF';
        el.style.boxShadow = '1px 1px 5px 5px #8080B3';
    });

    if(operator === '' || arg0 === '' || screen.innerText === ''){
        screen.textContent = 'ERROR';
        return;
    }
    arg1 = +screen.innerText;
    let result = operate(operator, arg0, arg1).toString();
    screen.textContent = result.length < 10 ? result : result.substring(0, 10);
    arg0 = screen.textContent, arg1 = '', operator = '';
});

operators.forEach( divs => {    
    divs.addEventListener('click', (event) => {

        if(event.target.classList[1] === 'equal')
            return;

        event.target.style.background = '#8080B3';
        event.target.style.color = '#09093B';
        event.target.style.boxShadow = 'none';
        arg0 = +screen.innerText; 
        operator = event.target.innerText;
        screen.textContent = '';

    });
    }
);

digits[12].addEventListener('click', () => {
    arg0 = '', arg1 = '', operator = '';
    operators.forEach(el => {
        el.style.background = '#09093B';
        el.style.color = '#FFF';
        el.style.boxShadow = '1px 1px 5px 5px #8080B3';
    });
});
