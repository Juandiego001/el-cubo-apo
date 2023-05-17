// Coordenadas del jugador para el nivel 1
let xPlayer2 = 1;
let yPlayer2 = 3;

// Coordenadas para mover el escenario
let xBackground2 = 1;

// Teclas presionadas
let keyToUpPressed2 = false;
let keyToDownPressed2 = false;
let keyToLeftPressed2 = false;
let keyToRightPressed2 = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El primer 2 inidica que es del nivel 2.
// El segundo 2 inidica que es una copia del personaje original.
let biologist22 = biologist.cloneNode(true);
let pabloSmall22 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog22 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 1 al final indica el nivel 1.
// Diálogos de la profesora.
let dialogsTeacher2 = [
    "<span>¡Hola! Tú debes ser el nuevo. Pablo me comentó de ti...</span>",
    "<span>Te doy una vez más la bienvenida al pueblo cúbico...</span>",
    "<span>Yo soy <b>la profesora</b> del pueblo y me han encargado comentarte un poco más acerca de tu razón aquí...</span>",
    "<span>Verás, cada vida de nuestro universo tiene un código...</span>",
    "<span>En el universo 7 (el humanoide), se le llama <b>ADN...</b></span>",
    "<span>Nosotros lo llamamos <b>código fuente...</b></span>",
    "<span>Así, cada ser vivo que te rodea tiene un código fuente diferente...</span>",
    "<span>Ahora bien, este código se forma apartir de una estructura llamada <b>Paradigma de Programación Orientada a Objetos...</b></span>",
    "<span>Que para efectos más concretos, se ha decidido abreviar como <b>POO...</b></span>",
    "<span>Nuestros científicos, han logrado identificar <b>6 estructuras</b> aún más pequeñas que componen la <b>POO...</b></span>",
    "<span>Estas son: <b>clases, atributos, métodos, herencia, polimorfismo y sobrecarga...</b></span>",
    "<span>Se dice que pueden haber más, pero no sabremos cuando podremos averiguarlo...</span>",
    "<span>Como sabrás, desde que nuestra piedra angular <b>(El cubo APO)</b> fue robada...</span>",
    "<span>Hemos tenido mucho caos en este pueblo...</span>",
    "<span>Tanto así que se me ha encargado revisar nuevamente todas las investigaciones...</span>",
    "<span>Es un trabajo extenuante pero poco a poco he avanzado...</span>",
    "<span>Ahora me encuentro revisando la investigación de las Clases en la POO...</span>",
    "<span>Tengo un documento que describía su funcionamiento y Pablo me comentó...</span>",
    "<span>Que tú podrías confirmarme algunas con el libro que él te había proporcionado...</span>",
    "<span>Entonces quisiera saber si podrías ayudarme...</span>",
    "<span>¿Estás listo para responder algunas preguntas de Clases en la POO?</span>"
];

// Variable similar a dialogs21 para ir mostrando las preguntas.
let questions2 = -1;

// Preguntas que hará la profesora.
// El 1 indica el nivel 1.
let questionsTeacher2 = [
    "1. ¿Qué es un objeto?",
    "2. ¿Cómo se puede categorizar un objeto?",
    "3. ¿Qué son los mensajes entre objetos?",
    "4. ¿Qué son las clases?",
    "5. Un Ferrari es un objeto de la clase...",
    "6. Un Jet es un objeto de la clase...",
    "7. Elefantes y delfines hacen parte respectivamente de las clases..."
];


// Respuestas para la profesora.
// El 1 indica el nivel 1.
let answersTeacher2 = [
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
            "Simples y complejos.",
            "Reales o imaginarios.",
            "Nignua de las anteriores.",
            "Todas las anteriores."
        ],
        c: 3
    },
    // Respuestas de la pregunta 3.
    {
        r: [
            "Son representaciones de cosas.",
            "Son comunicaciones e interacciones entre objetos.",
            "Son acciones que puede ejecutar un objeto.",
            "Son características de un objeto."
        ],
        c: 1
    },
    // Respuestas de la pregunta 4.
    {
        r: [
            "Son representaciones de un tipo particular de objeto.",
            "Son acciones que pueden retornan o no un valor como resultado.",
            "Todas las anteriores.",
            "Son las características de un objeto."
        ],
        c: 0
    },
    // Respuestas de la pregunta 5.
    {
        r: [
            "De coches.",
            "De aviones.",
            "De animales.",
            "De plantas."
        ],
        c: 0
    },
    // Respuestas de la pregunta 6.
    {
        r: [
            "De coches.",
            "De animales.",
            "De aviones.",
            "De plantas."
        ],
        c: 2
    },
    // Respuestas de la pregunta 7.
    {
        r: [
            "Marsupiales y mamíferos.",
            "Acuáticos y terrestres.",
            "Ambos son mamíferos.",
            "Carnívoros y Omnívoros."
        ],
        c: 2
    }
];

// Variable para permitir mostrar las preguntas de la profesora
// TQ: Teacher Questions.
// -1 -> No se permite mostrar las preguntas
// 0 -> Se permite mostrar las preguntas
// 1 -> Hubo un error en las respuestas
// 2 -> Ha terminado de responder todo correctamente.
let allowTQ2 = -1;

// Variable que permite pasar o no de nivel.
// -1 -> No se ha determinado.
// 0 -> Cuando ha contestado correctamente las preguntas y ha dado click en Sí.
// 1 -> Cuando no ha contestado correctamente las preguntas o ha dado click en No.
let allowPassLevel2 = -1;

// Diálogos de pablo.
let dialogsPablo2 = [
    "¿Y qué tal? ¿Cómo ha ido todo?",
    "La profesora me comentó que has estado contestado adecuadamente...",
    "Es hora de seguir aprendiendo...",
    "¿Estás listo para el siguiente nivel?"
];

// Arreglo que contiene todos los diálogos de ambos personajes.
let allDialogs2 = [
    dialogsTeacher2,
    dialogsPablo2
];

// El 2 al final indica el nivel 2.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs2 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 2, indica el nivel 2.
let biologistX2 = 100;
let bigTreeX2 = 120;
let smallTreeX2 = 130;
let midTreeX2 = 135;
let pabloSmallX2 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 1, indica el nivel 1.
let alertBiologist2 = alertAction.cloneNode(true);
let alertPablo2 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertbiologistX2 = 95;
let alertPabloX2 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con la profesora.
// 1 -> Se puede hablar con Pablo.
let talkTo2 = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con la profesora.
// 1 -> Ya habló con pablo.
let alreadyTalkTo2 = -1;

// Función para ocultar las respuestas.
function hideAnswers2() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs2() {
    dialog22.classList.add("dialog-hide");
    dialog22.classList.add("dialog-behind-curtain");
    dialogs2 = -1;
    hideAnswers2();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs2() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog22.style.top = "";
    dialog22.style.left = "";
    dialog22.style.transform = "";

    // Se muestra el diálogo.
    dialog22.classList.remove("dialog-hide");
    dialog22.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs2 = 0;
    dialog22.innerHTML = allDialogs2[talkTo2][0];
}

// Función para mostrar los diálogos de la profesora.
async function showTeacherDialogs2() {
    biologist22.style.left = "0.5rem";
    biologist22.style.top = "0.75rem";
    biologist22.classList.remove("teacher-hide");
    biologist22.classList.remove("teacher-behind-curtain");
    alreadyTalkTo2 = 0;
    showDialogs2();
}

// Función para ocultar los diálogos de la profesora.
async function hideTeacherDialogs2() {
    biologist22.classList.add("teacher-hide");
    biologist22.classList.add("teacher-behind-curtain");
    alreadyTalkTo2 = -1;
    hideDialogs2();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs2() {
    pabloSmall22.style.left = "0.5rem";
    pabloSmall22.style.top = "0.75rem";
    pabloSmall22.classList.remove("pablo-small-hide");
    pabloSmall22.classList.remove("pablo-small-behind-curtain");
    alreadyTalkTo2 = 1;
    showDialogs2();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs2() {
    pabloSmall22.classList.add("pablo-small-hide");
    pabloSmall22.classList.add("pablo-small-behind-curtain");
    alreadyTalkTo2 = -1;
    hideDialogs2();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterDialogs2() {
    // Se ocultan los diálogos de la profesora.
    if (alreadyTalkTo2 == 0) { hideTeacherDialogs2(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas de la profesora.
    if (talkTo2 == 1 && allowPassLevel2 == 1) { allowPassLevel2 = -1; dialogs2 = -1; hidePabloSmallDialogs2(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadyTalkTo2 == 1) { hidePabloSmallDialogs2(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo2 == 0 && allowTQ2 != 2) { showTeacherDialogs2(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo2 == 1 && allowTQ2 != 3) { showPabloSmallDialogs2(); return; }
};

function finishLevel2(goNextLevel) {
    if (!goNextLevel) {
        dialog22.innerHTML = "¡Ven a verme cuando desees pasar de nivel!";
        hideAnswers2();
        allowPassLevel2 = 1;
        dialogs2 = 0;
        return;
    }

    if (allowTQ2 != 2) {
        dialog22.innerHTML = "Lo siento. Primero debes responder a las preguntas de la profesora.";
        hideAnswers2();
        allowPassLevel2 = 1;
        dialogs2 = 0;
        return;
    }

    if (goNextLevel && allowTQ2 == 2) alert("Está intentando ir al siguiente nivel");
}

async function updateDialog2() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowTQ2 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowTQ2 == 1) { hideTeacherDialogs2(); allowTQ2 = -1; return; }
    if (allowTQ2 == 2 && talkTo2 == 0) { hideTeacherDialogs2(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel2 == 1 && talkTo2 == 1) { hidePabloSmallDialogs2(); allowPassLevel2 = -1; return; }

    let theDialogs = allDialogs2[talkTo2];
    dialog22.innerHTML = theDialogs[dialogs2];
    if (dialogs2 != (theDialogs.length - 1)) { hideAnswers2(); return; }
    else if (talkTo2 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showTeacherQuestions2(true);
        answer2.onclick = () => showTeacherQuestions2(false);

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

        answer1.onclick = () => finishLevel2(true);
        answer2.onclick = () => finishLevel2(false);

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

async function verifyAnswer2(theQuestion, theAnswer, theAnswerElement) {
    // Se toma la pregunta y se verifica que la respuesta correcta
    // de la pregunta, efectivamente corresponde con la respuesta otorgada.
    // En caso tal de que la respuesta otorgada no corresponda con la respuesta
    // correcta, se debe indicar al usuario que se ha equivocado y que debe revisar
    // el libro e intentar nuevamente
    if (answersTeacher2[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);

        // Se muestra la siguiente pregunta.
        questions2++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions2 == questionsTeacher2.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog22.innerHTML = `<span>Creo que así está perfecto. Pablo te estará esperando para mostrarte a los demás del pueblo. ¡Adiós y gracias!</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowTQ2 = 2;
            // Se ocultan las respuestas.
            hideAnswers2();
            return;
        }

        dialog22.innerHTML = `<span>${questionsTeacher2[questions2]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersTeacher2[questions2]["r"][0];
        answer2.innerHTML = answersTeacher2[questions2]["r"][1];
        answer3.innerHTML = answersTeacher2[questions2]["r"][2];
        answer4.innerHTML = answersTeacher2[questions2]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer2(questions2, 0, answer1);
        answer2.onclick = () => verifyAnswer2(questions2, 1, answer2);
        answer3.onclick = () => verifyAnswer2(questions2, 2, answer3);
        answer4.onclick = () => verifyAnswer2(questions2, 3, answer4);

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

        dialog22.innerHTML = "Lo siento, creo que te has equivocado...";

        allowTQ2 = 1;
    }
}

async function showTeacherQuestions2(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions2 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowTQ2 = 0;
        dialog22.innerHTML = `<span>${questionsTeacher2[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersTeacher2[0]["r"][0];
        answer2.innerHTML = answersTeacher2[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersTeacher2[0]["r"][2];
        answer4.innerHTML = answersTeacher2[0]["r"][3];

        // Se asigna el método click para cada una de las variables
        answer1.onclick = () => verifyAnswer2(0, 0, answer1);
        answer2.onclick = () => verifyAnswer2(0, 1, answer2);
        answer3.onclick = () => verifyAnswer2(0, 2, answer3);
        answer4.onclick = () => verifyAnswer2(0, 3, answer4);
    } else {

    }
}

async function controlFuncs2(keyDown) {
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
        if (dialogs2 > -1) return;
        keyToUpPressed2 = true;
        if (keyToRightPressed2) movePlayerRight2();
        else if (keyToLeftPressed2) movePlayerLeft2();
        movePlayerUp2();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs2 > -1) return;
        keyToDownPressed2 = true;
        movePlayerDown2();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs2 > -1) {
            if (dialogs2 > 0) dialogs2--;
            updateDialog2();
            return;
        } else {
            keyToLeftPressed2 = true;
            if (keyToUpPressed2) movePlayerUp2();
            movePlayerLeft2();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs2 > -1) {
            let lengthDialogs = allDialogs2[talkTo2].length;
            if (dialogs2 < (lengthDialogs - 1)) dialogs2++;
            updateDialog2();
            return;
        } else {
            keyToRightPressed2 = true;
            if (keyToUpPressed2) movePlayerUp2();
            movePlayerRight2();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo2 != -1) toggleCharacterDialogs2();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys2(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed2 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed2 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed2 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed2 = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
async function addSecondLevel() {
    // Se muestra el letrero que indica el primer nivel
    showLevel.innerHTML = 'NIVEL 2';
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
    biologist.classList.remove("biologist-behind-curtain");
    biologist.classList.remove("biologist-hide");

    // Se ubica la profesora en la parte inferior del mapa
    biologist.style.bottom = "3rem";
    biologist.style.left = "100rem";

    // Se agrega el árbol grande
    bigTree.classList.remove("big-tree-behind-curtain");
    bigTree.classList.remove("big-tree-hide");

    // Se ubica el árbol grande
    bigTree.style.bottom = "3rem";
    bigTree.style.left = "120rem";

    // Se agrega el árbol pequeño
    smallTree.classList.remove("small-tree-behind-curtain");
    smallTree.classList.remove("small-tree-hide");

    // Se ubica el árbol grande
    smallTree.style.bottom = "3rem";
    smallTree.style.left = "130rem";

    // Se agrega el árbol mediano
    midTree.classList.remove("mid-tree-behind-curtain");
    midTree.classList.remove("mid-tree-hide");

    // Se ubica el árbol mediano
    midTree.style.bottom = "3rem";
    midTree.style.left = "135rem";

    // Se agrega a pablo pequeño al final del nivel
    pabloSmall.classList.remove("pablo-small-hide");
    pabloSmall.classList.remove("pablo-small-behind-curtain");

    // Se ubica a pablo small en la parte inferior al final del mapa
    pabloSmall.style.bottom = "3rem";
    pabloSmall.style.left = "240rem";

    // Se posicionan las alertas y se agregan los textos.
    alertBiologist2.innerHTML = "Pulsa <b>E</b> para hablar con el biólogo";
    alertBiologist2.style.left = "95rem";
    alertBiologist2.style.bottom = "18rem";

    alertPablo2.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo2.style.left = "235rem";
    alertPablo2.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertBiologist2);
    levels.appendChild(alertPablo2);

    // Se oculta el letrero después de haber mostrado todos los recursos del nivel.
    showLevel.classList.add('show-level-hide');
    await sleep(1000);
    showLevel.classList.add('show-level-behind-curtain');
}

let alreadyGoUp2 = false;
async function movePlayerUp2() {
    if (!alreadyGoUp2) {
        character.style.bottom = "15rem";
        alreadyGoUp2 = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp2 = false;
    }
    if (keyToRightPressed2) movePlayerRight2();
    // Verificar diálogos.
    verifyDialog2();
}

async function movePlayerDown2() {
    if (yPlayer2 > 3) yPlayer2 -= 2;
    character.style.bottom = `${yPlayer2}rem`;
    alreadyGoDown = true;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog2();
}

async function movePlayerLeft2() {
    if (xPlayer2 > 1) {
        xPlayer2--;
        character.style.left = `${xPlayer2}rem`;

        // Verificar diálogos.
        verifyDialog2();
    } else if (xBackground2 >= 1) {
        xBackground2 -= 0.005;
        moveLeftBackground2();
    }
}

async function movePlayerRight2() {
    if (xPlayer2 < 74) {
        xPlayer2++;
        character.style.left = `${xPlayer2}rem`;
        // Verificar diálogos.
        verifyDialog2();
    }
    else if (xBackground2 < 1.65) {
        xBackground2 += 0.005;
        moveRightBackground2();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog2() {
    // Se verifica para la teacher.
    let distanceTeacher = biologistX2 - xPlayer2;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con la profesora.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowTQ2 != 2) {
        alertBiologist2.classList.remove("alert-action-hide");
        alertBiologist2.classList.remove("alert-action-behind-curtain");
        talkTo2 = 0;
        return;
    } else {
        alertBiologist2.classList.add("alert-action-hide");
        alertBiologist2.classList.add("alert-action-behind-curtain");
        talkTo2 = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX2 - xPlayer2;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo2.classList.remove("alert-action-hide");
        alertPablo2.classList.remove("alert-action-behind-curtain");
        talkTo2 = 1;
        return;
    } else {
        alertPablo2.classList.add("alert-action-hide");
        alertPablo2.classList.add("alert-action-behind-curtain");
        talkTo2 = -1;
    }
}

function moveRightBackground2() {
    biologistX2 -= xBackground2;
    bigTreeX2 -= xBackground2;
    smallTreeX2 -= xBackground2;
    midTreeX2 -= xBackground2;
    pabloSmallX2 -= xBackground2;
    alertbiologistX2 -= xBackground2;
    alertPabloX2 -= xBackground2;

    biologist.style.left = `${biologistX2}rem`;
    bigTree.style.left = `${bigTreeX2}rem`;
    smallTree.style.left = `${smallTreeX2}rem`;
    midTree.style.left = `${midTreeX2}rem`;
    pabloSmall.style.left = `${pabloSmallX2}rem`;
    alertBiologist2.style.left = `${alertbiologistX2}rem`;
    alertPablo2.style.left = `${alertPabloX2}rem`;
}

function moveLeftBackground2() {
    biologistX2 += xBackground2;
    bigTreeX2 += xBackground2;
    smallTreeX2 += xBackground2;
    midTreeX2 += xBackground2;
    pabloSmallX2 += xBackground2;
    alertbiologistX2 += xBackground2;
    alertPabloX2 += xBackground2;

    biologist.style.left = `${biologistX2}rem`;
    bigTree.style.left = `${bigTreeX2}rem`;
    smallTree.style.left = `${smallTreeX2}rem`;
    midTree.style.left = `${midTreeX2}rem`;
    pabloSmall.style.left = `${pabloSmallX2}rem`;
    alertBiologist2.style.left = `${alertbiologistX2}rem`;
    alertPablo2.style.left = `${alertPabloX2}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel2Variables() {
    xPlayer2 = 1;
    yPlayer2 = 3;
    keyToUpPressed2 = false;
    keyToDownPressed2 = false;
    keyToLeftPressed2 = false;
    keyToRightPressed2 = false;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog22.
    dialog22.classList.add("dialog-hide");
    dialog22.classList.add("dialog-behind-curtain");
    dialog22.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(biologist222);
    levels.appendChild(pabloSmall22);
    levels.appendChild(dialog22);
}

// loadLevel2Variables();