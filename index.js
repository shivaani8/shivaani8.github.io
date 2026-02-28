const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontSize = "30px";
const username = window.prompt("What's your name?", "Shivani");
greeting.innerHTML = "Welcome to my Website, " + username + "!";
