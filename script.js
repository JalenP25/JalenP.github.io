const anime = document.getElementById('anime');
const quote = document.getElementById('quote');
const character = document.getElementById('character');
const btn = document.getElementById('btn');

btn.addEventListener("click", getQuote);

function getQuote() {
    return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        // anime.innerHTML = data.anime;
        quote.innerHTML = `"${data.quote}"`;
        character.innerHTML = data.character;
        
    })
    }
