// Opacidad para los efectos de transición
let opa = 0;

let introDialogs = [
    "¡Bienvenida joven alma a nuestro mundo!",
    "Mi nombre es <b>Pablo</b> y pertenezco a los ancianos de este pueblo que ves a tu alrededor...",
    "Sé que es confuso para ti, pero generalmente, cuando un ser de aquí muere...",
    "Vuelve a nacer sin conocimiento de quién fue o qué hacía en esta vida...",
    "Por eso no recuerdas que fuiste uno de los <b>cúbicos</b> (nuestra raza)...",
    "Más conflictivo de todo el pueblo...",
    "Pero bueno, ya eres un ser nuevo y no tenemos por qué recordar las cosas malas del pasado...",
    "El motivo por el que estoy aquí es para guiarte a través de este mundo y poder solucionar un problema...",
    "Que la ausencia de nuestros científicos nos han dejado...",
    "El conocimiento de nuestro pueblo es lo más importante que tenemos. De eso te contaré más adelante...",
    "Ahora, necesito que aprendas cómo moverte...",
    "Pulsa las teclas <b>W-A-S-D</b> o utiliza las <b>flechas</b> para moverte.",
    "Tendrás que interactuar con los cúbicos del pueblo y solucionar sus problemas. Para esto tendrás que leer los documentos que te facilite...",
    "Te entregaré dos documentos iniciales con los que podrás ayudar al primer ciudadano...",
    "Estos documentos podrás visualizarlos pulsando la tecla <b>E</b>.",
    "Así que bueno, ya entiendes un poco el contexto de la situación. Espero me hayas comprendido y que podamos juntos solucionar los problemas de este pueblo...",
    "Recuerda: el conocimiento es lo más importante...",
    "¡Suerte joven alma!"
];

let dIntro = 0;
// Para pasar los diálogos introductorios.
// Son en total 18 diálogos introductorios.
async function nextDialog() {
    dIntro++;
    if (dIntro != 18) {
        let theDialog = introDialogs[dIntro];
        dialog.innerHTML = `<span>${theDialog}</span>`;
    }
}

async function prevDialog() {
    if (!(dIntro == 0)) dIntro--;
    let theDialog = introDialogs[dIntro];
    dialog.innerHTML = `<span>${theDialog}</span>`;
}

// Para cargar todos los elementos iniciales de la cinemática inicial
async function loadIntro() { 
    let theDialog = introDialogs[dIntro];
    dialog.innerHTML = `<span>${theDialog}</span>`;
}