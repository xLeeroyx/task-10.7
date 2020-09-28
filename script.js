let minValue = (parseInt(prompt('Минимальное знание числа для игры','0')) || 0);
let maxValue = (parseInt(prompt('Максимальное знание числа для игры','100')) || 100);
minValue = minValue < -999 ? -999 : minValue;
maxValue = maxValue > 999 ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const transform = number => {

    let transformedNumber = number;
    
    const simpNumb = new Map([
       [ 0, 'ноль' ], 
       [ 1, 'один' ],
       [ 2, 'два' ],
       [ 3, 'три' ],
       [ 4, 'четыре' ], 
       [ 5, 'пять' ],
       [ 6, 'шесть' ],
       [ 7, 'семь' ],
       [ 8, 'восемь' ],
       [ 9, 'девять' ],
       [ 10, 'десять' ], 
       [ 11, 'одиннадцать' ], 
       [ 12, 'двенадцать' ], 
       [ 13, 'тринадцать' ], 
       [ 14, 'четырнадцать' ], 
       [ 15, 'пятнадцать' ], 
       [ 16, 'шестнадцать' ], 
       [ 17, 'семнадцать' ], 
       [ 18, 'восемнадцать' ], 
       [ 19, 'девятнадцать' ], 
       [ 20, 'двадцать' ], 
       [ 30, 'тридцать' ],
       [ 40, 'сорок' ], 
       [ 50, 'пятьдесят' ], 
       [ 60, 'шестьдесят' ], 
       [ 70, 'семьдесят' ], 
       [ 80, 'восемьдесят' ], 
       [ 90, 'девяносто' ],  
       [ 100, 'сто' ],
       [ 200, 'двести' ], 
       [ 300, 'триста' ], 
       [ 400, 'четыреста' ], 
       [ 500, 'пятьсот' ], 
       [ 600, 'шестьсот' ],
       [ 700, 'семьсот' ], 
       [ 800, 'восемьсот' ], 
       [ 900, 'девятьсот' ]    
    ]);
    
    if(simpNumb.has(number)) {
        transformedNumber = simpNumb.get(number);
    }else if(number > 20 && number < 30) {
        transformedNumber = simpNumb.get(20) + ' ' + simpNumb.get(number - 20);
    }else if(number > 30 && number < 40) {
        transformedNumber = simpNumb.get(30) + ' ' + simpNumb.get(number - 30);
    }else if(number > 40 && number < 50) {
        transformedNumber = simpNumb.get(40) + ' ' + simpNumb.get(number - 40);
    }else if(number > 50 && number < 60) {
        transformedNumber = simpNumb.get(50) + ' ' + simpNumb.get(number - 50);
    }else if(number > 60 && number < 70) {
        transformedNumber = simpNumb.get(60) + ' ' + simpNumb.get(number - 60);
    }else if(number > 70 && number < 80) {
        transformedNumber = simpNumb.get(70) + ' ' + simpNumb.get(number - 70);
    }else if(number > 80 && number < 90) {
        transformedNumber = simpNumb.get(80) + ' ' + simpNumb.get(number - 80);
    }else if(number > 90 && number < 100) {
        transformedNumber = simpNumb.get(90) + ' ' + simpNumb.get(number - 90);
    }else if (number > 100 && number < 200){
        transformedNumber = simpNumb.get(100) + ' ' + transform(number - 100)
    }else if (number >200 && number < 300){
        transformedNumber = simpNumb.get(200) + ' ' + transform(number - 200);
    }else if (number >300 && number < 400){
        transformedNumber = simpNumb.get(300) + ' ' + transform(number - 300);
    }else if (number >400 && number < 500){
        transformedNumber = simpNumb.get(400) + ' ' + transform(number - 400);
    }else if (number >500 && number < 600){
        transformedNumber = simpNumb.get(500) + ' ' + transform(number - 500);
    }else if (number >600 && number < 700){
        transformedNumber = simpNumb.get(600) + ' ' + transform(number - 600);
    }else if (number >700 && number < 800){
        transformedNumber = simpNumb.get(800) + ' ' + transform(number - 800);
    }else if (number >800 && number < 900){
        transformedNumber = simpNumb.get(800) + ' ' + transform(number - 800);
    }else if (number >900 && number < 1000){
        transformedNumber = simpNumb.get(900) + ' ' + transform(number - 900);
    }else if (number < 0){
        transformedNumber = 'минус' + ' ' + transform(-number);
    }if (transformedNumber.length < 20){
        return transformedNumber;
    }else{
        answerNumber = number;
        return answerNumber;
    }
}
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const answerText =  answerNumber => {

    const answerTexts = [ 'Вы загадали число', 'Ваше число', 'Может быть' ];
    const answerText = answerTexts[Math.floor( Math.random()*answerTexts.length)] + ' ' + transform(answerNumber) + '?';
    return answerText; 
}

orderNumberField.innerText = orderNumber;
answerField.innerText = answerText(answerNumber);

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = (parseInt(prompt('Минимальное знание числа для игры','0')) || 0);
    maxValue = (parseInt(prompt('Максимальное знание числа для игры','100')) || 100);
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerText(answerNumber);
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = answerText(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function(){
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = minValue + Math.floor((answerNumber - minValue) / 2 );
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = answerText(answerNumber);
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerPhrases = [ `Я всегда угадываю\n\u{1F609}`,  `Изи\n\u{1F60E}`, `Это было легко\n\u{1F61B}` ];
        const answerPhrase = answerPhrases[Math.round( Math.random()*answerPhrases.length)];
             
        answerField.innerText = answerPhrase;
        gameRun = false;
}})











