document.addEventListener('DOMContentLoaded', function () {
    // Botón de regresar al inicio
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Validación de formulario de contacto
    const form = document.getElementById('contact-form');
    if (form) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let isValid = true;

            // Validación del campo nombre
            if (name.value.trim() === '') {
                displayError('name-error', 'El nombre es obligatorio.');
                isValid = false;
            } else {
                clearError('name-error');
            }

            // Validación del campo correo electrónico
            if (email.value.trim() === '') {
                displayError('email-error', 'El correo electrónico es obligatorio.');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                displayError('email-error', 'El correo electrónico no es válido.');
                isValid = false;
            } else {
                clearError('email-error');
            }

            // Validación del campo mensaje
            if (message.value.trim() === '') {
                displayError('message-error', 'El mensaje es obligatorio.');
                isValid = false;
            } else {
                clearError('message-error');
            }

            if (isValid) {
                // Aquí se muestran los datos del formulario en la consola
                console.log('Nombre:', name.value);
                console.log('Email:', email.value);
                console.log('Mensaje:', message.value);

                // Limpia el formulario después de enviar
                name.value = '';
                email.value = '';
                message.value = '';
            }
        });

        function displayError(id, message) {
            const errorElement = document.getElementById(id);
            errorElement.textContent = message;
        }

        function clearError(id) {
            const errorElement = document.getElementById(id);
            errorElement.textContent = '';
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
});
