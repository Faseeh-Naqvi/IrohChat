// script.js
document.getElementById("send-button").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        const chatBox = document.querySelector(".chat-box");
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "sent");
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        // Clear the input field
        document.getElementById("user-input").value = "";

        // Simulate a response (you can replace this with an actual response)
        setTimeout(function () {
            const responseMessage = document.createElement("div");
            responseMessage.classList.add("message", "received");
            responseMessage.textContent = "Thanks for your message!";
            chatBox.appendChild(responseMessage);
        }, 1000); // Add a response after a delay (1 second in this example)
    }
});
