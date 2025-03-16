function saludar() {
    alert("Hola mundo");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miboton").addEventListener("click", function() {
        saludar();
    });
});