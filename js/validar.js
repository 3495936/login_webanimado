let usuario = document.getElementById('usuario');
let password = document.getElementById('password');

usuario.addEventListener('keyup', validar);
password.addEventListener('keyup', validar);

function validar() {
    let texto = this.value;
    if (texto.length > 3) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    } else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
}