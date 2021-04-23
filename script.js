const stock = document.getElementById('stock');
const btn = document.getElementById('btn');

btn.addEventListener("click", getStock);

function getStock() {
    return fetch("https://api.twelvedata.com/stocks?symbol=AAPL")
    .then(res => console.log(res.json))
}
