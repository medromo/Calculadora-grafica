import * as modulo from './utils.js';


const plano = document.getElementById('plano').getContext("2d");
plano.save();
plano.translate(400,400);

let coordX = -400;
let coordY = 400;
let radio = 1;
let color = "#000";

modulo.dibujarLinea(plano,400,0,-400,0);
modulo.dibujarLinea(plano,0,400,0,-400);

for (let i = 1; i <= 289; ++i) {
    modulo.colocarPunto(plano,coordX, coordY, radio, color);
    coordX += 50;
    if (i % 17 == 0) {
        coordY -= 50
        coordX = -400
    };
};

const submit = document.getElementById('submit');
const coordInputs = document.getElementById("coordInputs");
const reiniciar = document.getElementById("reiniciar");


submit.addEventListener('click', submitClick);
coordInputs.addEventListener('keyup', enter);
reiniciar.addEventListener('click', () => location.reload())


//-------------

function submitClick () {
    const inputX = document.getElementById('coordInputX').value;
    const inputY = document.getElementById('coordInputY').value;
    let randomColor = modulo.getColor()
    if (inputX >= -400 && inputX <= 400 && inputY >= -400 && inputY <= 400) modulo.colocarPunto(plano,inputX,inputY,5,randomColor)
    else console.log('El valor ingresado debe de ser cualquier número entre -400 y 400');

};

function enter (tecla) {
    if(tecla.keyCode == 13) submit.click();
}
