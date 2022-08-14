let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;

let guess = parseInt(promp("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess !== targetNum)) {
    if (guess === 'q') {
        break;
    }
    attempts++;
    if (guess > targetNum) {
        prompt("Too high! Enter a new guesss");
    } else {
        prompt("Too low! Enter a new guesss");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT");
} else {
    console.log("Congrats You Win")
    console.log(`YOU GOT IT! It took you ${attempts} guesses`);
}