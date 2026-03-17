let correctPassword = "admin123";
let attempts = 0;

while (attempts < 3) {
    let input = prompt("Enter password:");

    if (input === correctPassword) {
        console.log("Login successful");
        break;
    } else {
        console.log("Wrong password");
    }

    attempts++;
}

if (attempts === 3) {
    console.log("Account locked");
}