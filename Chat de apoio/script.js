// Função para enviar mensagem
function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");
    const userText = input.value.trim();
    if (!userText) return;

    // Cria a bolha do usuário
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = userText;
    chat.appendChild(userMsg);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

// Permitir enviar mensagem com Enter
const inputField = document.getElementById("userInput");
inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});
