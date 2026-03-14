const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontSize = "30px";
const username = window.prompt("What's your name?", "Shivani");
greeting.innerHTML = "Welcome to my Website, " + username + "!";

// Typewriter effect
var text = "Shivani Panchmatia";
var i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();
