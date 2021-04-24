//created variables for quotes
const anime = document.getElementById('anime');
const quote = document.getElementById('quote');
const character = document.getElementById('character');
const btn = document.getElementById('btn');

btn.addEventListener("click", getQuote);//added event listener for button

//created quote function to fetch api
function getQuote() {
    return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => {
        anime.innerHTML = data.anime;
        quote.innerHTML = `"${data.quote}"`;
        character.innerHTML = `~${data.character}`;
        //insertes data from api onto HTML
    })
    }

//created colors array
let count = 0;
const colors = ["#00ffff", "#ffff00", "#ff00ff", "#F0E68C", "#808000", "#7DF9FF", "#00A36C", "#CCCCFF",
 "#8A9A5B", "#DFFF00", "#E4D00A", "#40E0D0", "#FFBF00", "#FF7F50", "#F4BB44", "#FAC898", "#EC5800"];
 //created anonymous function to change div background
const changeColor = () => {
  count++;
  if (count >= colors.length) count = 0;
  document.querySelector('.holder').style.background = colors[count];
}
document.getElementById("btn").addEventListener("click", changeColor);
//another event listener. on click, background for div changes color