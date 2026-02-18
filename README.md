<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Strength Checker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2 style="text-align: center; font-family: Handmade;">Login</h2>
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Choose a username" required>
        </div>

        <div class="input-group">
            <label for="passwordInput">Password</label>
            <input type="password" id="passwordInput" placeholder="Enter password" required>

            <div class="strength-bar-container">
                <div id="strengthBar"></div>
            </div>

            <p id="strengthText">Strength: <span></span></p>
            <ul id="suggestions"></ul>
        </div>

        <button type="submit" id="signupBtn">Log In</button>
        <h6 style="text-align: center;">Don't have an account?<button type="submit" id="signupform"><b>Sign Up</b></button></h6>
    </div>
    <script src="script.js"></script>
    
</body>
</html>
