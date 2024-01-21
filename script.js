let lhs = 0;
let rhs = 0;
let isCurrentLeft = true;
let currOp = 'add';

const ac = document.getElementById('ac');
ac.addEventListener('click', () => {
    lhs = 0;
    rhs = 0;
    isCurrentLeft = true;
    currOp = 'add';
    document.querySelector('h1').textContent = 0;
});

const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    const result = calculate(lhs, rhs, currOp);
    lhs = result;
    document.querySelector('h1').textContent = result;
});

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(isCurrentLeft){
            lhs = lhs * 10 + +number.textContent;
            document.querySelector('h1').textContent = lhs;
        } else {
            rhs = rhs * 10 + +number.textContent;
            document.querySelector('h1').textContent = rhs;
        }
    })
})

const ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        if(isCurrentLeft){
            isCurrentLeft = false;
            currOp = op.id;
        } else {
            const result = calculate(lhs, rhs, currOp);
            currOp = op.id;
            lhs = result;
            rhs = 0;
            document.querySelector('h1').textContent = result;
        }
    })
})

function calculate(lhs, rhs, op) {
    switch (op) {
        case 'add':
            return lhs + rhs;
        case 'subtract':
            return lhs - rhs;
        case 'multiply':
            return lhs * rhs;
        case 'divide':
            return lhs / rhs;
    }
}