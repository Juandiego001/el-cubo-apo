/*
    Variables globales para todos los demás archivos de JavaScript.
*/
// Inputs para iniciar sesión.
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// Contenedor general que almacena el formulario inicial.
let signUpInContainer = document.getElementById("signUpIn-container");

// Contenedor del formulario de registrarse.
let registerContainer = document.getElementById("register-container");

// Inputs para poder obtener los valores y realizar el registro.
// La R al final es para referirse a registro.
let inputNameR = document.getElementById("nameR");
let inputEmailR = document.getElementById("emailR");
let inputPasswordR = document.getElementById("passwordR");
let inputConfirmPasswordR = document.getElementById("confirmPasswordR");

// Input de los términos y condiciones.
let inputTermsR = document.getElementById("termsR");

// Contener que almacena las opciones del juego.
let gameOptionsContainer = document.getElementById("game-options-container");

// Contenedor de los módulos de historia.
let gameHistory = document.getElementById("game-history");

// Contenedor para la opción de multijugador.
let gameMultiplayer = document.getElementById("game-multiplayer");

// Contenedor de instrucciones.
let gameInstructions = document.getElementById("game-instructions");

// Contenedor para la opción de documentación.
let gameDocumentation = document.getElementById("game-documentation");

// Contenedor de configuración.
let gameConfig = document.getElementById("game-config");

// Contenedor de pausa.
let gameStop = document.getElementById("game-stop");

// Variable que contendrá todas las opciones.
let optionsGame = [gameHistory, gameMultiplayer, gameInstructions, gameDocumentation, gameConfig];

// Contenedor de diálogos.
let dialog = document.getElementById("dialog");

// Contenedor general de Pablo
let pablo = document.getElementById("pablo");

// Contenedor de pablo pequeño
let pabloSmall = document.getElementById("pablo-small");

// Contenedor del personaje del jugador
let character = document.getElementById("character");

// Contenedor del piso del juego
let floor = document.getElementById("floor");

// Contenedor general para mostrar cada uno de los niveles de historia.
let levels = document.getElementById("levels");

// Contenedor de escuela
let school = document.getElementById("school");

// Contenedor de biólogo
let biologist = document.getElementById("biologist");

// Contenedor de árbol grande
let bigTree = document.getElementById("big-tree");

// Contenedor de árbol mediano
let midTree = document.getElementById("mid-tree");

// Contenedor de árbol pequeño
let smallTree = document.getElementById("small-tree");

// Contenedor de personaje secundario
let teacher = document.getElementById("teacher");

// Alerta para indicarle al jugador qué hacer
let alertAction = document.getElementById("alert-action");

// Contenedor de respuestas para que el usuario digite sus respuestas
let answers = document.getElementById("answers");

// Cada botón de respuestas
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

// mVC: Control de movimiento (movement control)
// Sirve también de referencia para determinar el nivel que está jugando el jugador.
// mVC = -1: No se puede mover el personaje
// mVC = 0: Se pasa el control de movimiento al nivel 1.
// mVC = 1: Se pasa el control de movimiento al nivel 2.
// mVC = 2: Se pasa el control de movimiento al nivel 3.
// mVC = 3: Se pasa el control de movimiento al nivel 4.
// mVC = 4: Se pasa el control de movimiento al nivel 5.
// mVC = 5: Se pasa el control de movimiento al nivel 6.

let mVC = 0;

// Contenedor para las animaciones entre niveles
let between = document.getElementById("between");

// Contenedor para mostrar el nivel al que se accede
let showLevel = document.getElementById("show-level");

