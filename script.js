const button = document.getElementById('button');
const quote = document.getElementById('quote');

const quotelibrary = [
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
    "Women are made to be Loved, not understood.",
    "Be the change that you wish to see in the world."
];

function generateQuote(){
    let newQuote = quotelibrary[Math.floor(Math.random * 5)];
    quote.innerHTML = newQuote;
};

console.log(quote);

/* button.addEventListener('click', () => {
    generateQuote();
}); */

console.log(newQuote);
console.log(quote);