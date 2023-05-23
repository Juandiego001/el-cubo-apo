// Coordenadas del jugador para el nivel 3
let xPlayer3 = 1;
let yPlayer3 = 3;

// Coordenadas para mover el escenario
let xBackground3 = 1;

// Teclas presionadas
let keyToUpPressed3 = false;
let keyToDownPressed3 = false;
let keyToLeftPressed3 = false;
let keyToRightPressed3 = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El primer 3 inidica que es del nivel 3.
// El segundo 2 inidica que es una copia del personaje original.
let doctor32 = doctor.cloneNode(true);
let pabloSmall32 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog32 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 3 al final indica el nivel 3.
// Diálogos del doctor.
let dialogsDoctor3 = [
    "<span><i>Salut joven alma.</i></span>",
    "<span>Se dice entre los miembros del pueblo que has estado superando adecuadamente las pruebas.</span>",
    "<span>Espero sigas con esa racha porque las preguntas que te haré a continuación son bastante difíciles.</span>",
    "<span>Me presento, <b>soy el doctor.</b> Antiguo solucionador de los malestares de los integrantes del pueblo.</span>",
    "<span>Cuando teníamos las tres dimensiones, ¡No te imaginas la de enfermedades y problemas que teníamos!</span>",
    "<span>Sin embargo, así mismo, eramos felices, porque la vida tenía un ciclo y eso lo comprendiamos muy bien.</span>",
    "<span>Ahora, todo nuestro mundo es gris.</span>",
    "<span>Por el mismo tema de las dimensiones, no podemos tener más colores como los solíamos tener.</span>",
    "<span>Todo está en blanco y negro...</span>",
    "<span>Pero bueno, para eso te estamos entrenando.</span>",
    "<span>Para que logres la victoria contra el Cubo APO y no seas desintegrado en el acto.</span>",
    "<span>¿Qué? ¿No lo sabías?</span>",
    "<span>¡Pues claro!</span>",
    "<span>Si no logras vencerlo, el Cubo APO reduce significativamente tus lados hasta volverte un vértice. Como si de un agujero negro se tratase.</span>",
    "<span>Pero bueno, no te preocupes. Todo irá bien ... espero.</span>",
    "<span>Para esta ocasión, te entrenaré sobre el concepto de herencia. Un concepto que a simple vista puede ser poco importante, pero cuando se le da un uso adecuado es capaz de crear vida de maneras rápidas y sencillas.</span>",
    "<span>Ahora me encuentro revisando la investigación de las Clases en la POO...</span>",
    "<span>Pablo me informó que ya debías de estar preparado. Así qué, ¿estás listo para responder preguntas de herencia?</span>"
];

// Variable similar a dialogs33 para ir mostrando las preguntas.
let questions3 = -1;

// Preguntas que hará el doctor.
// El 3 indica el nivel 3.
let questionsDoctor3 = [
    "1. ¿Qué es la herencia?",
    "2. ¿Cuáles son los tipos de herencia?",
    "3. ¿Qué es la subclase en herencias?",
    "4. ¿Qué es la superclase en herencias?",
    "5. ¿De qué tipo de células heredan las neuronas y las células gliales?",
    "6. ¿De qué tipo de células heredan los globulos blancos?",
    "7. ¿De qué tipo de células heredan los globulos rojos?"
];


// Respuestas para el doctor.
// El 3 indica el nivel 3.
let answersDoctor3 = [
    // Respuestas de la pregunta 1.
    {
        r: [
            "Definen estados o cualidades.",
            "Son las característiaca de un algo.",
            "Mecanismo por el cual una clase permite heredar las características.",
            "Ninguna de las anteriores."
        ],
        c: 2
    },
    // Respuestas de la pregunta 2.
    {
        r: [
            "Ambas son correctas.",
            "Superclase.",
            "Subclase.",
            "Ninguna de las anteriores."
        ],
        c: 0
    },
    // Respuestas de la pregunta 3.
    {
        r: [
            "Ninguna de las anteriores.",
            "Es la clase padre de la que se puede heredar.",
            "Es la clase hija que hereda de una clase padre.",
            "Ambas son correctas."
        ],
        c: 2
    },
    // Respuestas de la pregunta 4.
    {
        r: [
            "Ninguna de las anteriores.",
            "Es la clase padre de la que se puede heredar.",
            "Es la clase que hereda de una clase padre.",
            "Ambas son correctas."
        ],
        c: 1
    },
    // Respuestas de la pregunta 5.
    {
        r: [
            "Células epiteliales.",
            "Células de la sangre.",
            "Leucocitos.",
            "Células nerviosas."
        ],
        c: 3
    },
    // Respuestas de la pregunta 6.
    {
        r: [
            "Células epiteliales.",
            "Células de la sangre.",
            "Leucocitos.",
            "Células nerviosas."
        ],
        c: 2
    },
    // Respuestas de la pregunta 7.
    {
        r: [
            "Células epiteliales.",
            "Células de la sangre.",
            "Leucocitos.",
            "Células nerviosas."
        ],
        c: 1
    }
];

// Variable para permitir mostrar las preguntas del doctor.
// Q: Questions.
// -1 -> No se permite mostrar las preguntas
// 0 -> Se permite mostrar las preguntas
// 1 -> Hubo un error en las respuestas
// 2 -> Ha terminado de responder todo correctamente.
let allowQ3 = -1;

// Variable que permite pasar o no de nivel.
// -1 -> No se ha determinado.
// 0 -> Cuando ha contestado correctamente las preguntas y ha dado click en Sí.
// 1 -> Cuando no ha contestado correctamente las preguntas o ha dado click en No.
let allowPassLevel3 = -1;

// Diálogos de pablo.
let dialogsPablo3 = [
    "¡Amigo mio!",
    "¿Qué tal todo?",
    "Veo que estás avanzado a pasos agigantados.",
    "Te diría que descansemos un poco, pero la verdad no sé cuánto más podrá soportar mi cordura.",
    "¡No perdamos más tiempo y sigamos, estamos cerca de finalizar tu entrenamiento!",
    "¿Preparado para seguir?"
];

// Arreglo que contiene todos los diálogos de ambos personajes.
let allDialogs3 = [
    dialogsDoctor3,
    dialogsPablo3
];

// El 3 al final indica el nivel 3.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs3 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 3, indica el nivel 3.
let doctorX3 = 100;
let hospitalX3 = 120;
let pabloSmallX3 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 3, indica el nivel 3.
let alertDoctor3 = alertAction.cloneNode(true);
let alertPablo3 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertdoctorX3 = 95;
let alertPabloX3 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con el doctor.
// 1 -> Se puede hablar con Pablo.
let talkTo3 = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con el doctor.
// 1 -> Ya habló con pablo.
let alreadytalkTo3 = -1;

// Función para ocultar las respuestas.
function hideAnswers3() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs3() {
    dialog32.classList.add("dialog-hide");
    dialog32.classList.add("dialog-behind-curtain");
    dialogs3 = -1;
    hideAnswers3();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs3() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog32.style.top = "";
    dialog32.style.left = "";
    dialog32.style.transform = "";

    // Se muestra el diálogo.
    dialog32.classList.remove("dialog-hide");
    dialog32.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs3 = 0;
    dialog32.innerHTML = allDialogs3[talkTo3][0];
}

// Función para mostrar los diálogos del doctor.
async function showDoctorDialogs3() {
    doctor32.style.left = "0.5rem";
    doctor32.style.top = "0.75rem";
    doctor32.classList.remove("doctor-hide");
    doctor32.classList.remove("doctor-behind-curtain");
    alreadytalkTo3 = 0;
    showDialogs3();
}

// Función para ocultar los diálogos del doctor.
async function hideDoctorDialogs3() {
    doctor32.classList.add("doctor-hide");
    doctor32.classList.add("doctor-behind-curtain");
    alreadytalkTo3 = -1;
    allowQ3 = allowQ3 != 2 ? -1 : 2;
    hideDialogs3();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs3() {
    pabloSmall32.style.left = "0.5rem";
    pabloSmall32.style.top = "0.75rem";
    pabloSmall32.classList.remove("pablo-small-hide");
    pabloSmall32.classList.remove("pablo-small-behind-curtain");
    alreadytalkTo3 = 1;
    showDialogs3();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs3() {
    pabloSmall32.classList.add("pablo-small-hide");
    pabloSmall32.classList.add("pablo-small-behind-curtain");
    alreadytalkTo3 = -1;
    hideDialogs3();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterdialogs3() {
    // Se ocultan los diálogos del biólogo.
    if (alreadytalkTo3 == 0) { hideDoctorDialogs3(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas del biólogo.
    if (talkTo3 == 1 && allowPassLevel3 == 1) { allowPassLevel3 = -1; dialogs3 = -1; hidePabloSmallDialogs3(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadytalkTo3 == 1) { hidePabloSmallDialogs3(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo3 == 0 && allowQ3 != 2) { showDoctorDialogs3(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo3 == 1 && allowQ3 != 3) { showPabloSmallDialogs3(); return; }
};

async function finishLevel3(goNextLevel) {
    if (!goNextLevel) {
        dialog32.innerHTML = "¡Ven a verme cuando desees pasar de nivel!";
        hideAnswers3();
        allowPassLevel3 = 1;
        dialogs3 = 0;
        return;
    }

    if (allowQ3 != 2) {
        dialog32.innerHTML = "Lo siento. Primero debes responder a las preguntas del doctor.";
        hideAnswers3();
        allowPassLevel3 = 1;
        dialogs3 = 0;
        return;
    }

    if (goNextLevel && allowQ3 == 2) {
        // Se le pasa el control del movimiento al nivel 4.
        mVC = 3;

        // Se ocultan todos los recursos del nivel 3.
        hideThirdLevel();

        between.classList.remove('between-behind-curtain');
        between.classList.remove('between-hide');
        await sleep(5000);
        between.classList.add('between-hide');
        await sleep(1000);
        between.classList.add('between-behind-curtain');

        // Se ejecuta el proceso para mostrar el nivel 4.
        loadLevel4Variables();
    }
}

async function updateDialog3() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowQ3 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowQ3 == 1) { hideDoctorDialogs3(); allowQ3 = -1; return; }
    if (allowQ3 == 2 && talkTo3 == 0) { hideDoctorDialogs3(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel3 == 1 && talkTo3 == 1) { hidePabloSmallDialogs3(); allowPassLevel3 = -1; return; }

    let theDialogs = allDialogs3[talkTo3];
    dialog32.innerHTML = theDialogs[dialogs3];
    if (dialogs3 != (theDialogs.length - 1)) { hideAnswers3(); return; }
    else if (talkTo3 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showDoctorQuestions3(true);
        answer2.onclick = () => showDoctorQuestions3(false);

        // Se ocultan las respuestas 3 y 4.
        answer3.classList.add("answer-hide");
        answer4.classList.add("answer-hide");

        // Se muestra todo el contenedor de respuestas.
        answers.classList.remove("answers-hide");
        answers.classList.remove("answers-behind-curtain");

        // En caso de que el usuario se encuentre en un diálogo
        // diferente al último, se deben ocultar las respuestas.
    } else {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => finishLevel3(true);
        answer2.onclick = () => finishLevel3(false);

        // Se ocultan las respuestas 3 y 4.
        answer3.classList.add("answer-hide");
        answer4.classList.add("answer-hide");

        // Se muestra todo el contenedor de respuestas.
        answers.classList.remove("answers-hide");
        answers.classList.remove("answers-behind-curtain");

        // En caso de que el usuario se encuentre en un diálogo
        // diferente al último, se deben ocultar las respuestas.
    }
}

async function verifyAnswer3(theQuestion, theAnswer, theAnswerElement) {
    // Se toma la pregunta y se verifica que la respuesta correcta
    // de la pregunta, efectivamente corresponde con la respuesta otorgada.
    // En caso tal de que la respuesta otorgada no corresponda con la respuesta
    // correcta, se debe indicar al usuario que se ha equivocado y que debe revisar
    // el libro e intentar nuevamente
    if (answersDoctor3[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);

        // Se muestra la siguiente pregunta.
        questions3++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions3 == questionsDoctor3.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog32.innerHTML = `<span>Creo que así está perfecto. Pablo te estará esperando para mostrarte a los demás del pueblo. ¡Adiós y gracias!</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowQ3 = 2;
            // Se ocultan las respuestas.
            hideAnswers3();
            return;
        }

        dialog32.innerHTML = `<span>${questionsDoctor3[questions3]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersDoctor3[questions3]["r"][0];
        answer2.innerHTML = answersDoctor3[questions3]["r"][1];
        answer3.innerHTML = answersDoctor3[questions3]["r"][2];
        answer4.innerHTML = answersDoctor3[questions3]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer3(questions3, 0, answer1);
        answer2.onclick = () => verifyAnswer3(questions3, 1, answer2);
        answer3.onclick = () => verifyAnswer3(questions3, 2, answer3);
        answer4.onclick = () => verifyAnswer3(questions3, 3, answer4);

        // Se ha equivocado en la respuesta.
    } else {
        theAnswerElement.classList.add("incorrect-answer");
        await sleep(1500);
        theAnswerElement.classList.remove("incorrect-answer");

        // Se ocultan las respuestas
        answer1.classList.add("answer-hide");
        answer2.classList.add("answer-hide");
        answer3.classList.add("answer-hide");
        answer4.classList.add("answer-hide");

        dialog32.innerHTML = "Lo siento, creo que te has equivocado...";

        allowQ3 = 1;
    }
}

async function showDoctorQuestions3(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions3 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowQ3 = 0;
        dialog32.innerHTML = `<span>${questionsDoctor3[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersDoctor3[0]["r"][0];
        answer2.innerHTML = answersDoctor3[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersDoctor3[0]["r"][2];
        answer4.innerHTML = answersDoctor3[0]["r"][3];

        // Se asigna el método click para cada una de las variables
        answer1.onclick = () => verifyAnswer3(0, 0, answer1);
        answer2.onclick = () => verifyAnswer3(0, 1, answer2);
        answer3.onclick = () => verifyAnswer3(0, 2, answer3);
        answer4.onclick = () => verifyAnswer3(0, 3, answer4);
    } else {

    }
}

async function controlFuncs3(keyDown) {
    if (((keyDown != "w" && keyDown != "W") &&
        (keyDown != "a" && keyDown != "A") &&
        (keyDown != "s" && keyDown != "S") &&
        (keyDown != "d" && keyDown != "D")) &&
        keyDown != "ArrowUp" && keyDown != "ArrowLeft" && keyDown != "ArrowDown" && keyDown != "ArrowRight" &&
        (keyDown != "e" && keyDown != "E")) {
        return;
    }

    if (keyDown == "w" || keyDown == "W" || keyDown == "ArrowUp") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs3 > -1) return;
        keyToUpPressed3 = true;
        if (keyToRightPressed3) movePlayerRight3();
        else if (keyToLeftPressed3) movePlayerLeft3();
        movePlayerUp3();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs3 > -1) return;
        keyToDownPressed3 = true;
        movePlayerDown3();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs3 > -1) {
            if (dialogs3 > 0) dialogs3--;
            updateDialog3();
            return;
        } else {
            keyToLeftPressed3 = true;
            if (keyToUpPressed3) movePlayerUp3();
            movePlayerLeft3();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs3 > -1) {
            let lengthDialogs = allDialogs3[talkTo3].length;
            if (dialogs3 < (lengthDialogs - 1)) dialogs3++;
            updateDialog3();
            return;
        } else {
            keyToRightPressed3 = true;
            if (keyToUpPressed3) movePlayerUp3();
            movePlayerRight3();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo3 != -1) toggleCharacterdialogs3();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys3(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed3 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed3 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed3 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed3 = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
async function addThirdLevel() {
    // Se muestra el letrero que indica el primer nivel
    showLevel.innerHTML = 'NIVEL 3';
    showLevel.classList.remove('show-level-behind-curtain');
    showLevel.classList.remove('show-level-hide');

    // Se muestra el jugador
    character.classList.remove("character-behind-curtain");
    await sleep(1000);
    character.classList.remove("character-hide");

    // Se ubica el jugador en la parte inferior del mapa
    character.style.bottom = "3rem";
    character.style.left = "1rem";

    // Se muestra el piso del juego
    floor.classList.remove("floor-behind-curtain");
    await sleep(1000);
    floor.classList.remove("floor-hide");

    // Se agrega el personaje de la profesora
    doctor.classList.remove("doctor-behind-curtain");
    doctor.classList.remove("doctor-hide");

    // Se ubica la profesora en la parte inferior del mapa
    doctor.style.bottom = "3rem";
    doctor.style.left = "100rem";

    // Se agrega la construcción del hospital
    hospital.classList.remove('hospital-behind-curtain');
    hospital.classList.remove('hospital-hide');

    // Se ubica la profesora en la parte inferior del mapa
    hospital.style.bottom = "3rem";
    hospital.style.left = "120rem";

    // Se agrega a pablo pequeño al final del nivel
    pabloSmall.classList.remove("pablo-small-hide");
    pabloSmall.classList.remove("pablo-small-behind-curtain");

    // Se ubica a pablo small en la parte inferior al final del mapa
    pabloSmall.style.bottom = "3rem";
    pabloSmall.style.left = "240rem";

    // Se posicionan las alertas y se agregan los textos.
    alertDoctor3.innerHTML = "Pulsa <b>E</b> para hablar con el doctor";
    alertDoctor3.style.left = "95rem";
    alertDoctor3.style.bottom = "15rem";

    alertPablo3.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo3.style.left = "235rem";
    alertPablo3.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertDoctor3);
    levels.appendChild(alertPablo3);

    // Se oculta el letrero después de haber mostrado todos los recursos del nivel.
    showLevel.classList.add('show-level-hide');
    await sleep(1000);
    showLevel.classList.add('show-level-behind-curtain');
}

async function hideThirdLevel() {
    // Se oculta el personaje principal
    character.classList.add("character-behind-curtain");
    character.classList.add("character-hide");

    // Se oculta el personaje de la doctor
    doctor.classList.add("doctor-behind-curtain");
    doctor.classList.add("doctor-hide");

    // Se oculta la construcción de la escuela
    hospital.classList.add("hospital-behind-curtain");
    hospital.classList.add("hospital-hide");

    // Se oculta al pablo pequeño de los diálogos
    pabloSmall32.classList.add("pablo-small-hide");
    pabloSmall32.classList.add("pablo-small-behind-curtain");

    // Se oculta al pablo que se encuentra en el nivel
    pabloSmall.classList.add("pablo-small-hide");
    pabloSmall.classList.add("pablo-small-behind-curtain");

    // Se ocultan los diálogos
    dialog32.classList.add("dialog-hide");
    dialog32.classList.add("dialog-behind-curtain");

    // Se ocultan las respuestas
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");

    // Se remueven los diálogos del nivel
    levels.removeChild(alertDoctor3);
    levels.removeChild(alertPablo3);
}

let alreadyGoUp3 = false;
async function movePlayerUp3() {
    if (!alreadyGoUp3) {
        character.style.bottom = "15rem";
        alreadyGoUp3 = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp3 = false;
    }
    if (keyToRightPressed3) movePlayerRight3();
    // Verificar diálogos.
    verifyDialog3();
}

async function movePlayerDown3() {
    if (yPlayer3 > 3) yPlayer3 -= 2;
    character.style.bottom = `${yPlayer3}rem`;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog3();
}

async function movePlayerLeft3() {
    if (xPlayer3 > 1) {
        xPlayer3--;
        character.style.left = `${xPlayer3}rem`;

        // Verificar diálogos.
        verifyDialog3();
    } else if (xBackground3 >= 1) {
        xBackground3 -= 0.005;
        moveLeftBackground3();
    }
}

async function movePlayerRight3() {
    if (xPlayer3 < 74) {
        xPlayer3++;
        character.style.left = `${xPlayer3}rem`;
        // Verificar diálogos.
        verifyDialog3();
    }
    else if (xBackground3 < 1.65) {
        xBackground3 += 0.005;
        moveRightBackground3();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog3() {
    // Se verifica para la teacher.
    let distanceTeacher = doctorX3 - xPlayer3;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con la profesora.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowQ3 != 2) {
        alertDoctor3.classList.remove("alert-action-hide");
        alertDoctor3.classList.remove("alert-action-behind-curtain");
        talkTo3 = 0;
        return;
    } else {
        alertDoctor3.classList.add("alert-action-hide");
        alertDoctor3.classList.add("alert-action-behind-curtain");
        talkTo3 = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX3 - xPlayer3;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo3.classList.remove("alert-action-hide");
        alertPablo3.classList.remove("alert-action-behind-curtain");
        talkTo3 = 1;
        return;
    } else {
        alertPablo3.classList.add("alert-action-hide");
        alertPablo3.classList.add("alert-action-behind-curtain");
        talkTo3 = -1;
    }
}

function moveRightBackground3() {
    doctorX3 -= xBackground3;
    hospitalX3 -= xBackground3;
    pabloSmallX3 -= xBackground3;
    alertdoctorX3 -= xBackground3;
    alertPabloX3 -= xBackground3;

    doctor.style.left = `${doctorX3}rem`;
    hospital.style.left = `${hospitalX3}rem`;
    pabloSmall.style.left = `${pabloSmallX3}rem`;
    alertDoctor3.style.left = `${alertdoctorX3}rem`;
    alertPablo3.style.left = `${alertPabloX3}rem`;
}

function moveLeftBackground3() {
    doctorX3 += xBackground3;
    hospitalX3 += xBackground3;
    pabloSmallX3 += xBackground3;
    alertdoctorX3 += xBackground3;
    alertPabloX3 += xBackground3;

    doctor.style.left = `${doctorX3}rem`;
    hospital.style.left = `${hospitalX3}rem`;
    pabloSmall.style.left = `${pabloSmallX3}rem`;
    alertDoctor3.style.left = `${alertdoctorX3}rem`;
    alertPablo3.style.left = `${alertPabloX3}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel3Variables() {
    xPlayer3 = 1;
    yPlayer3 = 3;
    keyToUpPressed3 = false;
    keyToDownPressed3 = false;
    keyToLeftPressed3 = false;
    keyToRightPressed3 = false;

    xPlayer3 = 1;
    yPlayer3 = 3;
    xBackground3 = 1;
    questions3 = -1;
    allowQ3 = -1;
    allowPassLevel3 = -1;
    dialogs3 = -1;
    doctorX3 = 100;
    hospitalX3 = 120;
    pabloSmallX3 = 240;
    alertdoctorX3 = 95;
    alertPabloX3 = 235;
    talkTo3 = -1;
    alreadytalkTo3 = -1;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog32.
    dialog32.classList.add("dialog-hide");
    dialog32.classList.add("dialog-behind-curtain");
    dialog32.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(doctor32);
    levels.appendChild(pabloSmall32);
    levels.appendChild(dialog32);

    // Se llama la función que genera el nivel 3.
    addThirdLevel();
}