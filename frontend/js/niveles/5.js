// Coordenadas del jugador para el nivel 3
let xPlayer5 = 1;
let yPlayer5 = 3;

// Coordenadas para mover el escenario
let xBackground5 = 1;

// Teclas presionadas
let keyToUpPressed5 = false;
let keyToDownPressed5 = false;
let keyToLeftPressed5 = false;
let keyToRightPressed5 = false;

// Para mostrar al personaje en la parte superior de la pantalla y mostrar sus diálogos.
// El primer 3 inidica que es del nivel 3.
// El segundo 2 inidica que es una copia del personaje original.
let biomedic52 = biomedic.cloneNode(true);
let pabloSmall52 = pabloSmall.cloneNode(true);

// Para mostrar los diálogos en la parte superior de la pantalla para cada personaje.
// El 2 indica que es una copia del diálogo original.
let dialog52 = dialog.cloneNode(true);

// Diálogos para cada personaje.
// El 3 al final indica el nivel 3.
// Diálogos del doctor.
let dialogsBiomedic5 = [
    "<span>¡Ahh! ¡Que susto!</span>",
    "<span>Por un momento pensé que eras el Cubo APO...</span>",
    "<span>Ya estaba pensando en todos los buenos momentos que pasaron en mi corta vida...</span>",
    "<span>¿Cómo estás?</span>",
    "<span>Tú debes de ser la promesa que nos salvará...</span>",
    "<span>Quiero decirte que creo que eres muy valiente, ya que vas a enfrentarte a algo de lo que no sabes si regresarás o simplemente te hará desaparecer...</span>",
    "<span>Yo no podría hacer lo que tú porque soy un alma vieja como dicen...</span>",
    "<span>No tengo las agallas ni los conocimientos...</span>",
    "<span>Solo recuerdo algunos conceptos y experimentos que hacíamos con la POO...</span>",
    "<span>En cambio tú, con esta última lección quedarás fino.</span>",
    "<span>Conmigo aprenderás los conceptos de Polimorfismo y Sobrecarga.</span>",
    "<span>Si comprendiste bien los métodos...</span>",
    "<span>Estos conceptos no deben ser mucho problema...</span>",
    "<span>Lo que tienes que tener en cuenta es que la sobrecarga...</span>",
    "<span>Es cuando se habla de métodos con el mismo nombre que reciben diferentes entradas.</span>",
    "<span>Mientras que polimorfismo se relaciona con la herencia...</span>",
    "<span>Donde la clase hija tiene un método igual que el método padre, solo que...</span>",
    "<span>La clase hija lo adopta a sus características.</span>",
    "<span>Pero con el libro puedes profundizar mucho más...</span>",
    "<span>No te fíes completamente de lo que te estoy diciendo...</span>",
    "<span>¿Entonces qué? ¿Estás listo para algunas preguntas de polimorfismo y sobrecarga?</span>"
];

// Variable similar a dialogs43 para ir mostrando las preguntas.
let questions5 = -1;

// Preguntas que hará el doctor.
// El 3 indica el nivel 3.
let questionsBiomedic5 = [
    "1. ¿Qué es la sobrecarga de un método?",
    "2. ¿Qué es el polimorfismo de un método?",
    "3. ¿Qué diferencia entonces la sobrecarga del polimorfismo?",
    "4. De los siguientes métodos, ¿cuáles se podrían considerar como sobrecarga?",
    "5. De los siguientes métodos, ¿cuáles se podrían considerar como polimorfismo?",
    "6. De los siguientes métodos, ¿cuáles se podrían considerar como un método normal?",
    "7. De los siguientes métodos, ¿cuáles se podrían considerar como sobrecarga?"
];


// Respuestas para el doctor.
// El 3 indica el nivel 3.
let answersBiomedic5 = [
    // Respuestas de la pregunta 1.
    {
        r: [
            "Cuando el método de una clase hija tiene el mismo nombre que el método de una clase padre.",
            "Ninguna de las anteriores.",
            "Cuando un método tiene el mismo nombre pero sus entradas generan diferentes salidas.",
            "Ambas son correctas."
        ],
        c: 2
    },
    // Respuestas de la pregunta 2.
    {
        r: [
            "Cuando el método de una clase hija tiene el mismo nombre que el método de una clase padre.",
            "Ninguna de las anteriores.",
            "Cuando un método tiene el mismo nombre pero sus entradas generan diferentes salidas.",
            "Ambas son correctas."
        ],
        c: 0
    },
    // Respuestas de la pregunta 3.
    {
        r: [
            "La herencia y la abstracción.",
            "La herencia y las entradas enviadas respectivamente.",
            "Las entradas enviadas y la herencia respectivamente.",
            "No tienen diferencias."
        ],
        c: 2
    },
    // Respuestas de la pregunta 4.
    {
        r: [
            "El método de recepción de sentidos, ya que las entradas pueden ser distintas (visión, audición, olfato, gusto y tacto) y generar diferentes salidas.",
            "El método de transformación de energía de las células eucariotas y procariotas ya que ambas ajustan a sus necesidades el método heredado de la clase célula en general.",
            "El método de convertir los alimentos mediante la digestión mecánica.",
            "Ninguna de las anteriores."
        ],
        c: 0
    },
    // Respuestas de la pregunta 5.
    {
        r: [
            "El método de recepción de sentidos, ya que las entradas pueden ser distintas (visión, audición, olfato, gusto y tacto) y generar diferentes salidas.",
            "El método de transformación de energía de las células eucariotas y procariotas ya que ambas ajustan a sus necesidades el método heredado de la clase célula en general.",
            "El método de convertir los alimentos mediante la digestión mecánica.",
            "Ninguna de las anteriores."
        ],
        c: 1
    },
    // Respuestas de la pregunta 6.
    {
        r: [
            "El método de recepción de sentidos, ya que las entradas pueden ser distintas (visión, audición, olfato, gusto y tacto) y generar diferentes salidas.",
            "El método de transformación de energía de las células eucariotas y procariotas ya que ambas ajustan a sus necesidades el método heredado de la clase célula en general.",
            "El método de convertir los alimentos mediante la digestión mecánica.",
            "Ninguna de las anteriores."
        ],
        c: 2
    },
    // Respuestas de la pregunta 7.
    {
        r: [
            "Ninguna de las anteriores.",
            "El método de las funciones orgánicas, ya que cada órgano tiene una función pero cada uno realiza diferentes procesos.",
            "El método del intercambio gaseoso en los alveólos.",
            "El método de mover las articulaciones ya que dependiendo de la artículación se envían diferentes señales."
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
let allowQ5 = -1;

// Variable que permite pasar o no de nivel.
// -1 -> No se ha determinado.
// 0 -> Cuando ha contestado correctamente las preguntas y ha dado click en Sí.
// 1 -> Cuando no ha contestado correctamente las preguntas o ha dado click en No.
let allowPassLevel5 = -1;

// Diálogos de pablo.
let dialogsPablo5 = [
    "Bien amigo mio.",
    "Estás preparado para enfrentarte al Cubo APO.",
    "De acuerdo con lo que le entendí al biomédico...",
    "Los piramidales lo observaron a unos kilómetros no muy lejos de aquí...",
    "Al parecer ellos también tenían a alguien...",
    "Que sencillamente no soportó la presión de las preguntas y lo reducieron a un vértice...",
    "A partir de aquí estarás solo, yo te rodearé...",
    "Si encuentras al Cubo y superas la prueba, me encontrarás seguro...",
    "¡Suerte amigo mio y que la fuerza de los cuatro lados te acompañe!"
];

// Arreglo que contiene todos los diálogos de ambos personajes.
let allDialogs5 = [
    dialogsBiomedic5,
    dialogsPablo5
];

// El 3 al final indica el nivel 3.
// Variable para mover los diálogos.
// Si esta variable toma un valor mayor a -1, no se le debe permitir al jugador moverse,
// sino mover los diálogos.
let dialogs5 = -1;

// Para ir moviendo los objetos/personajes/construcciones del escenario.
// El 3, indica el nivel 3.
let biomedicX5 = 100;
let schoolX5 = 120;
let pabloSmallX5 = 240;

// Alertas que indican con la proximidad del jugador que es posible hablar con los personajes.
// El 3, indica el nivel 3.
let alertBiomedic5 = alertAction.cloneNode(true);
let alertPablo5 = alertAction.cloneNode(true);

// Coordenadas de las alertas (se deben mover con los personajes).
let alertBiomedicX5 = 95;
let alertPabloX5 = 235;

// Variable que controla el desplegar el diálogo de algún personaje.
// Esta variable se actualiza cuando el jugador está cerca de algún personaje
// con el que pueda interactuar y se muestra el mensaje de "Presiona E para hablar con..."
// -1 -> No se puede hablar con nadie.
// 0 -> Se puede hablar con el doctor.
// 1 -> Se puede hablar con Pablo.
let talkTo5 = -1;

// Variable para verificar que ya habló con un personaje.
// -1 -> No ha hablado con nadie.
// 0 -> Ya habló con el doctor.
// 1 -> Ya habló con pablo.
let alreadyTalkTo5 = -1;

// Función para ocultar las respuestas.
function hideAnswers5() {
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");
}

// Función para ocultar los diálogos.
async function hideDialogs5() {
    dialog52.classList.add("dialog-hide");
    dialog52.classList.add("dialog-behind-curtain");
    dialogs5 = -1;
    hideAnswers5();
}

// Para mostrar los diálogos (se empieza mostrando el primero).
async function showDialogs5() {
    // Se resetean algunos atributos del contenedor de diálogos.
    dialog52.style.top = "";
    dialog52.style.left = "";
    dialog52.style.transform = "";

    // Se muestra el diálogo.
    dialog52.classList.remove("dialog-hide");
    dialog52.classList.remove("dialog-behind-curtain");

    // Se coloca el diálogo en cuestión.
    dialogs5 = 0;
    dialog52.innerHTML = allDialogs5[talkTo5][0];
}

// Función para mostrar los diálogos del doctor.
async function showBiomedicDialogs5() {
    biomedic52.style.left = "0.5rem";
    biomedic52.style.top = "0.75rem";
    biomedic52.classList.remove("biomedic-hide");
    biomedic52.classList.remove("biomedic-behind-curtain");
    alreadyTalkTo5 = 0;
    showDialogs5();
}

// Función para ocultar los diálogos del doctor.
async function hideBiomedicDialogs5() {
    biomedic52.classList.add("biomedic-hide");
    biomedic52.classList.add("biomedic-behind-curtain");
    alreadyTalkTo5 = -1;
    allowQ5 = allowQ5 != 2 ? -1 : 2;
    hideDialogs5();
}

// Función para mostrar los diálogos de pablo small.
async function showPabloSmallDialogs5() {
    pabloSmall52.style.left = "0.5rem";
    pabloSmall52.style.top = "0.75rem";
    pabloSmall52.classList.remove("pablo-small-hide");
    pabloSmall52.classList.remove("pablo-small-behind-curtain");
    alreadyTalkTo5 = 1;
    showDialogs5();
}

// Función para ocultar los diálogos de pablo small.
async function hidePabloSmallDialogs5() {
    pabloSmall52.classList.add("pablo-small-hide");
    pabloSmall52.classList.add("pablo-small-behind-curtain");
    alreadyTalkTo5 = -1;
    hideDialogs5();
}

// Función para mostrar en la parte superior de la pantalla los personajes y sus diálogos.
// Esta función se activa al presionar la tecla E.
async function toggleCharacterDialogs5() {
    // Se ocultan los diálogos del biólogo.
    if (alreadyTalkTo5 == 0) { hideBiomedicDialogs5(); return; }

    // En caso de que presione E en la parte en la que ha querido pasar de nivel sin haber respondido a las preguntas del biólogo.
    if (talkTo5 == 1 && allowPassLevel5 == 1) { allowPassLevel5 = -1; dialogs5 = -1; hidePabloSmallDialogs5(); return; }

    // Se ocultan los diálogos de pablo pequeño.
    if (alreadyTalkTo5 == 1) { hidePabloSmallDialogs5(); return; }

    // Se coloca a la profesora en la parte superior del mapa para presentar los diálogos.
    // Tener en cuenta que si ya ha logrado responder todas las preguntas de la profesorá,
    // no podrá volver a hablar con ella.
    if (talkTo5 == 0 && allowQ5 != 2) { showBiomedicDialogs5(); return; }

    // Se coloca a pablo pequeño en la parte superior del mapa para presentar los diálogos.
    if (talkTo5 == 1 && allowQ5 != 3) { showPabloSmallDialogs5(); return; }
};

async function finishLevel5(goNextLevel) {
    if (!goNextLevel) {
        dialog52.innerHTML = "¡Ven a verme cuando desees pasar de nivel!";
        hideAnswers5();
        allowPassLevel5 = 1;
        dialogs5 = 0;
        return;
    }

    if (allowQ5 != 2) {
        dialog52.innerHTML = "Lo siento. Primero debes responder a las preguntas del biomédico.";
        hideAnswers5();
        allowPassLevel5 = 1;
        dialogs5 = 0;
        return;
    }

    if (goNextLevel && allowQ5 == 2) {
        // Se le pasa el control del movimiento al nivel 6.
        mVC = 5;

        // Se ocultan todos los recursos del nivel 5.
        hideFifthLevel();

        between.classList.remove('between-behind-curtain');
        between.classList.remove('between-hide');
        await sleep(5000);
        between.classList.add('between-hide');
        await sleep(1000);
        between.classList.add('between-behind-curtain');

        // Se ejecuta el proceso para mostrar el nivel 6.
        loadLevel6Variables();
    }
}

async function updateDialog5() {
    // Sí ya se admitió responder las preguntas, entonces
    // se debe esperar a que se respondan las preguntas.
    if (allowQ5 == 0) return;

    // Si se ha equivocado en la respuesta se ocultan los diálogos de la profesora y el personaje de la profesora.
    if (allowQ5 == 1) { hideBiomedicDialogs5(); allowQ5 = -1; return; }
    if (allowQ5 == 2 && talkTo5 == 0) { hideBiomedicDialogs5(); return; }

    // Si ha intentado pasar de nivel sin haber respondido antes a las preguntas de la profesora
    if (allowPassLevel5 == 1 && talkTo5 == 1) { hidePabloSmallDialogs5(); allowPassLevel5 = -1; return; }

    let theDialogs = allDialogs5[talkTo5];
    dialog52.innerHTML = theDialogs[dialogs5];
    if (dialogs5 != (theDialogs.length - 1)) { hideAnswers5(); return; }
    else if (talkTo5 == 0) {
        // Se debe permitir al jugador si decide continuar con las preguntas de la profesora o no.
        // Se modifican los textos de las respuestas 1 y 2.
        answer1.innerHTML = "Sí.";
        answer2.innerHTML = "No.";
        answer1.classList.remove("answer-hide");
        answer2.classList.remove("answer-hide");

        answer1.onclick = () => showBiomedicQuestions5(true);
        answer2.onclick = () => showBiomedicQuestions5(false);

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

        answer1.onclick = () => finishLevel5(true);
        answer2.onclick = () => finishLevel5(false);

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

async function verifyAnswer5(theQuestion, theAnswer, theAnswerElement) {
    // Se toma la pregunta y se verifica que la respuesta correcta
    // de la pregunta, efectivamente corresponde con la respuesta otorgada.
    // En caso tal de que la respuesta otorgada no corresponda con la respuesta
    // correcta, se debe indicar al usuario que se ha equivocado y que debe revisar
    // el libro e intentar nuevamente
    if (answersBiomedic5[theQuestion]["c"] == theAnswer) {
        // Se hace una animación indicando que la respuesta fue correcta
        theAnswerElement.classList.add("right-answer");
        await sleep(750);
        theAnswerElement.classList.remove("right-answer");
        await sleep(750);

        // Se muestra la siguiente pregunta.
        questions5++;

        // Se valida que al intentar mostrar la siguiente pregunta sea la última pregunta.
        // Si ha sido la última pregunta, debe mostrar un mensaje exitoso y actualizar 
        // una variable para que ya pueda continuar hacia el siguiente nivel.
        if (questions5 == questionsBiomedic5.length) {
            // Se coloca el mensaje final indicando que ya puede pasar de nivel.
            dialog52.innerHTML = `<span>Creo que así está perfecto. Suerte en tu aventura final compatriota, todos estamos contigo.</span>`;
            // Se asigna el valor correspondiente a la variable.
            allowQ5 = 2;
            // Se ocultan las respuestas.
            hideAnswers5();
            return;
        }

        dialog52.innerHTML = `<span>${questionsBiomedic5[questions5]}</span>`;

        // Se actualizan las respuestas.
        answer1.innerHTML = answersBiomedic5[questions5]["r"][0];
        answer2.innerHTML = answersBiomedic5[questions5]["r"][1];
        answer3.innerHTML = answersBiomedic5[questions5]["r"][2];
        answer4.innerHTML = answersBiomedic5[questions5]["r"][3];

        // Se actualizan los eventos onclick de las respuestas.
        answer1.onclick = () => verifyAnswer5(questions5, 0, answer1);
        answer2.onclick = () => verifyAnswer5(questions5, 1, answer2);
        answer3.onclick = () => verifyAnswer5(questions5, 2, answer3);
        answer4.onclick = () => verifyAnswer5(questions5, 3, answer4);

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

        dialog52.innerHTML = "Lo siento, creo que te has equivocado...";

        allowQ5 = 1;
    }
}

async function showBiomedicQuestions5(showThem) {
    if (showThem) {
        // Se actualiza la variable.
        questions5 = 0;

        // Se debe ocultar el diálogo previo a las preguntas de si se está listo para contestar las preguntas.
        allowQ5 = 0;
        dialog52.innerHTML = `<span>${questionsBiomedic5[0]}</span>`;

        // Se debe mostrar la primera pregunta junto con sus respuestas
        answer1.innerHTML = answersBiomedic5[0]["r"][0];
        answer2.innerHTML = answersBiomedic5[0]["r"][1];

        // Se muestran las respuestas 3 y 4
        answer3.classList.remove("answer-hide");
        answer4.classList.remove("answer-hide");
        answer3.innerHTML = answersBiomedic5[0]["r"][2];
        answer4.innerHTML = answersBiomedic5[0]["r"][3];

        // Se asigna el método click para cada una de las variables
        answer1.onclick = () => verifyAnswer5(0, 0, answer1);
        answer2.onclick = () => verifyAnswer5(0, 1, answer2);
        answer3.onclick = () => verifyAnswer5(0, 2, answer3);
        answer4.onclick = () => verifyAnswer5(0, 3, answer4);
    } else {

    }
}

async function controlFuncs5(keyDown) {
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
        if (dialogs5 > -1) return;
        keyToUpPressed5 = true;
        if (keyToRightPressed5) movePlayerRight5();
        else if (keyToLeftPressed5) movePlayerLeft5();
        movePlayerUp5();
    }

    if (keyDown == "s" || keyDown == "S" || keyDown == "ArrowDown") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs5 > -1) return;
        keyToDownPressed5 = true;
        movePlayerDown5();
    }

    if (keyDown == "a" || keyDown == "A" || keyDown == "ArrowLeft") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs5 > -1) {
            if (dialogs5 > 0) dialogs5--;
            updateDialog5();
            return;
        } else {
            keyToLeftPressed5 = true;
            if (keyToUpPressed5) movePlayerUp5();
            movePlayerLeft5();
        }
    }

    if (keyDown == "d" || keyDown == "D" || keyDown == "ArrowRight") {
        // Se verifica si se ha activado un diálogo.
        if (dialogs5 > -1) {
            let lengthDialogs = allDialogs5[talkTo5].length;
            if (dialogs5 < (lengthDialogs - 1)) dialogs5++;
            updateDialog5();
            return;
        } else {
            keyToRightPressed5 = true;
            if (keyToUpPressed5) movePlayerUp5();
            movePlayerRight5();
        }
    }

    if ((keyDown == "e" || keyDown == "E") && talkTo5 != -1) toggleCharacterDialogs5();
}

// Función para controlar las teclas presionadas.
function controlPressedKeys5(keyUp) {
    if (keyUp == "w" || keyUp == "W" || keyUp == "ArrowUp") keyToUpPressed5 = false;
    if (keyUp == "s" || keyUp == "S" || keyUp == "ArrowDown") keyToDownPressed5 = false;
    if (keyUp == "a" || keyUp == "A" || keyUp == "ArrowLeft") keyToLeftPressed5 = false;
    if (keyUp == "d" || keyUp == "D" || keyUp == "ArrowRight") keyToRightPressed5 = false;
}

// Función para agregar los primeros objetos y cuestiones del primer nivel.
async function addFifthLevel() {
    // Se muestra el letrero que indica el primer nivel
    showLevel.innerHTML = 'NIVEL 5';
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
    biomedic.classList.remove("biomedic-behind-curtain");
    biomedic.classList.remove("biomedic-hide");

    // Se ubica el ingeniero en la parte inferior del mapa
    biomedic.style.bottom = "3rem";
    biomedic.style.left = "100rem";

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
    alertBiomedic5.innerHTML = "Pulsa <b>E</b> para hablar con el biomédico";
    alertBiomedic5.style.left = "95rem";
    alertBiomedic5.style.bottom = "16rem";

    alertPablo5.innerHTML = "Pulsa <b>E</b> para hablar con pablo";
    alertPablo5.style.left = "235rem";
    alertPablo5.style.bottom = "15rem";

    // Se agregan los diálogos al nivel
    levels.appendChild(alertBiomedic5);
    levels.appendChild(alertPablo5);

    // Se oculta el letrero después de haber mostrado todos los recursos del nivel.
    showLevel.classList.add('show-level-hide');
    await sleep(1000);
    showLevel.classList.add('show-level-behind-curtain');
}

async function hideFifthLevel() {
    // Se oculta el personaje principal
    character.classList.add("character-behind-curtain");
    character.classList.add("character-hide");

    // Se oculta el personaje del ingeniero
    biomedic.classList.add("biomedic-behind-curtain");
    biomedic.classList.add("biomedic-hide");

    // Se oculta la construcción de la escuela
    school.classList.add("school-behind-curtain");
    school.classList.add("school-hide");

    // Se oculta al pablo pequeño de los diálogos
    pabloSmall52.classList.add("pablo-small-hide");
    pabloSmall52.classList.add("pablo-small-behind-curtain");

    // Se oculta al pablo que se encuentra en el nivel
    pabloSmall.classList.add("pablo-small-hide");
    pabloSmall.classList.add("pablo-small-behind-curtain");

    // Se ocultan los diálogos
    dialog52.classList.add("dialog-hide");
    dialog52.classList.add("dialog-behind-curtain");

    // Se ocultan las respuestas
    answer1.classList.add("answer-hide");
    answer2.classList.add("answer-hide");
    answer3.classList.add("answer-hide");
    answer4.classList.add("answer-hide");

    // Se remueven los diálogos del nivel
    levels.removeChild(alertBiomedic5);
    levels.removeChild(alertPablo5);
}

let alreadyGoUp5 = false;
async function movePlayerUp5() {
    if (!alreadyGoUp5) {
        character.style.bottom = "15rem";
        alreadyGoUp5 = true;
        await sleep(500);
        character.style.bottom = "3rem";
        await sleep(500);
        alreadyGoUp5 = false;
    }
    if (keyToRightPressed5) movePlayerRight5();
    // Verificar diálogos.
    verifyDialog5();
}

async function movePlayerDown5() {
    if (yPlayer5 > 3) yPlayer5 -= 2;
    character.style.bottom = `${yPlayer5}rem`;
    await sleep(500);
    // Verificar diálogos.
    verifyDialog5();
}

async function movePlayerLeft5() {
    if (xPlayer5 > 1) {
        xPlayer5--;
        character.style.left = `${xPlayer5}rem`;

        // Verificar diálogos.
        verifyDialog5();
    } else if (xBackground5 >= 1) {
        xBackground5 -= 0.005;
        moveLeftBackground5();
    }
}

async function movePlayerRight5() {
    if (xPlayer5 < 74) {
        xPlayer5++;
        character.style.left = `${xPlayer5}rem`;
        // Verificar diálogos.
        verifyDialog5();
    }
    else if (xBackground5 < 1.65) {
        xBackground5 += 0.005;
        moveRightBackground5();
    }
}

// Función para verificar si se puede mostrar el diálogo.
function verifyDialog5() {
    // Se verifica para el ingeniero.
    let distanceTeacher = biomedicX5 - xPlayer5;

    // Hay que tener en cuenta que si ya ha pasado el nivel, no se mostrará nuevamente el mensaje
    // para hablar con el ingeniero.
    if (distanceTeacher > -16 && distanceTeacher < 13 && allowQ5 != 2) {
        alertBiomedic5.classList.remove("alert-action-hide");
        alertBiomedic5.classList.remove("alert-action-behind-curtain");
        talkTo5 = 0;
        return;
    } else {
        alertBiomedic5.classList.add("alert-action-hide");
        alertBiomedic5.classList.add("alert-action-behind-curtain");
        talkTo5 = -1;
    }

    // Se verifica para pablo pequeño.
    let distancePablo = pabloSmallX5 - xPlayer5;
    if (distancePablo > -16 && distancePablo < 13) {
        alertPablo5.classList.remove("alert-action-hide");
        alertPablo5.classList.remove("alert-action-behind-curtain");
        talkTo5 = 1;
        return;
    } else {
        alertPablo5.classList.add("alert-action-hide");
        alertPablo5.classList.add("alert-action-behind-curtain");
        talkTo5 = -1;
    }
}

function moveRightBackground5() {
    biomedicX5 -= xBackground5;
    schoolX5 -= xBackground5;
    pabloSmallX5 -= xBackground5;
    alertBiomedicX5 -= xBackground5;
    alertPabloX5 -= xBackground5;

    biomedic.style.left = `${biomedicX5}rem`;
    school.style.left = `${schoolX5}rem`;
    pabloSmall.style.left = `${pabloSmallX5}rem`;
    alertBiomedic5.style.left = `${alertBiomedicX5}rem`;
    alertPablo5.style.left = `${alertPabloX5}rem`;
}

function moveLeftBackground5() {
    biomedicX5 += xBackground5;
    schoolX5 += xBackground5;
    pabloSmallX5 += xBackground5;
    alertBiomedicX5 += xBackground5;
    alertPabloX5 += xBackground5;

    biomedic.style.left = `${biomedicX5}rem`;
    school.style.left = `${schoolX5}rem`;
    pabloSmall.style.left = `${pabloSmallX5}rem`;
    alertBiomedic5.style.left = `${alertBiomedicX5}rem`;
    alertPablo5.style.left = `${alertPabloX5}rem`;
}

// Función para setiar por defecto los valores de las variables
// y agregar las variables correspondientes al background o escena general.
function loadLevel5Variables() {
    xPlayer5 = 1;
    yPlayer5 = 3;
    keyToUpPressed5 = false;
    keyToDownPressed5 = false;
    keyToLeftPressed5 = false;
    keyToRightPressed5 = false;

    xPlayer5 = 1;
    yPlayer5 = 3;
    xBackground5 = 1;
    questions5 = -1;
    allowQ5 = -1;
    allowPassLevel5 = -1;
    dialogs5 = -1;
    biomedicX5 = 100;
    schoolX5 = 120;
    pabloSmallX5 = 240;
    alertBiomedicX5 = 95;
    alertPabloX5 = 235;
    talkTo5 = -1;
    alreadyTalkTo5 = -1;

    // Se agregan personajes, objetos, escenarios, etc., al levels.
    // Primero se ocultan los dialog52.
    dialog52.classList.add("dialog-hide");
    dialog52.classList.add("dialog-behind-curtain");
    dialog52.classList.add("dialog-top");

    // Después si se agregan personajes, objetos, escenarios, etc., al levels.
    levels.appendChild(biomedic52);
    levels.appendChild(pabloSmall52);
    levels.appendChild(dialog52);

    // Se llama la función que genera el nivel 4.
    addFifthLevel();
}