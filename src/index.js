import './index.scss';

const task1 = document.querySelector(".task-1");
const input = task1.querySelector("#input");
const btn = task1.querySelector(".btn");
const result = task1.querySelector('.result');

btn.addEventListener('click', () => {
    const text = input.value;
    if (text) {
        const numbers = text.split('');
        console.log(numbers);
        const phoneFormat = [];
        for (let i = 0; i < numbers.length; i++) {
            let number = parseInt(numbers[i]);
            console.log(number);
            if (number[0] === 8) {
                number[0] = 7;
                phoneFormat.push(number[0]);
            }
            if (number || number === 0) {
                phoneFormat.push(number);
            }
        }
        const formatNumber = phoneFormat.join('');
        result.textContent = `+${formatNumber}`;
        input.value = "";
    }
});