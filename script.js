
function procesarReserva() {

    const nombreInput = document.getElementById('nombre');
    const fechaInput = document.getElementById('fecha');
    const mensajeTexto = document.getElementById('mensajeConfirmacion');

    if (nombreInput.value === "" || fechaInput.value === "") {
     
        alert("Informacion Requerida");
        return; 
    }

    mensajeTexto.innerHTML = `¡En camino un pedido para <strong>${nombreInput.value}</strong>! Estamos trabajando para usted :) ${fechaInput.value}.`;
    

    mensajeTexto.style.color = "#ffc107";
    mensajeTexto.style.fontWeight = "bold";

    alert("Formulario enviado.");

    document.getElementById('reservaForm').reset();
}