// Tamaño de mi pantalla:
// Ancho: 1304 aprox -> 1300, el 50% -> 650px
// Altura: 697 aprox -> 700, el 75% -> 525px

// Controlador de funciones o movimientos del nivel 1.
// mVC1 = 0: solo se pueden mover los diálogos del nivel 1 en la parte introductoria.
// mVC1 = 1: se puede mover el personaje.
let mVC1 = 0;
let arrayMVC1 = [
    [prevDialog, nextDialog], 
    [movePlayerUp, movePlayerDown, movePlayerLeft, movePlayerRight]
];

// Coordenadas del jugador
let xPlayer = 20;
let yPlayer = CANVAS_HEIGHT - 95;

// Teclas presionadas
let keyToUpPressed = false;
let keyToDownPressed = false;
let keyToLeftPressed = false;
let keyToRightPressed = false;

async function controlFuncs1(keyDown) {
    if ((keyDown != "w" && keyDown != "a" && keyDown != "s" && keyDown != "d") &&
        keyDown != "ArrowUp" && keyDown != "ArrowLeft" && keyDown != "ArrowDown" && keyDown != "ArrowRight" ) {
        return;
    }
    
    if (mVC1 == 0) {
        if (keyDown == "a" || keyDown == "ArrowLeft") arrayMVC1[0][0]();
        if (keyDown == "d" || keyDown == "ArrowRight") arrayMVC1[0][1]();
        if (dIntro == 18) {
            mVC1 = 1;
            
            // Se hace el efecto para ocultar el canvas y mostrar 
            // al jugador para que comience el juego.
            await fadeInOut();

            // Se posiciona al jugador y el contexto del juego en el primer nivel
            addFirstLevel();
        }
        return;
    }

    if (mVC1 == 1) {
        if (keyDown == "w" || keyDown == "ArrowUp") {
            keyToUpPressed = true;
            if (keyToRightPressed) arrayMVC1[1][3]();
            else if (keyToLeftPressed) arrayMVC1[1][2]();
            arrayMVC1[1][0]();
        }

        if (keyDown == "s" || keyDown == "ArrowDown") {
            keyToDownPressed = true;
            arrayMVC1[1][1]();
        }

        if (keyDown == "a" || keyDown == "ArrowLeft") {
            keyToLeftPressed = true;
            if (keyToUpPressed) arrayMVC1[1][0]();
            arrayMVC1[1][2]();
        }

        if (keyDown == "d" || keyDown == "ArrowRight") {
            keyToRightPressed = true;
            if (keyToUpPressed) arrayMVC1[1][0]();
            arrayMVC1[1][3]();
        }

        return;
    }
}

// Función para controlar las teclas presionadas.
function controlPressedKeys(keyUp) {
    if (keyUp == "w" || keyUp == "ArrowUp") keyToUpPressed = false;
    if (keyUp == "s" || keyUp == "ArrowDown") keyToDownPressed = false;
    if (keyUp == "a" || keyUp == "ArrowLeft") keyToLeftPressed = false;
    if (keyUp == "d" || keyUp == "ArrowRight") keyToRightPressed = false;
}


// Imágenes contempladas en este nivel
// Jugador principal
const imgPlayer = new Image();
imgPlayer.src = "./frontend/imgs/personajes/player/1.svg";

// Piso del juego
const imgFloor = new Image();
imgFloor.src = "./frontend/imgs/objetos/floor/1.jpg";

// Escenario o nubes de fondo del juego
const imgClouds = new Image();
imgClouds.src = "./frontend/imgs/escenarios/fondo-de-cielo.jpg";

// Función para agregar los primeros objetos y cuestiones del primer nivel.
function addFirstLevel() {
    if (mVC == -1) {
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        return;
    }
    // Se agrega la imagen de fondo del escenario
    ctx.drawImage(imgClouds, 0, 0);

    const WIDTH_IMG_PLAYER = imgPlayer.width;
    const HEIGHT_IMG_PLAYER = imgPlayer.height;
    
    // Se agrega la imagen del cuadrado o del jugador en la parte inferior del juego.
    ctx.drawImage(imgPlayer, xPlayer, yPlayer, 90, 75);

    // Se agrega la imagen del cuadrado o del jugador en la parte inferior del juego.
    for (let i = 0; i < 17; i++){
        ctx.drawImage(imgFloor, 40*i, CANVAS_HEIGHT - 20, 40, 40);
    }

    // Agregar gravedad a los saltos
    if (yPlayer < CANVAS_HEIGHT - 95) yPlayer += 0.5;

    requestAnimationFrame(addFirstLevel);
}

async function movePlayerUp() {
    if (yPlayer == CANVAS_HEIGHT - 95) yPlayer -= 14;
}

async function movePlayerDown() {
    if (yPlayer <= (CANVAS_HEIGHT - 14)) yPlayer += 14;
}

async function movePlayerLeft() {
    if (xPlayer > 0) xPlayer -= 15;
}

async function movePlayerRight() {
    if (xPlayer < CANVAS_WIDTH - 75) xPlayer += 15;
}

// Función para hacer el efecto de desvanecerse.
async function fadeInOut() {
    return new Promise(async (res, rej) => {
        canvas.classList.add(`the-history-hide`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        canvas.classList.add(`the-history-behind-curtain`);

        canvas.classList.remove("the-history-behind-curtain");
        await new Promise(resolve => setTimeout(resolve, 1000));
        canvas.classList.remove(`the-history-hide`);
        res();
    })
}

// Función para setiar por defecto los valores de las variables
function loadLevel1Variables() {
    mVC1 = 0;
    xPlayer = 20;
    yPlayer = CANVAS_HEIGHT - 95;
    keyToUpPressed = false;
    keyToDownPressed = false;
    keyToLeftPressed = false;
    keyToRightPressed = false;
    dIntro = 0;
    loadIntro();
}

loadLevel1Variables();