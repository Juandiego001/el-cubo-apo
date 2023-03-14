// Inputs para iniciar sesión
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// Contenedor general que almacena
// el formulario inicial
let signUpLogInContainer = document.getElementById("signUp-logIn-container");

// Contener que almacena
// las opciones del juego
let gameOptionsContainer = document.getElementById("game-options-container");

function singUp() {
    alert("Has presionado el botón para el singUp");
}

async function logIn(event) {
    event.preventDefault();
    let theEmail = inputEmail.value;
    let thePassword = inputPassword.value;

    if (theEmail == '' || thePassword == '') {
        alert("Por favor, digita tanto tu correo como tu contraseña.");
        return;
    }

    if (theEmail == "juan@gmail.com" && thePassword == "juan") {
        // Se oculta el contenedor general que almacena el formulario de inicio.
        // signUpLogInContainer.classList.remove("signUp-logIn-container-show");
        signUpLogInContainer.classList.add("signUp-logIn-container-hide");

        // Se espera a que se oculte el contenedor y luego se ubica detrás del telón.
        // Con esto, esperamos 750 milisegundos, y después ubicamos el contenedor detrás del telón.
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));
        signUpLogInContainer.classList.remove("signUp-logIn-container-front-curtain");
        signUpLogInContainer.classList.add("signUp-logIn-container-behind-curtain");

        // Se muestra el contenedor que almacena las opciones.
        gameOptionsContainer.classList.remove("game-options-container-behind-curtain");
        gameOptionsContainer.classList.add("game-options-container-front-curtain");
        gameOptionsContainer.classList.remove("game-options-container-hide");

    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

async function logOut() {
    gameOptionsContainer.classList.add("game-options-container-hide");

    // Se espera a que se oculte el contenedor y luego se ubica detrás del telón.
    // Con esto, esperamos 750 milisegundos, y después ubicamos el contenedor detrás del telón.
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    gameOptionsContainer.classList.remove("game-options-container-front-curtain");
    gameOptionsContainer.classList.add("game-options-container-behind-curtain");

    // Se muestra el contenedor general que almacena el formulario de inicio.
    signUpLogInContainer.classList.remove("signUp-logIn-container-behind-curtain");
    signUpLogInContainer.classList.add("signUp-logIn-container-front-curtain");
    signUpLogInContainer.classList.remove("signUp-logIn-container-hide");
}