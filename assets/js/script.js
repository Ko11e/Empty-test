const API_KEY = "7J8uSmx3wayefriHVpZgBWtdfEs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus(data) {
    var headerModal = document.getElementById('resultsModalTitle');
    var bodyTextModal = document.getElementById('results-content');
    headerModal.innerHTML = ('Your key is valid until');
    bodyTextModal.innerHTML =`<div>Your key is valid until</div><div class="key-status">${data.expiry}</div>`;

    resultsModal.show();

}