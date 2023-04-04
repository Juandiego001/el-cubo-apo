// Inputs para iniciar sesión
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// Contenedor general que almacena
// el formulario inicial.
let signUpInContainer = document.getElementById("signUpIn-container");

// Contenedor del formulario de registrarse.
let registerContainer = document.getElementById("register-container");

// Inputs para poder obtener los valores y realizar el registro.
// La R al final es para referirse a registro.
let inputNameR = document.getElementById("nameR");
let inputEmailR = document.getElementById("emailR");
let inputPasswordR = document.getElementById("passwordR");
let inputConfirmPasswordR = document.getElementById("confirmPasswordR");

// Input de los términos y condiciones
let inputTermsR = document.getElementById("termsR");

// Contener que almacena
// las opciones del juego
let gameOptionsContainer = document.getElementById("game-options-container");

// Contenedor de los módulos de historia
let gameHistory = document.getElementById("game-history");

async function signUp(event) {
    event.preventDefault();

    let theName = inputNameR.value;
    let theEmail = inputEmailR.value;
    let thePassword = inputPasswordR.value;
    let theConfirmPassword = inputConfirmPasswordR.value;
    let theTerms = inputTermsR.checked;

    // console.log({theName});
    // console.log({theEmail});
    // console.log({thePassword});
    // console.log({theConfirmPassword});
    // console.log({theTerms});

    if (!theName) {
        alert("Por favor digita tu nombre.");
        return;
    }

    if (!theEmail) {
        alert("Por favor digita tu correo.");
        return;
    }

    if (!thePassword) {
        alert("Por favor digita tu contraseña.");
        return;
    }

    if (!theConfirmPassword) {
        alert("Por favor confirma la contraseña.");
        return;
    }

    if (!theTerms) {
        alert("Por favor acepta los términos y condiciones.");
        return;
    }

    if (thePassword != theConfirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    let jsonBody = {
        "name": theName,
        "email": theEmail,
        "password": thePassword
    };

    let responseJson = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Allow-Access-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonBody)
    });

    let response = await responseJson.json();

    if (response["code"] == 200) {
        // Se reinician los valores de los inputs.
        inputNameR.value = "";
        inputEmailR.value = "";
        inputPasswordR.value = "";
        inputConfirmPasswordR.value = "";
        inputTermsR.value = false;

        // Se hace la redirección al juego.
        registerContainer.classList.add("register-container-hide");
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));
        registerContainer.classList.add("register-container-behind-curtain");

        gameOptionsContainer.classList.remove("game-options-container-behind-curtain");        
        gameOptionsContainer.classList.remove("game-options-container-hide");
    } else {
        alert("Ocurrió un error en el servidor. Por favor intenta nuevamente.");
    }
}

async function logIn(event) {
    event.preventDefault();
    let theEmail = inputEmail.value;
    let thePassword = inputPassword.value;

    if (theEmail == '' || thePassword == '') {
        alert("Por favor, digita tanto tu correo como tu contraseña.");
        return;
    }

    let responseJson = await fetch(`http://localhost:3000/users?email=${theEmail}&password=${thePassword}`, {
        method: "GET",
        headers: {
            "Allow-Access-Control": "*",
            "Content-Type": "application/json"
        }
    });

    let response = await responseJson.json();
    let theCode = response["code"];

    if (theCode == 200) {
        // Se procede a mostrar el panel del videojuego.
        signUpInContainer.classList.add("signUpIn-container-hide");
        await new Promise((resolve, reject) => setTimeout(resolve, 1000));
        signUpInContainer.classList.add("signUpIn-container-behind-curtain");

        gameOptionsContainer.classList.remove("game-options-container-behind-curtain");        
        gameOptionsContainer.classList.remove("game-options-container-hide");
    } else if (theCode == 201) {
        alert("Usuario o contraseña incorrectos");
    } else {
        alert("Ocurrió un error en el servidor");
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
    signUpInContainer.classList.remove("signUpIn-container-behind-curtain");
    signUpInContainer.classList.remove("signUpIn-container-hide");
}

async function showOption(index) {
    // Ocultamos el menú del juego
    let theOption = optionsGame[index];
    let idOption = theOption.id;
    gameOptionsContainer.classList.add("game-options-container-hide");
    await new Promise(resolve => setTimeout(resolve, 1000));
    gameOptionsContainer.classList.add("game-options-container-behind-curtain");

    // Mostramos la opción que deseamos observar
    theOption.classList.remove(`${idOption}-behind-curtain`);
    theOption.classList.remove(`${idOption}-hide`);
}

async function goBackMenu(index) {
    let theOption = optionsGame[index];
    let idOption = theOption.id;

    // Ocultar el menú de historia
    theOption.classList.add(`${idOption}-hide`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    theOption.classList.add(`${idOption}-behind-curtain`);


    // Mostrar el menú del juego
    gameOptionsContainer.classList.remove("game-options-container-behind-curtain");
    gameOptionsContainer.classList.remove("game-options-container-hide");
}

// Devolverse al formulario de inicio de sesión.
async function goBackLogIn() {
    registerContainer.classList.add("register-container-hide");
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    registerContainer.classList.add("register-container-behind-curtain");

    signUpInContainer.classList.remove("signUpIn-container-behind-curtain");
    signUpInContainer.classList.remove("signUpIn-container-hide");
}

// Dirigirse al formulario de registro.
async function goSignUp() {
    signUpInContainer.classList.add("signUpIn-container-hide");
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    signUpInContainer.classList.add("signUpIn-container-behind-curtain");

    registerContainer.classList.remove("register-container-behind-curtain");
    registerContainer.classList.remove("register-container-hide");
}