// Coordenadas del jugador para el nivel 3
let xPlayer6 = 1;
let yPlayer6 = 3;

// Coordenadas para mover el escenario
let xBackground6 = 1;

// Teclas presionadas
let keyToUpPressed6 = false;
let keyToDownPressed6 = false;
let keyToLeftPressed6 = false;
let keyToRightPressed6 = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El primer 3 inidica que es del nivel 3.
// El segundo 2 inidica que es una copia del personaje original.
let apo62 = apo2.cloneNode(true);
let pabloSmall62 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog62 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 3 al final indica el nivel 3.
// Diálogos del doctor.
let dialogsApo6 = [
    "<span>*Te quedas boquiabierto por ver por primera vez una figura de 3 dimensiones*</span>",
    "<span>*El cubo nota tu presencia y percibe una sensación de nobleza*</span>",
    "<span>*Empieza a girar y preguntarte si deseas empezar las preguntas (al parecer tendrá piedad de ti)*</span>"
];

// Variable similar a dialogs43 para ir mostrando las preguntas.
let questions6 = -1;

// Preguntas que hará el doctor.
// El 3 indica el nivel 3.
let questionsApo6 = [
    "1. ¿Qué es un objeto?",
    "2. ¿Cuál de las siguientes afirmaciones es verdadera acerca de los atributos de una clase?",
    "3. ¿Qué es la subclase en herencias?",
    "4. ¿Qué es un evento en POO?",
    "5. ¿Qué es la sobrecarga de un método?",
    "6. ¿Qué son las clases?",
    "7. ¿Cuáles son los atributos de un paciente con taquicardia?",
    "8. ¿De qué tipo de células heredan los globulos rojos?",
    "9. ¿Cuáles son los métodos del hipotálamo?",
    "10. De los siguientes métodos, ¿cuáles se podrían considerar como sobrecarga?",
    "11. El corazón y los pulmones son objetos de la clase...",
    "12. ¿Cuáles son los métodos del corazón humano?"
];


// Respuestas para el doctor.
// El 3 indica el nivel 3.
let answersApo6 = [
    // Respuestas de la pregunta 1.
    {
        r: [
            "Definen estados o cualidades.",
            "Son las característiaca de un algo.",
            "Son aquellos encargados de representar cosas.",
            "Ninguna de las anteriores."
        ],
        c: 2
    },
    // Respuestas de la pregunta 2.
    {
        r: [
            "Los atributos son funciones que pertenecen a una clase.",
            "Los atributos definen el comportamiento de una clase.",
            "Los atributos son variables que almacenan datos relacionados con una clase.",
            "Los atributos son utilizados para realizar operaciones en una clase."
        ],
        c: 2
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
            "Ambas son correctas.",
            "Son sucesos que utiliza un objeto para iniciar un método de otro objeto.",
            "Son acciones que puede realizar un objeto.",
            "Ninguna de las anteriores."
        ],
        c: 1
    },
    // Respuestas de la pregunta 5.
    {
        r: [
            "Cuando el método de una clase hija tiene el mismo nombre que el método de una clase padre.",
            "Ninguna de las anteriores.",
            "Cuando un método tiene el mismo nombre pero sus entradas generan diferentes salidas.",
            "Ambas son correctas."
        ],
        c: 2
    },
    // Respuestas de la pregunta 6.
    {
        r: [
            "Son representaciones de un tipo particular de objeto. ",
            "Son acciones que pueden retornan o no un valor como resultado.",
            "Todas las anteriores.",
            "Son las características de un objeto."
        ],
        c: 0
    },
    // Respuestas de la pregunta 7.
    {
        r: [
            "Ritmo cardiaco desacelerado.",
            "Ritmo cardiaco acelerado.",
            "Ritmo cardiaco normal.",
            "Ninguna de las anteriores."
        ],
        c: 1
    },
    // Respuestas de la pregunta 8.
    {
        r: [
            "Células epiteliales.",
            "Células de la sangre.",
            "Leucocitos.",
            "Células nerviosas."
        ],
        c: 1
    },
    // Respuestas de la pregunta 9.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Sístole y Diástole.",
            "Segregación de gondatropinas.",
            "Digestión mecánica y digestión química."
        ],
        c: 2
    },
    // Respuestas de la pregunta 10.
    {
        r: [
            "Ninguna de las anteriores.",
            "El método de las funciones orgánicas, ya que cada órgano tiene una función pero cada uno realiza diferentes procesos.",
            "El método del intercambio gaseoso en los alveólos.",
            "El método de mover las articulaciones ya que dependiendo de la artículación se envían diferentes señales."
        ],
        c: 3
    },
    // Respuestas de la pregunta 11.
    {
        r: [
            "Células.",
            "Órganos.",
            "Sistemas.",
            "Tejidos."
        ],
        c: 1
    },
    // Respuestas de la pregunta 12.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Digestión mecánica y digestión química.",
            "Segregación de gondatropinas.",
            "Sístole y Diástole."
        ],
        c: 3
    }
];

// Variable para permitir mostrar las preguntas del doctor.
// Q: Questions.
// -1 -> No se permite mostrar las preguntas
// 0 -> Se permite mostrar las preguntas
// 1 -> Hubo un error en las respuestas
// 2 -> Ha terminado de responder todo correctamente.
let allowQ6 = -1;

// Variable que permite pasar o no de nivel.
// -1 -> No se ha determinado.
// 0 -> Cuando ha contestado correctamente las preguntas y ha dado click en Sí.
// 1 -> Cuando no ha contestado correctamente las preguntas o ha dado click en No.
let allowPassLevel6 = -1;

// Diálogos de pablo.
let dialogsPablo6 = [
    "¿¡Cómo estás!?",
    "¿¡Lo has conseguido?!",
    "¿¡Podemos ir a contar nuestra victora a nuestros hermanos cúbicos y esperar a que todo florezca!?"
];

// Arreglo que contiene todos los diálogos de ambos personajes.
let allDialogs6 = [
    dialogsApo6,
    dialogsPablo6
];

// El 3 al final indica el nivel 3.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs6 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 3, indica el nivel 3.
let apoX6 = 100;
let pabloSmallX6 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 3, indica el nivel 3.
let alertApo6 = alertAction.cloneNode(true);
let alertPablo6 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertApoX6 = 95;
let alertPabloX6 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con el doctor.
// 1 -> Se puede hablar con Pablo.
let talkTo6 = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con el doctor.
// 1 -> Ya habló con pablo.
let alreadyTalkTo6 = -1;

// Función para ocultar las respuestas.
function hideAnswers6() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs6() {
    dialog62.classList.add("dialog-hide");
    dialog62.classList.add("dialog-behind-curtain");
    dialogs6 = -1;
    hideAnswers6();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs6() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog62.style.top = "";
    dialog62.style.left = "";
    dialog62.style.transform = "";

    // Se muestra el diálogo.
    dialog62.classList.remove("dialog-hide");
    dialog62.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs6 = 0;
    dialog62.innerHTML = allDialogs6[talkTo6][0];
}

// Función para mostrar los diálogos del doctor.
async function showApoDialogs6() {
    apo62.style.left = "2.5rem";
    apo62.style.top = "2.75rem";
    apo62.classList.remove("apo2-hide");
    apo62.classList.remove("apo2-behind-curtain");
    alreadyTalkTo6 = 0;
    showDialogs6();
}

// Función para ocultar los diálogos del doctor.
async function hideApoDialogs6() {
    apo62.classList.add("apo2-hide");
    apo62.classList.add("apo2-behind-curtain");
    alreadyTalkTo6 = -1;
    allowQ6 = allowQ6 != 2 ? -1 : 2;
    hideDialogs6();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs6() {
    pabloSmall62.style.left = "0.5rem";
    pabloSmall62.style.top = "0.75rem";
    pabloSmall62.classList.remove("pablo-small-hide");
    pabloSmall62.classList.remove("pablo-small-behind-curtain");
    alreadyTalkTo6 = 1;
    showDialogs6();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs6() {
    pabloSmall62.classList.add("pablo-small-hide");
    pabloSmall62.classList.add("pablo-small-behind-curtain");
    alreadyTalkTo6 = -1;
    hideDialogs6();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterDialogs6() {
    // Se ocultan los diálogos del biólogo.
    if (alreadyTalkTo6 == 0) { hideApoDialogs6(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas del biólogo.
    if (talkTo6 == 1 && allowPassLevel6 == 1) { allowPassLevel6 = -1; dialogs6 = -1; hidePabloSmallDialogs6(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadyTalkTo6 == 1) { hidePabloSmallDialogs6(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo6 == 0 && allowQ6 != 2) { showApoDialogs6(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo6 == 1 && allowQ6 != 3) { showPabloSmallDialogs6(); return; }
};

async function showCredits() {
    credits.classList.remove('credits-behind-curtain');
    credits.classList.remove('credits-hide');
    await sleep(20000);
    credits.classList.add('credits-behind-curtain');
    credits.classList.add('credits-hide');

    // Se oculta el contenedor de levels
    levels.classList.add('levels-hide');
    await sleep(1000)
    levels.classList.add('levels-behind-curtain');

    // Se muestra el contenedor de las opciones generales
    gameOptionsContainer.classList.remove('game-options-container-behind-curtain');
    await sleep(1000);
    gameOptionsContainer.classList.remove('game-options-container-hide');
}

async function finishLevel6(goNextLevel) {
    if (!goNextLevel) {
        dialog62.innerHTML = "¡Ven a verme cuando hayas derrotado al Cubo APO!";
        hideAnswers6();
        allowPassLevel6 = 1;
        dialogs6 = 0;
        return;
    }

    if (allowQ6 != 2) {
        dialog62.innerHTML = "Pero si ya lo venciste... ¿Por qué no hemos vuelto a la normalidad?";
        hideAnswers6();
        allowPassLevel6 = 1;
        dialogs6 = 0;
        return;
    }

    if (goNextLevel && allowQ6 == 2) {
        // Se le pasa el control del movimiento para finalizar.
        mVC = 6;

        // Se ocultan todos los recursos del nivel 6.
        hideSixthLevel();

        between.classList.remove('between-behind-curtain');
        between.classList.remove('between-hide');
        await sleep(5000);
        between.classList.add('between-hide');
        await sleep(1000);
        between.classList.add('between-behind-curtain');

        // Se ejecuta el proceso para finalizar el juego y mostrar los créditos.
        showCredits();
    }
}

async function updateDialog6() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowQ6 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowQ6 == 1) { hideApoDialogs6(); allowQ6 = -1; return; }
    if (allowQ6 == 2 && talkTo6 == 0) { hideApoDialogs6(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel6 == 1 && talkTo6 == 1) { hidePabloSmallDialogs6(); allowPassLevel6 = -1; return; }

    let theDialogs = allDialogs6[talkTo6];
    dialog62.innerHTML = theDialogs[dialogs6];
    if (dialogs6 != (theDialogs.length - 1)) { hideAnswers6(); return; }
    else if (talkTo6 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showApoQuestions6(true);
        answer2.onclick = () => showApoQuestions6(false);

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

        answer1.onclick = () => finishLevel6(true);
        answer2.onclick = () => finishLevel6(false);

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

async function verifyAnswer6(theQuestion, theAnswer, theAnswerElement) {
    // Se toma la pregunta y se verifica que la respuesta correcta
    // de la pregunta, efectivamente corresponde con la respuesta otorgada.
    // En caso tal de que la respuesta otorgada no corresponda con la respuesta
    // correcta, se debe indicar al usuario que se ha equivocado y que debe revisar
    // el libro e intentar nuevamente
    if (answersApo6[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);

        // Se muestra la siguiente pregunta.
        questions6++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions6 == questionsApo6.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog62.innerHTML = `<span>Me has demostrado tu confianza en la POO. Eres de una valentía admirable. ¡Este universo volverá a las tres dimensiones!</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowQ6 = 2;
            // Se ocultan las respuestas.
            hideAnswers6();
            return;
        }

        dialog62.innerHTML = `<span>${questionsApo6[questions6]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersApo6[questions6]["r"][0];
        answer2.innerHTML = answersApo6[questions6]["r"][1];
        answer3.innerHTML = answersApo6[questions6]["r"][2];
        answer4.innerHTML = answersApo6[questions6]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer6(questions6, 0, answer1);
        answer2.onclick = () => verifyAnswer6(questions6, 1, answer2);
        answer3.onclick = () => verifyAnswer6(questions6, 2, answer3);
        answer4.onclick = () => verifyAnswer6(questions6, 3, answer4);

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

        dialog62.innerHTML = "Lo siento, creo que te has equivocado...";

        allowQ6 = 1;
    }
}

async function showApoQuestions6(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions6 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowQ6 = 0;
        dialog62.innerHTML = `<span>${questionsApo6[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersApo6[0]["r"][0];
        answer2.innerHTML = answersApo6[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersApo6[0]["r"][2];
        answer4.innerHTML = answersApo6[0]["r"][3];

        // Se asigna el método click para cada una de las variables
        answer1.onclick = () => verifyAnswer6(0, 0, answer1);
        answer2.onclick = () => verifyAnswer6(0, 1, answer2);
        answer3.onclick = () => verifyAnswer6(0, 2, answer3);
        answer4.onclick = () => verifyAnswer6(0, 3, answer4);
    } else {

    }
}

async function controlFuncs6(keyDown) {
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
        if (dialogs6 > -1) return;
        keyToUpPressed6 = true;
        if (keyToRightPressed6) movePlayerRight6();
        else if (keyToLeftPressed6) movePlayerLeft6();
        movePlayerUp6();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs6 > -1) return;
        keyToDownPressed6 = true;
        movePlayerDown6();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs6 > -1) {
            if (dialogs6 > 0) dialogs6--;
            updateDialog6();
            return;
        } else {
            keyToLeftPressed6 = true;
            if (keyToUpPressed6) movePlayerUp6();
            movePlayerLeft6();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs6 > -1) {
            let lengthDialogs = allDialogs6[talkTo6].length;
            if (dialogs6 < (lengthDialogs - 1)) dialogs6++;
            updateDialog6();
            return;
        } else {
            keyToRightPressed6 = true;
            if (keyToUpPressed6) movePlayerUp6();
            movePlayerRight6();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo6 != -1) toggleCharacterDialogs6();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys6(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed6 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed6 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed6 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed6 = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
async function addSixthLevel() {
    // Se muestra el letrero que indica el primer nivel
    showLevel.innerHTML = 'NIVEL 6';
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
    apo.classList.remove("apo-behind-curtain");
    apo.classList.remove("apo-hide");

    // Se ubica el ingeniero en la parte inferior del mapa
    apo.style.bottom = "6rem";
    apo.style.left = "100rem";

    // Se agrega a pablo pequeño al final del nivel
    pabloSmall.classList.remove("pablo-small-hide");
    pabloSmall.classList.remove("pablo-small-behind-curtain");

    // Se ubica a pablo small en la parte inferior al final del mapa
    pabloSmall.style.bottom = "3rem";
    pabloSmall.style.left = "240rem";

    // Se posicionan las alertas y se agregan los textos.
    alertApo6.innerHTML = "Pulsa <b>E</b> para hablar con el Cubo APO";
    alertApo6.style.left = "95rem";
    alertApo6.style.bottom = "24rem";

    alertPablo6.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo6.style.left = "235rem";
    alertPablo6.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertApo6);
    levels.appendChild(alertPablo6);

    // Se oculta el letrero después de haber mostrado todos los recursos del nivel.
    showLevel.classList.add('show-level-hide');
    await sleep(1000);
    showLevel.classList.add('show-level-behind-curtain');
}

async function hideSixthLevel() {
    // Se oculta el personaje principal
    character.classList.add("character-behind-curtain");
    character.classList.add("character-hide");

    // Se oculta el personaje del ingeniero
    apo.classList.add("apo-behind-curtain");
    apo.classList.add("apo-hide");

    // Se oculta al pablo pequeño de los diálogos
    pabloSmall62.classList.add("pablo-small-hide");
    pabloSmall62.classList.add("pablo-small-behind-curtain");

    // Se oculta al pablo que se encuentra en el nivel
    pabloSmall.classList.add("pablo-small-hide");
    pabloSmall.classList.add("pablo-small-behind-curtain");

    // Se ocultan los diálogos
    dialog62.classList.add("dialog-hide");
    dialog62.classList.add("dialog-behind-curtain");

    // Se ocultan las respuestas
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");

    // Se remueven los diálogos del nivel
    levels.removeChild(alertApo6);
    levels.removeChild(alertPablo6);
}

let alreadyGoUp6 = false;
async function movePlayerUp6() {
    if (!alreadyGoUp6) {
        character.style.bottom = "15rem";
        alreadyGoUp6 = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp6 = false;
    }
    if (keyToRightPressed6) movePlayerRight6();
    // Verificar diálogos.
    verifyDialog6();
}

async function movePlayerDown6() {
    if (yPlayer6 > 3) yPlayer6 -= 2;
    character.style.bottom = `${yPlayer6}rem`;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog6();
}

async function movePlayerLeft6() {
    if (xPlayer6 > 1) {
        xPlayer6--;
        character.style.left = `${xPlayer6}rem`;

        // Verificar diálogos.
        verifyDialog6();
    } else if (xBackground6 >= 1) {
        xBackground6 -= 0.005;
        moveLeftBackground6();
    }
}

async function movePlayerRight6() {
    if (xPlayer6 < 74) {
        xPlayer6++;
        character.style.left = `${xPlayer6}rem`;
        // Verificar diálogos.
        verifyDialog6();
    }
    else if (xBackground6 < 1.65) {
        xBackground6 += 0.005;
        moveRightBackground6();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog6() {
    // Se verifica para el ingeniero.
    let distanceTeacher = apoX6 - xPlayer6;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con el ingeniero.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowQ6 != 2) {
        alertApo6.classList.remove("alert-action-hide");
        alertApo6.classList.remove("alert-action-behind-curtain");
        talkTo6 = 0;
        return;
    } else {
        alertApo6.classList.add("alert-action-hide");
        alertApo6.classList.add("alert-action-behind-curtain");
        talkTo6 = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX6 - xPlayer6;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo6.classList.remove("alert-action-hide");
        alertPablo6.classList.remove("alert-action-behind-curtain");
        talkTo6 = 1;
        return;
    } else {
        alertPablo6.classList.add("alert-action-hide");
        alertPablo6.classList.add("alert-action-behind-curtain");
        talkTo6 = -1;
    }
}

function moveRightBackground6() {
    apoX6 -= xBackground6;
    pabloSmallX6 -= xBackground6;
    alertApoX6 -= xBackground6;
    alertPabloX6 -= xBackground6;

    apo.style.left = `${apoX6}rem`;
    pabloSmall.style.left = `${pabloSmallX6}rem`;
    alertApo6.style.left = `${alertApoX6}rem`;
    alertPablo6.style.left = `${alertPabloX6}rem`;
}

function moveLeftBackground6() {
    apoX6 += xBackground6;
    pabloSmallX6 += xBackground6;
    alertApoX6 += xBackground6;
    alertPabloX6 += xBackground6;

    apo.style.left = `${apoX6}rem`;
    pabloSmall.style.left = `${pabloSmallX6}rem`;
    alertApo6.style.left = `${alertApoX6}rem`;
    alertPablo6.style.left = `${alertPabloX6}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel6Variables() {
    xPlayer6 = 1;
    yPlayer6 = 3;
    keyToUpPressed6 = false;
    keyToDownPressed6 = false;
    keyToLeftPressed6 = false;
    keyToRightPressed6 = false;

    xPlayer6 = 1;
    yPlayer6 = 3;
    xBackground6 = 1;
    questions6 = -1;
    allowQ6 = -1;
    allowPassLevel6 = -1;
    dialogs6 = -1;
    apoX6 = 100;
    pabloSmallX6 = 240;
    alertApoX6 = 95;
    alertPabloX6 = 235;
    talkTo6 = -1;
    alreadyTalkTo6 = -1;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog62.
    dialog62.classList.add("dialog-hide");
    dialog62.classList.add("dialog-behind-curtain");
    dialog62.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(apo62);
    levels.appendChild(pabloSmall62);
    levels.appendChild(dialog62);

    // Se llama la función que genera el nivel 6.
    addSixthLevel();
}