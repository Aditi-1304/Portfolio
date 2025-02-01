document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const messages = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const addMessage = (text, sender = "user") => {
        const message = document.createElement("div");
        message.className = sender;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    };

    const sendMessage = async (text) => {
        addMessage(text, "user");
        userInput.value = "";

        try {
            const response = await fetch("http://localhost:3000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });
            const data = await response.json();
            addMessage(data.reply, "bot");
        } catch (error) {
            console.error(error);
            addMessage("Sorry, I couldn't process your request.", "bot");
        }
    };

    sendButton.addEventListener("click", () => {
        const text = userInput.value.trim();
        if (text) sendMessage(text);
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const text = userInput.value.trim();
            if (text) sendMessage(text);
        }
    });
});
