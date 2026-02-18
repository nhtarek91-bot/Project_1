const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.querySelector('#strengthText span');
const suggestionsList = document.getElementById('suggestions');
const usernameInput = document.getElementById('username');

function checkUsernameMatch() {
    const username = usernameInput.value.toLowerCase();
    const password = passwordInput.value.toLowerCase();

// We only check if both fields have at least 3 characters
    if(username.length < 3 || password.length < 3) return false;
// Check if password contains the username
    if (password.includes(username)) {
        return true; //match found (bad!!)
    }
    return false; //no match (good!!)
}
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;
    let suggestions = [];

    //1. length check
    if (val.length >= 8) score++;
    else suggestions.push("Use at least 8 characters.");

    //2. number check
    if (/[0-9]/.test(val)) score++;
    else suggestions.push("Add a number.");

    //3. uppercase check
    if (/[A-Z]/.test(val)) score++;
    else suggestions.push("Use an uppercase letter");

    //4. special chaaracter check
    if (/[^A-Za-z0-9]/.test(val)) score++;
    else suggestions.push("Add a symbols (e.g., !@#).");

    updateUI(score, suggestions);
});

function updateUI(score, suggestions) {
    const width = ['0%', '25%', '50%', '75%', '100%'];
    const labels = ['Empty', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['', 'weak', 'medium', 'medium', 'strong'];

    strengthBar.className = colors[score];
    strengthBar.style.width = width[score];
    strengthText.innerText = labels[score];

    suggestionsList.innerHTML = suggestions.map(s => `<li>${s}</li>`).join('');
}
