document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    var nombreInput = document.getElementById('nombre');
    var apellidoInput = document.getElementById('apellido');
    var ciudadInput = document.getElementById('ciudad');
    var correoInput = document.getElementById('correo');
    var contrasenaInput = document.getElementById('contrasena');
    var confirmarContrasenaInput = document.getElementById('confirmarContrasena');
    var formulario = document.getElementById('registroForm');

    // Agregar evento de escucha para bloquear números en campos de texto
    nombreInput.addEventListener('keydown', bloquearNumeros);
    apellidoInput.addEventListener('keydown', bloquearNumeros);
    ciudadInput.addEventListener('keydown', bloquearNumeros);

    // Agregar evento de escucha al botón de enviar formulario
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        if (!formulario.checkValidity()) {
            // Si el formulario no es válido, mostrar mensajes de error
            event.preventDefault();
            event.stopPropagation();
            formulario.classList.add('was-validated');
        } else if (contrasenaInput.value !== confirmarContrasenaInput.value) {
            // Si las contraseñas no coinciden, mostrar mensaje de error
            alert('Las contraseñas no coinciden.');
        } else {
            // Si todo está bien, limpiar los inputs y enviar el formulario
            formulario.reset();
            // Redirigir al usuario a la otra página
            window.location.href = 'contenido.html';
        }
    });
});

function bloquearNumeros(event) {
    // Función para bloquear la entrada de números en campos de texto
    var key = event.key;
    if (!isNaN(key)) {
        event.preventDefault();
    }
}
