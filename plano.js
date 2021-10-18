import * as modulo from './utils.js';

const lienzoElement = document.getElementById('plano');
const lienzo = lienzoElement.getContext("2d");
lienzo.save();
lienzo.translate(400,400);

let coordX = -400;
let coordY = 400;
let radio = 1;
let color = '#00000088';

dibujarLayout(lienzo, coordX, coordY, radio, color);

const submit = document.getElementById('submit');
const coordInputs = document.getElementById("coordInputs");
const reiniciar = document.getElementById("reiniciar");


submit.addEventListener('click', submitClick);
coordInputs.addEventListener('keyup', enter);
reiniciar.addEventListener('click', () => {
    modulo.clearCanvas(-400,400,lienzoElement,lienzo);
    dibujarLayout(lienzo, coordX, coordY, radio, color);
});


//-------------

function submitClick () {
    const inputX = document.getElementById('coordInputX').value;
    const inputY = document.getElementById('coordInputY').value;
    let randomColor = modulo.getColor()
    if (inputX >= -400 && inputX <= 400 && inputY >= -400 && inputY <= 400) modulo.colocarPunto(lienzo,inputX,inputY,5,randomColor)
    else console.log('El valor ingresado debe de ser cualquier número entre -400 y 400');

};

function enter (tecla) {
    if(tecla.keyCode == 13) submit.click();
}

function dibujarLayout (lienzo, coordX, coordY, radio, color) {
    modulo.dibujarLinea(lienzo,400,0,-400,0);
    modulo.dibujarLinea(lienzo,0,400,0,-400);

    for (let i = 1; i <= 289; ++i) {
        modulo.colocarPunto(lienzo,coordX, coordY, radio, color);
        coordX += 50;
        if (i % 17 == 0) {
            coordY -= 50
            coordX = -400
        };
    };
};