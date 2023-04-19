/*
    VARIABLES GLOBALES PARA TODOS LOS DEMÁS.
*/
// Inputs para iniciar sesión
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

// Contenedor general que almacena
// el formulario inicial.
let signUpInContainer = document.getElementById("signUpIn-container");

// Contenedor del formulario de registrarse.
let registerContainer = document.getElementById("register-container");

// Inputs para poder obtener los valores y realizar el registro.
// La R al final es para referirse a registro.
let inputNameR = document.getElementById("nameR");
let inputEmailR = document.getElementById("emailR");
let inputPasswordR = document.getElementById("passwordR");
let inputConfirmPasswordR = document.getElementById("confirmPasswordR");

// Input de los términos y condiciones
let inputTermsR = document.getElementById("termsR");

// Contener que almacena
// las opciones del juego
let gameOptionsContainer = document.getElementById("game-options-container");

// Contenedor de los módulos de historia
let gameHistory = document.getElementById("game-history");

// Contenedor para la opción de multijugador
let gameMultiplayer = document.getElementById("game-multiplayer");

// Contenedor de instrucciones
let gameInstructions = document.getElementById("game-instructions");

// Contenedor para la opción de documentación
let gameDocumentation = document.getElementById("game-documentation");

// Contenedor de configuración
let gameConfig = document.getElementById("game-config");

// Variables del canvas
const canvas = document.getElementById("the-history");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 650;
const CANVAS_HEIGHT = canvas.height = 525;

// Contenedor de pausa
let gameStop = document.getElementById("game-stop");

// Variable que contendrá todas las opciones 
let optionsGame = [gameHistory, gameMultiplayer, gameInstructions, gameDocumentation, gameConfig];

// mVC: Control de movimiento (movement controll)
// Sirve también de referencia para determinar el nivel que está jugando el jugador.
// mVC = -1: No se puede mover el personaje
// mVC = 0: Se pasa el control de movimiento al nivel 1.
// mVC = 1: Se pasa el control de movimiento al nivel 2.
// mVC = 2: Se pasa el control de movimiento al nivel 3.
// mVC = 3: Se pasa el control de movimiento al nivel 4.
// mVC = 4: Se pasa el control de movimiento al nivel 5.
// mVC = 5: Se pasa el control de movimiento al nivel 6.

let mVC = 0;


