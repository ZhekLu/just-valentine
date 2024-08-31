const alternatives = [
    {text:"", images:"images/mashrooms.jpg"},
    {text:"Мы будем лениться вместе на выходных.", images:"images/chill.jpg"},
    {text:"Спиздим вместе половину твоего офиса?", images:"images/steal.jpg"},
    {text:"А потом будем победно беситься? Хи-хи-хи, попробуй отказать:)", images:"images/dance.jpg"},
    {text:"Подумай еще раз. С кем еще ты будешь засирать всех окружающих?", images:"images/anger.jpeg"},
];
const ohyes = {text:"Знал, что ты выберешь меня, умничка.", images:"images/final.jpg"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

function increaseYesSize() {
    var btn = document.getElementById('yes_button');
    var currWidth = btn.clientWidth;
    var currHeight = btn.clientHeight;
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    btn.style.width = (currWidth + screenWidth * 0.25) + 'px';
    btn.style.height = (currHeight + screenHeight * 0.05) + 'px';
}

function hideNo() {
    var btn = document.getElementById('no_button');
    btn.style.display = 'none';
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                increaseYesSize();
                updateDisplay(alternatives[count]);
                if (count + 1 == alternatives.length)
                    hideNo();
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});