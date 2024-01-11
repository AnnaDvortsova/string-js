import './index.scss';

// Задача 12.1

const task1 = document.querySelector(".task-1");
const input1 = task1.querySelector("#input");
const btn1 = task1.querySelector(".btn");
const result1 = task1.querySelector('.result');

btn1.addEventListener('click', () => {
    const text1 = input1.value;
    if (text1) {

        const arrStringNumbers = text1.split('');
        const phoneFormat = [];

        for (let i = 0; i < arrStringNumbers.length; i++) {
            let number = parseInt(arrStringNumbers[i]);

            if (arrStringNumbers[i] === '8' && phoneFormat.length === 0) {
                number = 7;
                phoneFormat.push(number);
            } else if (number || number === 0) {
                phoneFormat.push(number);
            }
        }

        const formatNumber = phoneFormat.join('');
        result1.textContent = `+${formatNumber}`;

        input1.value = "";
    }
});

// 2 вариант

// btn1.addEventListener('click', () => {
//     const text = input1.value;
//     if (text) {
//         let phoneFormat = "";

//         for (let char of text) {

//             if (char === "8" && phoneFormat.length == 0) {
//                 phoneFormat += "7";
//             } else if (parseInt(char) || char === "0") {
//                 phoneFormat += char;
//             }
//         }

//         result1.textContent = `+${phoneFormat}`;

//         input1.value = "";
//     }
// });

//Задача 12.2 NaN???

const task2 = document.querySelector(".task-2");
const input2 = task2.querySelector("#input");
const btn2 = task2.querySelector(".btn");
const result2 = task2.querySelector('.result');

btn2.addEventListener('click', () => {
    const text2 = input2.value;
    if (text2) {

        const arrString = text2.split(' ');
        const arrNumbers = [];
        //console.log(arrString);

        for (let str of arrString) {

            let stringNumbers = '';

            for (let i = 0; i < str.length; i++) {
                console.log(parseInt(str[i]));
                if (parseInt(str[i])) {
                    stringNumbers += str[i];
                }
            }
            //console.log(stringNumbers);
            arrNumbers.push(parseInt(stringNumbers));
        }
        result2.textContent = arrNumbers;

        input2.value = "";
    }
});

//Задача 12.3

const task3 = document.querySelector(".task-3");
const input3 = task3.querySelector("#input");
const btn3 = task3.querySelector(".btn");
const result3 = task3.querySelector('.result');

btn3.addEventListener('click', () => {
    const text3 = input3.value;
    if (text3) {

        const words = text3.split(' ');

        let capitalLetters = 0;
        let lowercaseLetters = 0;

        for (let word of words) {

            for (let i = 0; i < word.length; i++) {

                if (word[i] === word[i].toUpperCase()) {
                    capitalLetters += 1;
                } else {
                    lowercaseLetters += 1;
                }
            }
        }
        result3.textContent = `Прописных: ${capitalLetters}, строчных: ${lowercaseLetters}`;

        input3.value = "";
    }
});

//Задача 12.4

const task4 = document.querySelector(".task-4");
const input4 = task4.querySelector("#input");
const btn4 = task4.querySelector(".btn");
const result4 = task4.querySelector('.result');

btn4.addEventListener('click', () => {
    const text4 = input4.value;
    if (text4) {

        const words4 = text4.split(" ");

        let maxLengthWord = 0;
        let maxWord = words4[0];

        for (let i = 0; i < words4.length; i++) {

            if (maxLengthWord < words4[i].length) {
                maxLengthWord = words4[i].length;
                maxWord = words4[i];
            }
        }

        result4.textContent = `Слово: ${maxWord} , длина: ${maxLengthWord}`;

        input4.value = "";
    }
});

//Задача 12.5

const task5 = document.querySelector(".task-5");
const input5 = task5.querySelector("#input");
const btn5 = task5.querySelector(".btn");
const result5 = task5.querySelector('.result');

btn5.addEventListener("click", () => {
    const text5 = input5.value;
    if (text5) {

        let revWord = '';

        for (let i = text5.length - 1; i >= 0; i--) {
            revWord += text5[i];
        }

        if (revWord === text5) {
            result5.textContent = 'true';
        } else {
            result5.textContent = 'false';
        }

        input5.value = "";
    }
});

//Задача 12.6

const task6 = document.querySelector(".task-6");
const input6 = task6.querySelector("#input");
const btn6 = task6.querySelector(".btn");
const result6 = task6.querySelector('.result');

btn6.addEventListener("click", () => {
    const text6 = input6.value;
    if (text6) {
        const arrString6 = text6.split(" ");
        console.log(arrString6);

        let str = '';

        for (let i = 0; i < arrString6.length; i++) {
            if (arrString6[i]) {
                str += arrString6[i] + ' ';
            }
        }
        result6.textContent = str;

        input6.value = "";
    }
})