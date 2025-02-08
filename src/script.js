const adminEmail = "centrickgamesstudios@gmail.com";
const adminPassword = "Centrickelmejorstudio001";

function loginAdmin() {
    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;
    
    if (email === adminEmail && password === adminPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

function logoutAdmin() {
    document.getElementById("admin-panel").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Función para manejar comandos
function handleCommand(command) {
    if (command === "cambiar color fondo") {
        document.body.style.backgroundColor = '#3498db';  // Cambia el color de fondo
        document.getElementById("admin-console").innerHTML += "<p>Fondo cambiado a azul.</p>";
    } else if (command === "mostrar mensaje") {
        alert("Este es un mensaje desde la consola de admin!");
        document.getElementById("admin-console").innerHTML += "<p>Mensaje mostrado.</p>";
    } else {
        document.getElementById("admin-console").innerHTML += `<p>Comando no reconocido: ${command}</p>`;
    }
    document.getElementById("admin-console").scrollTop = document.getElementById("admin-console").scrollHeight; // Desplaza hacia abajo para ver los nuevos comandos
}

// Detectar la entrada del admin para la consola
document.getElementById("command-input").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = document.getElementById("command-input").value.trim();
        if (command) {
            document.getElementById("admin-console").innerHTML += `<p><strong>Comando:</strong> ${command}</p>`;
            handleCommand(command);
            document.getElementById("command-input").value = '';  // Limpiar el campo de entrada
        }
    }
});
