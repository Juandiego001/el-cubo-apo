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
        // Se guardan los valores en los inputs de actualización
        inputEmail1.value = theEmail;
        inputPassword1.value = thePassword;

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
    // Se ocultan los valores en los campos para iniciar sesión.
    inputEmail.value = "";
    inputPassword.value = "";

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

async function hideAllGame() {    
    for (let i = 0; i < allChildNodes.length; i++) {
        let child = allChildNodes[i];
        child.classList.add(`${child.id}-hide`);
        child.classList.add(`${child.id}-behind-curtain`);
    }

    // Para el nivel 1
    teacher21.classList.add('teacher-hide');
    teacher21.classList.add('teacher-behind-curtain');
    pabloSmall21.classList.add('pablo-small-hide');
    pabloSmall21.classList.add('pablo-small-behind-curtain');
    dialog21.classList.add('dialog-hide');
    dialog21.classList.add('dialog-behind-curtain');
    alertTeacher1.classList.add('alert-action-hide');
    alertTeacher1.classList.add('alert-action-behind-curtain');
    alertPablo1.classList.add('alert-action-hide');
    alertPablo1.classList.add('alert-action-behind-curtain');

    // Para el nivel 2
    biologist22.classList.add('biologist-hide');
    biologist22.classList.add('biologist-behind-curtain');
    pabloSmall22.classList.add('pablo-small-hide');
    pabloSmall22.classList.add('pablo-small-behind-curtain');
    dialog22.classList.add('dialog-hide');
    dialog22.classList.add('dialog-behind-curtain');
    alertBiologist2.classList.add('alert-action-hide');
    alertBiologist2.classList.add('alert-action-behind-curtain');
    alertPablo2.classList.add('alert-action-hide');
    alertPablo2.classList.add('alert-action-behind-curtain');

    // Para el nivel 3
    doctor32.classList.add('doctor-hide');
    doctor32.classList.add('doctor-behind-curtain');
    pabloSmall32.classList.add('pablo-small-hide');
    pabloSmall32.classList.add('pablo-small-behind-curtain');
    dialog32.classList.add('dialog-hide');
    dialog32.classList.add('dialog-behind-curtain');
    alertDoctor3.classList.add('alert-action-hide');
    alertDoctor3.classList.add('alert-action-behind-curtain');
    alertPablo3.classList.add('alert-action-hide');
    alertPablo3.classList.add('alert-action-behind-curtain');

    // Para el nivel 4
    engineer42.classList.add('engineer-hide');
    engineer42.classList.add('engineer-behind-curtain');
    pabloSmall42.classList.add('pablo-small-hide');
    pabloSmall42.classList.add('pablo-small-behind-curtain');
    dialog42.classList.add('dialog-hide');
    dialog42.classList.add('dialog-behind-curtain');
    alertEngineer4.classList.add('alert-action-hide');
    alertEngineer4.classList.add('alert-action-behind-curtain');
    alertPablo4.classList.add('alert-action-hide');
    alertPablo4.classList.add('alert-action-behind-curtain');

    // Para el nivel 5
    biomedic52.classList.add('biomedic-hide');
    biomedic52.classList.add('biomedic-behind-curtain');
    pabloSmall52.classList.add('pablo-small-hide');
    pabloSmall52.classList.add('pablo-small-behind-curtain');
    dialog52.classList.add('dialog-hide');
    dialog52.classList.add('dialog-behind-curtain');
    alertBiomedic5.classList.add('alert-action-hide');
    alertBiomedic5.classList.add('alert-action-behind-curtain');
    alertPablo5.classList.add('alert-action-hide');
    alertPablo5.classList.add('alert-action-behind-curtain');

    // Para el nivel 6
    apo62.classList.add('apo2-hide');
    apo62.classList.add('apo2-behind-curtain');
    pabloSmall62.classList.add('pablo-small-hide');
    pabloSmall62.classList.add('pablo-small-behind-curtain');
    dialog62.classList.add('dialog-hide');
    dialog62.classList.add('dialog-behind-curtain');
    alertApo6.classList.add('alert-action-hide');
    alertApo6.classList.add('alert-action-behind-curtain');
    alertPablo6.classList.add('alert-action-hide');
    alertPablo6.classList.add('alert-action-behind-curtain');

}

// Función para volver al menú principal desde la historia
async function goBackMenuFromHistory() {
    // Se oculta todo lo del juego.
    hideAllGame();

    // Se oculta el contenedor de pausa
    gameStop.classList.add("game-stop-hide");

    // Se oculta el canvas del juego
    levels.classList.add(`levels-hide`);
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
    gameHistory.classList.add(`game-history-hide`);
    await sleep(1000);
    gameHistory.classList.add(`game-history-behind-curtain`);

    // Se muestra el canvas del juego
    levels.classList.remove(`levels-behind-curtain`);
    levels.classList.remove(`levels-hide`);

    mVC = Number(theLevel) - 1;
    
    if (mVC == 0) loadLevel1Variables();
    if (mVC == 1) loadLevel2Variables();
    if (mVC == 2) loadLevel3Variables();
    if (mVC == 3) loadLevel4Variables();
    if (mVC == 4) loadLevel5Variables();
    if (mVC == 5) loadLevel6Variables();
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

async function updateData() {
    let originalEmail = inputEmail.value;
    let newEmail = inputEmail1.value;
    let newPassword = inputPassword1.value;

    if (!(originalEmail && newEmail && newPassword)) {
        alert("Error. No deben existir campos vacíos al actualizar la información.");
        return;
    }

    let jsonBody = {
        originalEmail,
        newEmail,
        newPassword
    };

    let responseJson = await fetch("http://localhost:3000/users", {
        method: "PUT",
        headers: {
            "Allow-Access-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonBody)
    });

    responseJson = await responseJson.json();
    console.log({responseJson});

    if (responseJson["code"] == 200) {
        alert("¡Los datos han sido actualizados correctamente!");

        // Se actualizan los campos
        inputEmail.value = newEmail;
        inputEmail1.value = newEmail;
        inputPassword.value = newPassword;
        inputPassword1.value = newPassword;
    } else {
        alert("Ocurrió un error al intentar actualizar los datos. Por favor, verifique e intente nuevamente.")
    }
}

async function showBook() {
    book.classList.remove('book-behind-curtain');
    book.classList.remove('book-hide');
}

async function hideBook() {
    book.classList.add('book-hide');
    await sleep(1000);
    book.classList.add('book-behind-curtain');
}