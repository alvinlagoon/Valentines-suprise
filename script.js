let noClickCount = 0;
let yesClickCount = 0;
let dobAttempt = 0;
let maxAttempt = 3;

function changeText(){
    let noButton = document.getElementById("no")
    noClickCount++; // counter to count how many times they click no

    if (noClickCount==1){
        noButton.innerText ="Try again"
    } else if (noClickCount==2){
        noButton.innerText ="You really don't want to??"
    } else if(noClickCount === 3){
        window.location.href ="no.html"
        document.getElementById("reason").style.display="block"
        noButton.style.display="none"
    }
}

function goToPage(){
    let yesButton = document.getElementById("yes")
    
    yesClickCount++;
    if (yesClickCount == 1){
        document.getElementById("beforeyes").style.display="none";
        document.getElementById("afteryes").style.display="block";
        yesButton.innerText = "Only click again if you're sure?"
    } else if (yesClickCount == 2){
        yesButton.innerText = "Are you REALLY Sure?"
        alert("You clicked again: Answer the question")
    } else if (yesClickCount === 3){
        let userInput;
        let attemptMessage = document.getElementById("attemptMessage"); // Display message on failed attempts
        attemptMessage.style.display = "block"; // Show the message element
        for (dobAttempt = 0; dobAttempt < maxAttempt; dobAttempt++) {
            userInput = prompt("When is my birthday?", "MM/DD/YYYY");
            if (userInput == "09/13/2000") {
                alert("GOOD JOB BABY");
                window.location.href = "love.html"; // Redirect to the "love" page
                return; // Exit the function when the answer is correct
            } else {
                attemptMessage.innerHTML = `Attempt ${dobAttempt + 1} failed. You have ${maxAttempt - dobAttempt - 1} attempts left.`;
            }
        }
        alert("Sorry, you've used all attempts.");
        window.location.href = "no.html"; // Redirect after exceeding attempts
    } else {
        window.location.href = "index.html";
    }
}

let clickCount = 0;
function clickToReveal() {
    clickCount++;
    if (clickCount == 1) {
        document.getElementById("secret").style.display = "block";
    }
}
