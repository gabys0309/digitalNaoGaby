document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario y al formulario mismo
    var nombreInput = document.getElementById('nombre');
    var apellidoInput = document.getElementById('apellido');
    var ciudadInput = document.getElementById('ciudad');
    var correoInput = document.getElementById('correo');
    var contrasenaInput = document.getElementById('contrasena');
    var confirmarContrasenaInput = document.getElementById('confirmarContrasena');
    var formulario = document.getElementById('registroForm');

    // Bloquear la entrada de números en los campos de nombre, apellido y ciudad
    nombreInput.addEventListener('keydown', bloquearNumeros);
    apellidoInput.addEventListener('keydown', bloquearNumeros);
    ciudadInput.addEventListener('keydown', bloquearNumeros);

    // Agregar un event listener para el botón de enviar del formulario
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        if (!formulario.checkValidity()) {
            // Si el formulario no es válido, mostrar mensajes de error
            event.preventDefault(); // Evitar que el formulario se envíe
            event.stopPropagation(); // Detener la propagación del evento
            formulario.classList.add('was-validated'); // Agregar una clase para mostrar los mensajes de validación
        } else if (contrasenaInput.value !== confirmarContrasenaInput.value) {
            // Si las contraseñas no coinciden, mostrar mensaje de error
            alert('Las contraseñas no coinciden.');
        } else {
            // Si todo está bien, limpiar los inputs y enviar el formulario
            formulario.reset(); // Limpiar el formulario
            alert('Formulario enviado correctamente.'); // Mostrar mensaje de éxito
            // Aquí podrías redirigir al usuario a la página deseada
        }
    });
});

// Función para bloquear la entrada de números en campos de texto
function bloquearNumeros(event) {
    var key = event.key;
    if (!isNaN(key)) {
        event.preventDefault(); // Evitar que se ingrese el número
    }
}
