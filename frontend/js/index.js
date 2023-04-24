async function signUp(event) {
    event.preventDefault();

    let theName = inputNameR.value;
    let theEmail = inputEmailR.value;
    let thePassword = inputPasswordR.value;
    let theConfirmPassword = inputConfirmPasswordR.value;
    let theTerms = inputTermsR.checked;

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

// Función para volver al menú principal desde la historia
async function goBackMenuFromHistory() {
    // Se oculta el contenedor de pausa
    gameStop.classList.add("game-stop-hide");

    // Se oculta el canvas del juego
    levels.classList.add(`levels-hide`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    levels.classList.add(`levels-behind-curtain`);

    // Se establece que el jugador ha dejado de jugar algún nivel
    mVC = -1;

    // Mostrar el menú del juego
    gameOptionsContainer.classList.remove("game-options-container-behind-curtain");
    gameOptionsContainer.classList.remove("game-options-container-hide");
}

// Función para cerrar el menú de pausa del juego
async function hideStopMenu(){
    // Se oculta el contenedor de pausa
    gameStop.classList.add("game-stop-hide");
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

// Dirigirse a algún nivel.
async function goLevel(theLevel) {
    // Se oculta el menú de historia
    gameHistory.classList.add(`game-levels-hide`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    gameHistory.classList.add(`game-levels-behind-curtain`);

    // Se muestra el canvas del juego
    levels.classList.remove(`levels-behind-curtain`);
    levels.classList.remove(`levels-hide`);

    mVC = Number(theLevel) - 1;
    
    // Se carga el nivel 1.
    if (mVC == 0) loadLevel1Variables();
}

// Registro de teclas
function teclado(e) {
    let tecla = e.key;
    let gameStopContainerVisible = !gameStop.classList.contains("game-stop-hide");

    // Si el jugador no está jugando un nivel, no se leen las pulsaciones de teclado.
    if (mVC == -1) return;    
    
    // Si el contenedor de pausa del juego está visible, no se debe permitir mover el personaje.
    if (gameStopContainerVisible && tecla != "Escape") return;

    // Se togglea el contenedor del menú de escape al presionar dos veces Escape.
    if (tecla == "Escape") gameStop.classList.toggle("game-stop-hide");
    else {
        let funcsLevel = arrayMVC[mVC][0];
        funcsLevel(tecla);
    }
}

// Función que sirve para registrar las teclas que se han dejado de pulsar.
function teclado2(e) {
    let tecla = e.key;
    let gameStopContainerVisible = !gameStop.classList.contains("game-stop-hide");

    // Si el jugador no está jugando un nivel, no se leen las pulsaciones de teclado.
    if (mVC == -1) return;
    if (gameStopContainerVisible) return;

    let funcsLevel = arrayMVC[mVC][1];
    funcsLevel(tecla);
}

async function sleep(miliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), miliseconds);
    });
}