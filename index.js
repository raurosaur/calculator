function operate(operator, arg0, arg1) {
    switch(operator){
        case '+':
            return arg0 + arg1;
        case '-':
            return arg0 - arg1;
        case '*':
            return arg0 * arg1;
        case '/':
            return arg0 / arg1;
    }
}

const digits = document.querySelectorAll('.digits .buttons');
