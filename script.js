document.getElementById("generate-btn").addEventListener("click", function () {
    // Generate a random number between 1 and 100  
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number in the paragraph  
    document.getElementById("random-number").innerText = "Random Number: " + randomNumber;
});  