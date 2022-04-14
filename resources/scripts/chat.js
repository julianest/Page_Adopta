const messagesDiv = document.getElementById("messages");
const txtMsg = document.getElementById("txtMessage");
// let messages = [];
let hoy = new Date();

function enviarMsg() {
    const data = {
        msg: txtMsg.value,
        date: hoy.getHours() + ':' + hoy.getMinutes(),
        type: "out"
    };
    // messages.push(data);
    txtMsg.value = "";
    renderChat(data);
    setTimeout(() => respuestaAutomatica(), 2000);
}

function respuestaAutomatica() {
    const data = {
        msg: "!Hola! claro, podemos acordar un lugar y hora para que conoscas a tu proxima mascota",
        date: hoy.getHours() + ':' + hoy.getMinutes(),
        type: "in"
    };
    // messages.push(data);
    renderChat(data);
}

function renderChat(data) {
    let tag = document.createElement("p");
    let textDate = document.createTextNode(data.date);
    let tage = document.createElement("p");
    let text = document.createTextNode(data.msg);
    tag.appendChild(textDate);
    tage.appendChild(text);
    messagesDiv.appendChild(tag);
    messagesDiv.appendChild(tage);
}