document.getElementById('formulario-contacto').addEventListener('submit',function (e) {
    e.preventDefault();
    const data = {
        nombre: document.getElementById('fname').value,
        correoElectronico: document.getElementById('femail').value,
        mensaje: document.getElementById('fmensaje').value
    };
    fetch('/api/contacto', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => {
            if (response.ok) alert("Mensaje enviado correctamente.");
            else alert("Hubo un error al enviar el mensaje.");
        });
});
