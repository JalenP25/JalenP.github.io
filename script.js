const anime = document.getElementById('anime');
const quote = document.getElementById('quote');
const character = document.getElementById('character');
const btn = document.getElementById('btn');

btn.addEventListener("click", getQuote);

function getQuote() {
    return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        anime.innerHTML = data.anime;
        quote.innerHTML = `"${data.quote}"`;
        character.innerHTML = data.character;
    })
    }

let count = 0;
const colors = ["#00ffff", "#ffff00", "#ff00ff"];
const changeColor = () => {
  count++;
  if (count >= colors.length) count = 0;
  document.querySelector('.holder').style.background = colors[count];
}
document.getElementById("btn").addEventListener("click", changeColor);