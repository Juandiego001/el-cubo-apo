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
let engineer42 = engineer.cloneNode(true);
let pabloSmall42 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog42 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 3 al final indica el nivel 3.
// Diálogos del doctor.
let dialogsEngineer4 = [
    "<span>Cordial saludo ¿cómo está usted?</span>",
    "<span>Me presento, soy <b>el Ingeniero.</b></span>",
    "<span>Veo que ha estado a travesando múltiples desafíos de los ciudadanos del pueblo y me eso me parece genial.</span>",
    "<span>Este mundo de dos dimensiones no representa desafíos para nosotros.</span>",
    "<span>Solo nos brinda desolación...</span>",
    "<span>¿Sabía que cuando habitabamos en el mundo 3D habían más cúbicos?</span>",
    "<span>Durante el suceso de la transición...</span>",
    "<span>Todos nos replegamos y estuvimos escuchando durante un tiempo a los otros...</span>",
    "<span>Pero no podíamos verlos...</span>",
    "<span>En dos dimensiones no hay profundidad, por lo que, quienes antes del suceso estuviesen detrás de algo, han quedado en olvido apra siempre.</span>",
    "<span>Ya cuando construyo no tengo la misma ambición...</span>",
    "<span>Cuando estuvimos desarrollando ese dispositivo para el Cubo APO había percibido que mi vida cobraba sentido...</span>",
    "<span>Pero bueno, por eso estamos aquí. Tenemos que recuperarlo.</span>",
    "<span>En realidad no sabemos si fue un robo o fue decisión del objeto huir.</span>",
    "<span>Lo que sabemos es que tomó represalias y algunos - no solo nuestra raza - ha intentado recuperarlos.</span>",
    "<span>Pero eso te lo explicará Pablo después.</span>",
    "<span>En esta ocasión yo he venido a proponerte un nuevo reto.</span>",
    "<span>Pablo me dijo que estás listo para enfrentarte a la teoría de los métodos de la POO.</span>",
    "<span>Así que eso haremos...</span>",
    "<span>¿Estás listo?</span>"
];

// Variable similar a dialogs43 para ir mostrando las preguntas.
let questions4 = -1;

// Preguntas que hará el doctor.
// El 3 indica el nivel 3.
let questionsEngineer4 = [
    "1. ¿Qué es un método en POO?",
    "2. ¿Qué es un evento en POO?",
    "3. ¿Cuál es una de las diferencias entre un evento y un método en POO?",
    "4. ¿Cuáles son los métodos del corazón humano?",
    "5. ¿Cuáles son los métodos del sistema digestivo?",
    "6. ¿Cuáles son los métodos del páncreas?",
    "7. ¿Cuáles son los métodos del hipotálamo?"
];


// Respuestas para el doctor.
// El 3 indica el nivel 3.
let answersEngineer4 = [
    // Respuestas de la pregunta 1.
    {
        r: [
            "Ambas son correctas.",
            "Son sucesos que utiliza un objeto para iniciar un método de otro objeto.",
            "Son acciones que puede realizar un objeto.",
            "Ninguna de las anteriores."
        ],
        c: 2
    },
    // Respuestas de la pregunta 2.
    {
        r: [
            "Ambas son correctas.",
            "Son sucesos que utiliza un objeto para iniciar un método de otro objeto.",
            "Son acciones que puede realizar un objeto.",
            "Ninguna de las anteriores."
        ],
        c: 1
    },
    // Respuestas de la pregunta 3.
    {
        r: [
            "Todas las anteriores.",
            "El método solo tiene visibilidad privada, el evento solo tiene visibilidad pública.",
            "El método responde a una acción del usuario, el evento no.",
            "Un método puede ser llamado desde un proceso principal o por un evento mientras que el evento se ejecuta por acciones del usuario."
        ],
        c: 3
    },
    // Respuestas de la pregunta 4.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Digestión mecánica y digestión química.",
            "Segregación de gondatropinas.",
            "Sístole y Diástole."
        ],
        c: 3
    },
    // Respuestas de la pregunta 5.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Digestión mecánica y digestión química.",
            "Segregación de gondatropinas.",
            "Sístole y Diástole."
        ],
        c: 1
    },
    // Respuestas de la pregunta 6.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Sístole y Diástole.",
            "Segregación de gondatropinas.",
            "Digestión mecánica y digestión química."
        ],
        c: 0
    },
    // Respuestas de la pregunta 7.
    {
        r: [
            "Segregación de insulina y glucagón.",
            "Sístole y Diástole.",
            "Segregación de gondatropinas.",
            "Digestión mecánica y digestión química."
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
    "Quiero decirte que aún no sabemos si lo del Cubo APO fue un robo o no.",
    "Parece ser que no tendría sentido ya que no importa que planeta lo tenga...",
    "Lo importante es que esté activo...",
    "Por eso tanto cúbicos, como cilíndricos y piramidales han intentado recuperarlo...",
    "Pero bueno, esperemos que pronto podamos.",
    "Creo que por donde vamos estamos cerca, solo que me parece ser que empieza a ser muy peligroso...",
    "Próximamente estaremos con el biomédico que se ha instalado a solo unos kilómetros de donde se vio el Cubo por última vez...",
    "Estamos cerca, ¿estás listo para seguir?"
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
let schoolX4 = 120;
let pabloSmallX4 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 3, indica el nivel 3.
let alertEngineer4 = alertAction.cloneNode(true);
let alertPablo4 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertEngineerX4 = 95;
let alertPabloX4 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con el doctor.
// 1 -> Se puede hablar con Pablo.
let talkTo4 = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con el doctor.
// 1 -> Ya habló con pablo.
let alreadyTalkTo4 = -1;

// Función para ocultar las respuestas.
function hideAnswers4() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs4() {
    dialog42.classList.add("dialog-hide");
    dialog42.classList.add("dialog-behind-curtain");
    dialogs4 = -1;
    hideAnswers4();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs4() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog42.style.top = "";
    dialog42.style.left = "";
    dialog42.style.transform = "";

    // Se muestra el diálogo.
    dialog42.classList.remove("dialog-hide");
    dialog42.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs4 = 0;
    dialog42.innerHTML = allDialogs4[talkTo4][0];
}

// Función para mostrar los diálogos del doctor.
async function showEngineerDialogs4() {
    engineer42.style.left = "0.5rem";
    engineer42.style.top = "0.75rem";
    engineer42.classList.remove("engineer-hide");
    engineer42.classList.remove("engineer-behind-curtain");
    alreadyTalkTo4 = 0;
    showDialogs4();
}

// Función para ocultar los diálogos del doctor.
async function hideEngineerDialogs4() {
    engineer42.classList.add("engineer-hide");
    engineer42.classList.add("engineer-behind-curtain");
    alreadyTalkTo4 = -1;
    allowQ4 = allowQ4 != 2 ? -1 : 2;
    hideDialogs4();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs4() {
    pabloSmall42.style.left = "0.5rem";
    pabloSmall42.style.top = "0.75rem";
    pabloSmall42.classList.remove("pablo-small-hide");
    pabloSmall42.classList.remove("pablo-small-behind-curtain");
    alreadyTalkTo4 = 1;
    showDialogs4();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs4() {
    pabloSmall42.classList.add("pablo-small-hide");
    pabloSmall42.classList.add("pablo-small-behind-curtain");
    alreadyTalkTo4 = -1;
    hideDialogs4();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterDialogs4() {
    // Se ocultan los diálogos del biólogo.
    if (alreadyTalkTo4 == 0) { hideEngineerDialogs4(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas del biólogo.
    if (talkTo4 == 1 && allowPassLevel4 == 1) { allowPassLevel4 = -1; dialogs4 = -1; hidePabloSmallDialogs4(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadyTalkTo4 == 1) { hidePabloSmallDialogs4(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo4 == 0 && allowQ4 != 2) { showEngineerDialogs4(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo4 == 1 && allowQ4 != 3) { showPabloSmallDialogs4(); return; }
};

async function finishLevel4(goNextLevel) {
    if (!goNextLevel) {
        dialog42.innerHTML = "¡Ven a verme cuando desees pasar de nivel!";
        hideAnswers4();
        allowPassLevel4 = 1;
        dialogs4 = 0;
        return;
    }

    if (allowQ4 != 2) {
        dialog42.innerHTML = "Lo siento. Primero debes responder a las preguntas del ingeniero.";
        hideAnswers4();
        allowPassLevel4 = 1;
        dialogs4 = 0;
        return;
    }

    if (goNextLevel && allowQ4 == 2) {
        // Se le pasa el control del movimiento al nivel 5.
        mVC = 4;

        // Se ocultan todos los recursos del nivel 4.
        hideFourthLevel();

        between.classList.remove('between-behind-curtain');
        between.classList.remove('between-hide');
        await sleep(5000);
        between.classList.add('between-hide');
        await sleep(1000);
        between.classList.add('between-behind-curtain');

        // Se ejecuta el proceso para mostrar el nivel 5.
        loadLevel5Variables();
    }
}

async function updateDialog4() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowQ4 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowQ4 == 1) { hideEngineerDialogs4(); allowQ4 = -1; return; }
    if (allowQ4 == 2 && talkTo4 == 0) { hideEngineerDialogs4(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel4 == 1 && talkTo4 == 1) { hidePabloSmallDialogs4(); allowPassLevel4 = -1; return; }

    let theDialogs = allDialogs4[talkTo4];
    dialog42.innerHTML = theDialogs[dialogs4];
    if (dialogs4 != (theDialogs.length - 1)) { hideAnswers4(); return; }
    else if (talkTo4 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showEngineerQuestions4(true);
        answer2.onclick = () => showEngineerQuestions4(false);

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

        answer1.onclick = () => finishLevel4(true);
        answer2.onclick = () => finishLevel4(false);

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

async function verifyAnswer4(theQuestion, theAnswer, theAnswerElement) {
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
            hideAnswers4();
            return;
        }

        dialog42.innerHTML = `<span>${questionsEngineer4[questions4]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersEngineer4[questions4]["r"][0];
        answer2.innerHTML = answersEngineer4[questions4]["r"][1];
        answer3.innerHTML = answersEngineer4[questions4]["r"][2];
        answer4.innerHTML = answersEngineer4[questions4]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer4(questions4, 0, answer1);
        answer2.onclick = () => verifyAnswer4(questions4, 1, answer2);
        answer3.onclick = () => verifyAnswer4(questions4, 2, answer3);
        answer4.onclick = () => verifyAnswer4(questions4, 3, answer4);

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

async function showEngineerQuestions4(showThem) {
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
        answer1.onclick = () => verifyAnswer4(0, 0, answer1);
        answer2.onclick = () => verifyAnswer4(0, 1, answer2);
        answer3.onclick = () => verifyAnswer4(0, 2, answer3);
        answer4.onclick = () => verifyAnswer4(0, 3, answer4);
    } else {

    }
}

async function controlFuncs4(keyDown) {
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
        if (keyToRightPressed4) movePlayerRight4();
        else if (keyToLeftPressed4) movePlayerLeft4();
        movePlayerUp4();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) return;
        keyToDownPressed4 = true;
        movePlayerDown4();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) {
            if (dialogs4 > 0) dialogs4--;
            updateDialog4();
            return;
        } else {
            keyToLeftPressed4 = true;
            if (keyToUpPressed4) movePlayerUp4();
            movePlayerLeft4();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs4 > -1) {
            let lengthDialogs = allDialogs4[talkTo4].length;
            if (dialogs4 < (lengthDialogs - 1)) dialogs4++;
            updateDialog4();
            return;
        } else {
            keyToRightPressed4 = true;
            if (keyToUpPressed4) movePlayerUp4();
            movePlayerRight4();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo4 != -1) toggleCharacterDialogs4();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys4(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed4 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed4 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed4 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed4 = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
async function addFourthLevel() {
    // Se muestra el letrero que indica el primer nivel
    showLevel.innerHTML = 'NIVEL 4';
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
    engineer.classList.remove("engineer-behind-curtain");
    engineer.classList.remove("engineer-hide");

    // Se ubica el ingeniero en la parte inferior del mapa
    engineer.style.bottom = "3rem";
    engineer.style.left = "100rem";

    // Se agrega la construcción de la escuela
    school.classList.remove('school-behind-curtain');
    school.classList.remove('school-hide');

    // Se ubica la profesora en la parte inferior del mapa
    school.style.bottom = "3rem";
    school.style.left = "120rem";

    // Se agrega a pablo pequeño al final del nivel
    pabloSmall.classList.remove("pablo-small-hide");
    pabloSmall.classList.remove("pablo-small-behind-curtain");

    // Se ubica a pablo small en la parte inferior al final del mapa
    pabloSmall.style.bottom = "3rem";
    pabloSmall.style.left = "240rem";

    // Se posicionan las alertas y se agregan los textos.
    alertEngineer4.innerHTML = "Pulsa <b>E</b> para hablar con el ingeniero";
    alertEngineer4.style.left = "95rem";
    alertEngineer4.style.bottom = "16rem";

    alertPablo4.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo4.style.left = "235rem";
    alertPablo4.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertEngineer4);
    levels.appendChild(alertPablo4);

    // Se oculta el letrero después de haber mostrado todos los recursos del nivel.
    showLevel.classList.add('show-level-hide');
    await sleep(1000);
    showLevel.classList.add('show-level-behind-curtain');
}

async function hideFourthLevel() {
    // Se oculta el personaje principal
    character.classList.add("character-behind-curtain");
    character.classList.add("character-hide");

    // Se oculta el personaje del ingeniero
    engineer.classList.add("engineer-behind-curtain");
    engineer.classList.add("engineer-hide");

    // Se oculta la construcción de la escuela
    school.classList.add("school-behind-curtain");
    school.classList.add("school-hide");

    // Se oculta al pablo pequeño de los diálogos
    pabloSmall42.classList.add("pablo-small-hide");
    pabloSmall42.classList.add("pablo-small-behind-curtain");

    // Se oculta al pablo que se encuentra en el nivel
    pabloSmall.classList.add("pablo-small-hide");
    pabloSmall.classList.add("pablo-small-behind-curtain");

    // Se ocultan los diálogos
    dialog42.classList.add("dialog-hide");
    dialog42.classList.add("dialog-behind-curtain");

    // Se ocultan las respuestas
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");

    // Se remueven los diálogos del nivel
    levels.removeChild(alertEngineer4);
    levels.removeChild(alertPablo4);
}

let alreadyGoUp4 = false;
async function movePlayerUp4() {
    if (!alreadyGoUp4) {
        character.style.bottom = "15rem";
        alreadyGoUp4 = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp4 = false;
    }
    if (keyToRightPressed4) movePlayerRight4();
    // Verificar diálogos.
    verifyDialog4();
}

async function movePlayerDown4() {
    if (yPlayer4 > 3) yPlayer4 -= 2;
    character.style.bottom = `${yPlayer4}rem`;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog4();
}

async function movePlayerLeft4() {
    if (xPlayer4 > 1) {
        xPlayer4--;
        character.style.left = `${xPlayer4}rem`;

        // Verificar diálogos.
        verifyDialog4();
    } else if (xBackground4 >= 1) {
        xBackground4 -= 0.005;
        moveLeftBackground4();
    }
}

async function movePlayerRight4() {
    if (xPlayer4 < 74) {
        xPlayer4++;
        character.style.left = `${xPlayer4}rem`;
        // Verificar diálogos.
        verifyDialog4();
    }
    else if (xBackground4 < 1.65) {
        xBackground4 += 0.005;
        moveRightBackground4();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog4() {
    // Se verifica para el ingeniero.
    let distanceTeacher = engineerX4 - xPlayer4;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con el ingeniero.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowQ4 != 2) {
        alertEngineer4.classList.remove("alert-action-hide");
        alertEngineer4.classList.remove("alert-action-behind-curtain");
        talkTo4 = 0;
        return;
    } else {
        alertEngineer4.classList.add("alert-action-hide");
        alertEngineer4.classList.add("alert-action-behind-curtain");
        talkTo4 = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX4 - xPlayer4;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo4.classList.remove("alert-action-hide");
        alertPablo4.classList.remove("alert-action-behind-curtain");
        talkTo4 = 1;
        return;
    } else {
        alertPablo4.classList.add("alert-action-hide");
        alertPablo4.classList.add("alert-action-behind-curtain");
        talkTo4 = -1;
    }
}

function moveRightBackground4() {
    engineerX4 -= xBackground4;
    schoolX4 -= xBackground4;
    pabloSmallX4 -= xBackground4;
    alertEngineerX4 -= xBackground4;
    alertPabloX4 -= xBackground4;

    engineer.style.left = `${engineerX4}rem`;
    school.style.left = `${schoolX4}rem`;
    pabloSmall.style.left = `${pabloSmallX4}rem`;
    alertEngineer4.style.left = `${alertEngineerX4}rem`;
    alertPablo4.style.left = `${alertPabloX4}rem`;
}

function moveLeftBackground4() {
    engineerX4 += xBackground4;
    schoolX4 += xBackground4;
    pabloSmallX4 += xBackground4;
    alertEngineerX4 += xBackground4;
    alertPabloX4 += xBackground4;

    engineer.style.left = `${engineerX4}rem`;
    school.style.left = `${schoolX4}rem`;
    pabloSmall.style.left = `${pabloSmallX4}rem`;
    alertEngineer4.style.left = `${alertEngineerX4}rem`;
    alertPablo4.style.left = `${alertPabloX4}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel4Variables() {
    xPlayer4 = 1;
    yPlayer4 = 3;
    keyToUpPressed4 = false;
    keyToDownPressed4 = false;
    keyToLeftPressed4 = false;
    keyToRightPressed4 = false;

    xPlayer4 = 1;
    yPlayer4 = 3;
    xBackground4 = 1;
    questions4 = -1;
    allowQ4 = -1;
    allowPassLevel4 = -1;
    dialogs4 = -1;
    engineerX4 = 100;
    schoolX4 = 120;
    pabloSmallX4 = 240;
    alertEngineerX4 = 95;
    alertPabloX4 = 235;
    talkTo4 = -1;
    alreadyTalkTo4 = -1;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog42.
    dialog42.classList.add("dialog-hide");
    dialog42.classList.add("dialog-behind-curtain");
    dialog42.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(engineer42);
    levels.appendChild(pabloSmall42);
    levels.appendChild(dialog42);

    // Se llama la función que genera el nivel 4.
    addFourthLevel();
}