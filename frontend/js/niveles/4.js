// Coordenadas del jugador para el nivel 3
let xPlayer4 = 1;
let yPlayer4 = 3;

// Coordenadas para mover el escenario
let xBackground4 = 1;

// Teclas presionadas
let keyToUpPressed4 = false;
let keyToDownPressed4 = false;
let keyToLeftPressed4 = false;
let keyToRightPressed4 = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El primer 3 inidica que es del nivel 3.
// El segundo 2 inidica que es una copia del personaje original.
let engineer42 = doctor.cloneNode(true);
let pabloSmall42 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog42 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 3 al final indica el nivel 3.
// Diálogos del doctor.
let dialogsEngineer4 = [
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

// Variable similar a dialogs43 para ir mostrando las preguntas.
let questions4 = -1;

// Preguntas que hará el doctor.
// El 3 indica el nivel 3.
let questionsEngineer4 = [
    "1. ¿Qué es un objeto?",
    "2. ¿Cómo se puede categorizar un objeto?",
    "3. ¿Qué son los mensajes entre objetos?",
    "4. ¿Qué son las clases?",
    "5. Un Ferrari es un objeto de la clase...",
    "6. Un Jet es un objeto de la clase...",
    "7. Elefantes y delfines hacen parte respectivamente de las clases..."
];


// Respuestas para el doctor.
// El 3 indica el nivel 3.
let answersEngineer4 = [
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

// Variable para permitir mostrar las preguntas del doctor.
// Q: Questions.
// -1 -> No se permite mostrar las preguntas
// 0 -> Se permite mostrar las preguntas
// 1 -> Hubo un error en las respuestas
// 2 -> Ha terminado de responder todo correctamente.
let allowQ4 = -1;

// Variable que permite pasar o no de nivel.
// -1 -> No se ha determinado.
// 0 -> Cuando ha contestado correctamente las preguntas y ha dado click en Sí.
// 1 -> Cuando no ha contestado correctamente las preguntas o ha dado click en No.
let allowPassLevel4 = -1;

// Diálogos de pablo.
let dialogsPablo4 = [
    "¿Y qué tal? ¿Cómo ha ido todo?",
    "La profesora me comentó que has estado contestado adecuadamente...",
    "Es hora de seguir aprendiendo...",
    "¿Estás listo para el siguiente nivel?"
];

// Arreglo que contiene todos los diálogos de ambos personajes.
let allDialogs4 = [
    dialogsEngineer4,
    dialogsPablo4
];

// El 3 al final indica el nivel 3.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs4 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 3, indica el nivel 3.
let engineerX4 = 100;
let hospitalX3 = 120;
let pabloSmallX3 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 3, indica el nivel 3.
let alertDoctor3 = alertAction.cloneNode(true);
let alertPablo3 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertengineerX4 = 95;
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
async function hidedialogs4() {
    dialog42.classList.add("dialog-hide");
    dialog42.classList.add("dialog-behind-curtain");
    dialogs4 = -1;
    hideAnswers3();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showdialogs4() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog42.style.top = "";
    dialog42.style.left = "";
    dialog42.style.transform = "";

    // Se muestra el diálogo.
    dialog42.classList.remove("dialog-hide");
    dialog42.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs4 = 0;
    dialog42.innerHTML = allDialogs4[talkTo3][0];
}

// Función para mostrar los diálogos del doctor.
async function showDoctordialogs4() {
    engineer42.style.left = "0.5rem";
    engineer42.style.top = "0.75rem";
    engineer42.classList.remove("doctor-hide");
    engineer42.classList.remove("doctor-behind-curtain");
    alreadytalkTo3 = 0;
    showdialogs4();
}

// Función para ocultar los diálogos del doctor.
async function hideDoctordialogs4() {
    engineer42.classList.add("doctor-hide");
    engineer42.classList.add("doctor-behind-curtain");
    alreadytalkTo3 = -1;
    hidedialogs4();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs4() {
    pabloSmall42.style.left = "0.5rem";
    pabloSmall42.style.top = "0.75rem";
    pabloSmall42.classList.remove("pablo-small-hide");
    pabloSmall42.classList.remove("pablo-small-behind-curtain");
    alreadytalkTo3 = 1;
    showdialogs4();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs4() {
    pabloSmall42.classList.add("pablo-small-hide");
    pabloSmall42.classList.add("pablo-small-behind-curtain");
    alreadytalkTo3 = -1;
    hidedialogs4();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterdialogs4() {
    // Se ocultan los diálogos del biólogo.
    if (alreadytalkTo3 == 0) { hideDoctordialogs4(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas del biólogo.
    if (talkTo3 == 1 && allowPassLevel4 == 1) { allowPassLevel4 = -1; dialogs4 = -1; hidePabloSmallDialogs4(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadytalkTo3 == 1) { hidePabloSmallDialogs4(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo3 == 0 && allowQ4 != 2) { showDoctordialogs4(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo3 == 1 && allowQ4 != 3) { showPabloSmallDialogs4(); return; }
};

async function finishLevel3(goNextLevel) {
    if (!goNextLevel) {
        dialog42.innerHTML = "¡Ven a verme cuando desees pasar de nivel!";
        hideAnswers3();
        allowPassLevel4 = 1;
        dialogs4 = 0;
        return;
    }

    if (allowQ4 != 2) {
        dialog42.innerHTML = "Lo siento. Primero debes responder a las preguntas de la profesora.";
        hideAnswers3();
        allowPassLevel4 = 1;
        dialogs4 = 0;
        return;
    }

    if (goNextLevel && allowQ4 == 2) {
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
        addFourthLevel();
    }
}

async function updateDialog3() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowQ4 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowQ4 == 1) { hideDoctordialogs4(); allowQ4 = -1; return; }
    if (allowQ4 == 2 && talkTo3 == 0) { hideDoctordialogs4(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel4 == 1 && talkTo3 == 1) { hidePabloSmallDialogs4(); allowPassLevel4 = -1; return; }

    let theDialogs = allDialogs4[talkTo3];
    dialog42.innerHTML = theDialogs[dialogs4];
    if (dialogs4 != (theDialogs.length - 1)) { hideAnswers3(); return; }
    else if (talkTo3 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showDoctorquestions4(true);
        answer2.onclick = () => showDoctorquestions4(false);

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
    if (answersEngineer4[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);

        // Se muestra la siguiente pregunta.
        questions4++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions4 == questionsEngineer4.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog42.innerHTML = `<span>Creo que así está perfecto. Pablo te estará esperando para mostrarte a los demás del pueblo. ¡Adiós y gracias!</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowQ4 = 2;
            // Se ocultan las respuestas.
            hideAnswers3();
            return;
        }

        dialog42.innerHTML = `<span>${questionsEngineer4[questions4]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersEngineer4[questions4]["r"][0];
        answer2.innerHTML = answersEngineer4[questions4]["r"][1];
        answer3.innerHTML = answersEngineer4[questions4]["r"][2];
        answer4.innerHTML = answersEngineer4[questions4]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer3(questions4, 0, answer1);
        answer2.onclick = () => verifyAnswer3(questions4, 1, answer2);
        answer3.onclick = () => verifyAnswer3(questions4, 2, answer3);
        answer4.onclick = () => verifyAnswer3(questions4, 3, answer4);

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

        dialog42.innerHTML = "Lo siento, creo que te has equivocado...";

        allowQ4 = 1;
    }
}

async function showDoctorquestions4(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions4 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowQ4 = 0;
        dialog42.innerHTML = `<span>${questionsEngineer4[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersEngineer4[0]["r"][0];
        answer2.innerHTML = answersEngineer4[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersEngineer4[0]["r"][2];
        answer4.innerHTML = answersEngineer4[0]["r"][3];

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
        if (dialogs4 > -1) return;
        keyToUpPressed4 = true;
        if (keyToRightPressed4) movePlayerRight3();
        else if (keyToLeftPressed4) movePlayerLeft3();
        movePlayerUp3();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) return;
        keyToDownPressed4 = true;
        movePlayerDown3();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) {
            if (dialogs4 > 0) dialogs4--;
            updateDialog3();
            return;
        } else {
            keyToLeftPressed4 = true;
            if (keyToUpPressed4) movePlayerUp3();
            movePlayerLeft3();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) {
            let lengthDialogs = allDialogs4[talkTo3].length;
            if (dialogs4 < (lengthDialogs - 1)) dialogs4++;
            updateDialog3();
            return;
        } else {
            keyToRightPressed4 = true;
            if (keyToUpPressed4) movePlayerUp3();
            movePlayerRight3();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo3 != -1) toggleCharacterdialogs4();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys3(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed4 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed4 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed4 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed4 = false;
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

    // Se oculta el personaje de la profesora
    teacher.classList.add("teacher-behind-curtain");
    teacher.classList.add("teacher-hide");

    // Se oculta la construcción de la escuela
    school.classList.add("school-behind-curtain");
    school.classList.add("school-hide");

    // Se oculta al pablo pequeño de los diálogos
    pabloSmall21.classList.add("pablo-small-hide");
    pabloSmall21.classList.add("pablo-small-behind-curtain");

    // Se oculta al pablo que se encuentra en el nivel
    pabloSmall.classList.add("pablo-small-hide");
    pabloSmall.classList.add("pablo-small-behind-curtain");

    // Se ocultan los diálogos
    dialog21.classList.add("dialog-hide");
    dialog21.classList.add("dialog-behind-curtain");

    // Se ocultan las respuestas
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");

    // Se remueven los diálogos del nivel
    levels.removeChild(alertTeacher1);
    levels.removeChild(alertPablo1);
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
    if (keyToRightPressed4) movePlayerRight3();
    // Verificar diálogos.
    verifyDialog3();
}

async function movePlayerDown3() {
    if (yPlayer4 > 3) yPlayer4 -= 2;
    character.style.bottom = `${yPlayer4}rem`;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog3();
}

async function movePlayerLeft3() {
    if (xPlayer4 > 1) {
        xPlayer4--;
        character.style.left = `${xPlayer4}rem`;

        // Verificar diálogos.
        verifyDialog3();
    } else if (xBackground4 >= 1) {
        xBackground4 -= 0.005;
        moveLeftBackground3();
    }
}

async function movePlayerRight3() {
    if (xPlayer4 < 74) {
        xPlayer4++;
        character.style.left = `${xPlayer4}rem`;
        // Verificar diálogos.
        verifyDialog3();
    }
    else if (xBackground4 < 1.65) {
        xBackground4 += 0.005;
        moveRightBackground3();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog3() {
    // Se verifica para la teacher.
    let distanceTeacher = engineerX4 - xPlayer4;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con la profesora.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowQ4 != 2) {
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
    let distancePablo = pabloSmallX3 - xPlayer4;
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
    engineerX4 -= xBackground4;
    hospitalX3 -= xBackground4;
    pabloSmallX3 -= xBackground4;
    alertengineerX4 -= xBackground4;
    alertPabloX3 -= xBackground4;

    doctor.style.left = `${engineerX4}rem`;
    hospital.style.left = `${hospitalX3}rem`;
    pabloSmall.style.left = `${pabloSmallX3}rem`;
    alertDoctor3.style.left = `${alertengineerX4}rem`;
    alertPablo3.style.left = `${alertPabloX3}rem`;
}

function moveLeftBackground3() {
    engineerX4 += xBackground4;
    hospitalX3 += xBackground4;
    pabloSmallX3 += xBackground4;
    alertengineerX4 += xBackground4;
    alertPabloX3 += xBackground4;

    doctor.style.left = `${engineerX4}rem`;
    hospital.style.left = `${hospitalX3}rem`;
    pabloSmall.style.left = `${pabloSmallX3}rem`;
    alertDoctor3.style.left = `${alertengineerX4}rem`;
    alertPablo3.style.left = `${alertPabloX3}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel3Variables() {
    xPlayer4 = 1;
    yPlayer4 = 3;
    keyToUpPressed4 = false;
    keyToDownPressed4 = false;
    keyToLeftPressed4 = false;
    keyToRightPressed4 = false;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog42.
    dialog42.classList.add("dialog-hide");
    dialog42.classList.add("dialog-behind-curtain");
    dialog42.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(engineer42);
    levels.appendChild(pabloSmall42);
    levels.appendChild(dialog42);

    // Se llama la función que genera el nivel 3.
    addThirdLevel();
}