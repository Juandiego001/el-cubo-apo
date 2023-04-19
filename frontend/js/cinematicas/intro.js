// Opacidad para los efectos de transición
let opa = 0;

// Personaje de pablo
const imgPablo = new Image();
imgPablo.src = "./frontend/imgs/personajes/pablo/1.svg";

// Diálogos
const imgD1 = new Image();
const imgD2 = new Image();
const imgD3 = new Image();
const imgD4 = new Image();
const imgD5 = new Image();
const imgD6 = new Image();
const imgD7 = new Image();
const imgD8 = new Image();
const imgD9 = new Image();
const imgD10 = new Image();
const imgD11 = new Image();
const imgD12 = new Image();
const imgD13 = new Image();
const imgD14 = new Image();
const imgD15 = new Image();
const imgD16 = new Image();
const imgD17 = new Image();
const imgD18 = new Image();

// Arreglo que contendrá todos los diálogos
let arrayImgsD = [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6, imgD7, imgD8, imgD9, imgD10, imgD11, imgD12, imgD13, imgD14, imgD15, imgD16, imgD17, imgD18];

// Asignamos cada imagen de dialogo a su dirección
for (let i = 0; i < 18; i++) {
    arrayImgsD[i].src = `./frontend/imgs/dialogos/intro/${(i+1)}.svg`;
}

let dIntro = 0;
// Para pasar los diálogos introductorios.
// Son en total 18 diálogos introductorios.
async function nextDialog() {
    if (!(dIntro == 18)) dIntro++;
}

async function prevDialog() {
    if (!(dIntro == 0)) dIntro--;
}

async function loadIntro() { 
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    if (dIntro >= 0 && dIntro < 18) {
        const imgD = arrayImgsD[dIntro];
        ctx.drawImage(imgD, 20, 20);
        ctx.drawImage(imgPablo, 350, 350);
    } else {
        // Cuando llegué aquí es porque habrá terminado de leer los diálogos.
        return;
    }

    requestAnimationFrame(loadIntro);
}

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 80);
    });
}