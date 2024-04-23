let text_number = document.querySelector('.card_number');
let text_name = document.querySelector('.card_name');
let text_date = document.querySelector('.expdate');
let text_cvc = document.querySelector('.card_cvc');


function UpdateValues() {
    let cardName = document.getElementById('card_name').value;
    let cardNumber = document.getElementById('card_number').value;
    let cardMonth = document.getElementById('card_month').value;
    let cardYear = document.getElementById('card_year').value;
    let cardCvc = document.getElementById('card_cvc').value;

    if(cardNumber.length === 19){
        text_number.innerText = cardNumber;
    }
    else if(cardNumber.length < 19){
        text_number.innerText = cardNumber.padStart(16, '0');

    }

    if(cardMonth !== '' || cardYear !== ''){
        text_date.innerText = cardMonth.padStart(2, '0') + '/' + cardYear.padStart(2, '0');
    }
    else{
        text_date.innerText = '00/00'
    }

    if(cardName !== ''){
        text_name.innerText = cardName;
    }
    else{
        text_name.innerText = 'cardholder name';

    }
    if(cardCvc !== ''){
        text_cvc.innerText = cardCvc;

    }
    else{
        text_cvc.innerText = '000'

    }



}
document.getElementById('card_number')
    .addEventListener('input', function (event) {
        event.target.value = event.target.value
            .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
            .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/)
    })

function SwitchTheme(){
    let body = document.body.classList;


    if(document.getElementById('theme').innerText === 'light mode' ){
        document.getElementById('theme').innerText = 'dark mode'
    }
    else{
        document.getElementById('theme').innerText = 'light mode'
    }

    if(body.contains('light')){
        body.replace('light', 'dark');
    }
    else{
        body.replace('dark', 'light');
    }
}