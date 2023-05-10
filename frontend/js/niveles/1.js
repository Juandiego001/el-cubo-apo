// Tamaño de mi pantalla:
// Ancho: 1304 aprox -> 1300, el 50% -> 650px
// Altura: 697 aprox -> 700, el 75% -> 525px

// Controlador de funciones o movimientos del nivel 1 (Controlador de teclas/W-A-S-D).
// mVC1 = 0: solo se pueden mover los diálogos del nivel 1 en la parte introductoria.
// mVC1 = 1: se puede mover el personaje.
// --------------- PODRIA SER PARA REFACTORIZAR --------------
// mvC1 = 2: mover los diálogos de la profesora.
// mvC1 = 3: mover las preguntas de la profesora.
// mvC1 = 4: mover los diálogos de pablo.
// --------------- PODRIA SER PARA REFACTORIZAR --------------
let mVC1 = 0;
let arrayMVC1 = [
    [prevDialog, nextDialog],
    [movePlayerUp, movePlayerDown, movePlayerLeft, movePlayerRight]
];

// Coordenadas del jugador para el nivel 1
let xPlayer1 = 1;
let yPlayer1 = 3;

// Coordenadas para mover el escenario
let xBackground = 1;

// Teclas presionadas
let keyToUpPressed = false;
let keyToDownPressed = false;
let keyToLeftPressed = false;
let keyToRightPressed = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El 1 al final indica el nivel 1.
// El 2 inidica que es una copia del personaje original.
let teacher21 = teacher.cloneNode(true);
let pabloSmall21 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog21 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 1 al final indica el nivel 1.
// Diálogos de la profesora.
let dialogsTeacher1 = [
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
let questions1 = -1;

// Preguntas que hará la profesora.
// El 1 indica el nivel 1.
let questionsTeacher1 = [
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
let answersTeacher1 = [
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
let allowTQ = -1;

// Diálogos de pablo.
let dialogsPablo1 = [
    "¿Y qué tal? ¿Cómo ha ido todo?",
    "La profesora me comentó que has estado contestado adecuadamente...",
    "Es hora de seguir aprendiendo...",
    "¿Estás listo para el siguiente nivel?"
];

// Arreglo que contiene todos los diálogos de ambos personajes
let allDialogs = [
    dialogsTeacher1,
    dialogsPablo1
];

// El 1 al final indica el nivel 1.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs1 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 1, indica el nivel 1.
let teacherX1 = 100;
let schoolX1 = 120;
let pabloSmallX1 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 1, indica el nivel 1.
let alertTeacher1 = alertAction.cloneNode(true);
let alertPablo1 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertTeacherX1 = 95;
let alertPabloX1 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con la profesora.
// 1 -> Se puede hablar con Pablo.
let talkTo = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con la profesora.
// 1 -> Ya habló con pablo.
let alreadyTalkTo = -1;

// Función para ocultar las respuestas.
function hideAnswers1() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs1() {
    dialog21.classList.add("dialog-hide");
    dialog21.classList.add("dialog-behind-curtain");
    dialogs1 = -1;
    hideAnswers1();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs1() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog21.style.top = "";
    dialog21.style.left = "";
    dialog21.style.transform = "";

    // Se muestra el diálogo.
    dialog21.classList.remove("dialog-hide");
    dialog21.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs1 = 0;
    dialog21.innerHTML = allDialogs[talkTo][0];
}

// Función para mostrar los diálogos de la profesora.
async function showTeacherDialogs1() {
    teacher21.style.left = "0.5rem";
    teacher21.style.top = "0.75rem";
    teacher21.classList.remove("teacher-hide");
    teacher21.classList.remove("teacher-behind-curtain");
    alreadyTalkTo = 0;
    showDialogs1();
}

// Función para ocultar los diálogos de la profesora.
async function hideTeacherDialogs1() {
    teacher21.classList.add("teacher-hide");
    teacher21.classList.add("teacher-behind-curtain");
    alreadyTalkTo = -1;
    hideDialogs1();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs1() {
    pabloSmall21.style.left = "0.5rem";
    pabloSmall21.style.top = "0.75rem";
    pabloSmall21.classList.remove("pablo-small-hide");
    pabloSmall21.classList.remove("pablo-small-behind-curtain");
    alreadyTalkTo = 1;
    showDialogs1();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs1() {
    pabloSmall21.classList.add("pablo-small-hide");
    pabloSmall21.classList.add("pablo-small-behind-curtain");
    alreadyTalkTo = -1;
    hideDialogs1();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterDialogs(){
    // Se ocultan los diálogos de la profesora.
    if (alreadyTalkTo == 0) { hideTeacherDialogs1(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadyTalkTo == 1) { hidePabloSmallDialogs1(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo == 0 && allowTQ != 2) { showTeacherDialogs1(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo == 1) { showPabloSmallDialogs1(); return; }
};

async function updateDialog() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowTQ == 0) return;

    // Si se ha equivado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowTQ == 1) {  hideTeacherDialogs1(); allowTQ = -1; return; }
    if (allowTQ == 2) {  hideTeacherDialogs1(); return; }

    let theDialogs = allDialogs[talkTo];
    dialog21.innerHTML = theDialogs[dialogs1];
    if (dialogs1 == (theDialogs.length - 1)) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showTeacherQuestions1(true);
        answer2.onclick = () => showTeacherQuestions1(false);

        // Se ocultan las respuestas 3 y 4.
        answer3.classList.add("answer-hide");
        answer4.classList.add("answer-hide");

        // Se muestra todo el contenedor de respuestas.
        answers.classList.remove("answers-hide");
        answers.classList.remove("answers-behind-curtain");

        // En caso de que el usuario se encuentre en un diálogo
        // diferente al último, se deben ocultar las respuestas.
    } else hideAnswers1();
}

async function verifyAnswer1(theQuestion, theAnswer, theAnswerElement) {
    // Se toma la pregunta y se verifica que la respuesta correcta
    // de la pregunta, efectivamente corresponde con la respuesta otorgada.
    // En caso tal de que la respuesta otorgada no corresponda con la respuesta
    // correcta, se debe indicar al usuario que se ha equivocado y que debe revisar
    // el libro e intentar nuevamente
    if (answersTeacher1[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);
        
        // Se muestra la siguiente pregunta.
        questions1++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions1 == questionsTeacher1.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog21.innerHTML = `<span>Creo que así está perfecto. Pablo te estará esperando para mostrarte a los demás del pueblo. ¡Adiós y gracias!</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowTQ = 2;
            // Se ocultan las respuestas.
            hideAnswers1();
            return;
        }

        dialog21.innerHTML = `<span>${questionsTeacher1[questions1]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersTeacher1[questions1]["r"][0];
        answer2.innerHTML = answersTeacher1[questions1]["r"][1];
        answer3.innerHTML = answersTeacher1[questions1]["r"][2];
        answer4.innerHTML = answersTeacher1[questions1]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer1(questions1, 0, answer1);
        answer2.onclick = () => verifyAnswer1(questions1, 1, answer2);
        answer3.onclick = () => verifyAnswer1(questions1, 2, answer3);
        answer4.onclick = () => verifyAnswer1(questions1, 3, answer4);

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

        dialog21.innerHTML = "Lo siento, creo que te has equivocado...";

        allowTQ = 1;
    }
}

async function showTeacherQuestions1(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions1 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowTQ = 0;
        dialog21.innerHTML = `<span>${questionsTeacher1[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersTeacher1[0]["r"][0];
        answer2.innerHTML = answersTeacher1[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersTeacher1[0]["r"][2];
        answer4.innerHTML = answersTeacher1[0]["r"][3];

        // Se asigna el método click para cada una de las variables
        answer1.onclick = () => verifyAnswer1(0, 0, answer1);
        answer2.onclick = () => verifyAnswer1(0, 1, answer2);
        answer3.onclick = () => verifyAnswer1(0, 2, answer3);
        answer4.onclick = () => verifyAnswer1(0, 3, answer4);
    } else {

    }
}

async function controlFuncs1(keyDown) {
    if (((keyDown != "w" && keyDown != "W") &&
        (keyDown != "a" && keyDown != "A") &&
        (keyDown != "s" && keyDown != "S") &&
        (keyDown != "d" && keyDown != "D")) &&
        keyDown != "ArrowUp" && keyDown != "ArrowLeft" && keyDown != "ArrowDown" && keyDown != "ArrowRight" &&
        (keyDown != "e" && keyDown != "E")) {
        return;
    }

    if (mVC1 == 0) {
        if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") arrayMVC1[0][0]();
        if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") arrayMVC1[0][1]();
        if (dIntro == 18) {
            mVC1 = 1;

            // Se ocultan pablo, diálogos y el fondo y se hace el efecto de fade in-out
            await fadeInOut();

            // Se posiciona al jugador y el contexto del juego en el primer nivel
            addFirstLevel();
        }
        return;
    }

    if (mVC1 == 1) {
        if (keyDown == "w" || keyDown == "W" || keyDown == "ArrowUp") {
            // Se verifica si se ha activado un diálogo.
            if (dialogs1 > -1) return;
            keyToUpPressed = true;
            if (keyToRightPressed) arrayMVC1[1][3]();
            else if (keyToLeftPressed) arrayMVC1[1][2]();
            arrayMVC1[1][0]();
        }

        if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
            // Se verifica si se ha activado un diálogo.
            if (dialogs1 > -1) return;
            keyToDownPressed = true;
            arrayMVC1[1][1]();
        }

        if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
            // Se verifica si se ha activado un diálogo.
            if (dialogs1 > -1) {
                if (dialogs1 > 0) dialogs1--;
                updateDialog();
                return;
            } else {
                keyToLeftPressed = true;
                if (keyToUpPressed) arrayMVC1[1][0]();
                arrayMVC1[1][2]();
            }
        }

        if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
            // Se verifica si se ha activado un diálogo.
            if (dialogs1 > -1) {
                let lengthDialogs =  allDialogs[talkTo].length;
                if (dialogs1 < (lengthDialogs - 1)) dialogs1++;
                updateDialog();
                return;
            } else {
                keyToRightPressed = true;
                if (keyToUpPressed) arrayMVC1[1][0]();
                arrayMVC1[1][3]();
            }
        }

        if ((keyDown == "e" || keyDown == "E")  && talkTo != -1) toggleCharacterDialogs();
        return;
    }
}

// Función para controlar las teclas presionadas.
function controlPressedKeys(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
function addFirstLevel() {
    // Se muestra el jugador
    character.classList.remove("character-behind-curtain");
    sleep(1000);
    character.classList.remove("character-hide");

    // Se ubica el jugador en la parte inferior del mapa
    character.style.bottom = "3rem";
    character.style.left = "1rem";

    // Se muestra el piso del juego
    floor.classList.remove("floor-behind-curtain");
    sleep(1000);
    floor.classList.remove("floor-hide");

    // Se agrega el personaje de la profesora
    teacher.classList.remove("teacher-behind-curtain");
    teacher.classList.remove("teacher-hide");

    // Se ubica la profesora en la parte inferior del mapa
    teacher.style.bottom = "3rem";
    teacher.style.left = "100rem";

    // Se agrega la construcción de la escuela
    school.classList.remove("school-behind-curtain");
    school.classList.remove("school-hide");

    // Se ubica la construcción de la escuela en la parte inferior del mapa
    school.style.bottom = "3rem";
    school.style.left = "120rem";

    // Se agrega a pablo pequeño al final del nivel
    pabloSmall.classList.remove("pablo-small-hide");
    pabloSmall.classList.remove("pablo-small-behind-curtain");

    // Se ubica a pablo small en la parte inferior al final del mapa
    pabloSmall.style.bottom = "3rem";
    pabloSmall.style.left = "240rem";

    // Se posicionan las alertas y se agregan los textos.
    alertTeacher1.innerHTML = "Pulsa <b>E</b> para hablar con la profesora";
    alertTeacher1.style.left = "95rem";
    alertTeacher1.style.bottom = "15rem";

    alertPablo1.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo1.style.left = "235rem";
    alertPablo1.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertTeacher1);
    levels.appendChild(alertPablo1);
}

let alreadyGoUp = false;
async function movePlayerUp() {
    if (!alreadyGoUp) {
        character.style.bottom = "15rem";
        alreadyGoUp = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp = false;
    }
    if (keyToRightPressed) movePlayerRight();
    // Verificar diálogos.
    verifyDialog();
}

async function movePlayerDown() {
    if (yPlayer1 > 3) yPlayer1 -= 2;
    character.style.bottom = `${yPlayer1}rem`;
    alreadyGoDown = true;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog();
}

async function movePlayerLeft() {
    if (xPlayer1 > 1) {
        xPlayer1--;
        character.style.left = `${xPlayer1}rem`;

        // Verificar diálogos.
        verifyDialog();
    } else if (xBackground >= 1) {
        xBackground -= 0.005;
        moveLeftBackground();
    }
}

async function movePlayerRight() {
    if (xPlayer1 < 74) {
        xPlayer1++;
        character.style.left = `${xPlayer1}rem`;
        // Verificar diálogos.
        verifyDialog();
    }
    else if (xBackground < 1.65) {
        xBackground += 0.005;
        moveRightBackground();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog() {
    // Se verifica para la teacher.
    let distanceTeacher = teacherX1 - xPlayer1;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con la profesora.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowTQ != 2) {
        alertTeacher1.classList.remove("alert-action-hide");
        alertTeacher1.classList.remove("alert-action-behind-curtain");
        talkTo = 0;
        return;
    } else {
        alertTeacher1.classList.add("alert-action-hide");
        alertTeacher1.classList.add("alert-action-behind-curtain");
        talkTo = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX1 - xPlayer1;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo1.classList.remove("alert-action-hide");
        alertPablo1.classList.remove("alert-action-behind-curtain");
        talkTo = 1;
        return;
    } else {
        alertPablo1.classList.add("alert-action-hide");
        alertPablo1.classList.add("alert-action-behind-curtain");
        talkTo = -1;
    }
}

function moveRightBackground() {
    teacherX1 -= xBackground;
    schoolX1 -= xBackground;
    pabloSmallX1 -= xBackground;
    alertTeacherX1 -= xBackground;
    alertPabloX1 -= xBackground;

    teacher.style.left = `${teacherX1}rem`;
    school.style.left = `${schoolX1}rem`;
    pabloSmall.style.left = `${pabloSmallX1}rem`;
    alertTeacher1.style.left = `${alertTeacherX1}rem`;
    alertPablo1.style.left = `${alertPabloX1}rem`;
}

function moveLeftBackground() {
    teacherX1 += xBackground;
    schoolX1 += xBackground;
    pabloSmallX1 += xBackground;
    alertTeacherX1 += xBackground;
    alertPabloX1 += xBackground;

    teacher.style.left = `${teacherX1}rem`;
    school.style.left = `${schoolX1}rem`;
    pabloSmall.style.left = `${pabloSmallX1}rem`;
    alertTeacher1.style.left = `${alertTeacherX1}rem`;
    alertPablo1.style.left = `${alertPabloX1}rem`;
}

// Función para hacer el efecto de desvanecerse.
async function fadeInOut() {
    return new Promise(async (res, rej) => {
        pablo.classList.add("pablo-hide");
        dialog.classList.add("dialog-hide");
        levels.classList.add(`levels-hide`);
        sleep(1000);
        pablo.classList.add("pablo-behind-curtain");
        dialog.classList.add("dialog-behind-curtain");
        levels.classList.add(`levels-behind-curtain`);

        levels.classList.remove("levels-behind-curtain");
        sleep(1000);
        levels.classList.remove(`levels-hide`);
        res();
    })
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel1Variables() {
    mVC1 = 0;
    xPlayer1 = 1;
    yPlayer1 = 3;
    keyToUpPressed = false;
    keyToDownPressed = false;
    keyToLeftPressed = false;
    keyToRightPressed = false;
    dIntro = 0;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog21.
    dialog21.classList.add("dialog-hide");
    dialog21.classList.add("dialog-behind-curtain");
    dialog21.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(teacher21);
    levels.appendChild(pabloSmall21);
    levels.appendChild(dialog21);

    // Se agregan las respuestas de sí/no para el teacher.
    // Se coloca un id para identificarlas y establecer los textos correspondientes.
    // answer11.id = "answer11";
    // answer21.id = "answer21";
    // answer31.id = "answer31";
    // answer41.id = "answer41";

    // answers1.appendChild(answer11);
    // answers1.appendChild(answer21);
    // answers1.appendChild(answer31);
    // answers1.appendChild(answer41);

    loadIntro();
}

loadLevel1Variables();