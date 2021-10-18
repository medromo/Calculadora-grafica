import * as modulo from './utils.js';

const lienzoElement = document.getElementById('barras');
const lienzo = lienzoElement.getContext('2d');
lienzo.save();
lienzo.translate(0,800);

limpiarLienzo();

const form = document.getElementById('wrapper').addEventListener('keyup', graficar)

document.getElementById('reset').addEventListener('click', () => {limpiarLienzo(); resetValues();});

const inputColores = document.getElementsByClassName('colores');

Array.from(inputColores).forEach(element => {
    element.addEventListener('change',graficar);
});


//-------

function graficar () {

    const valores = document.getElementsByClassName('valores');
    const warning = document.getElementById('warning');
    warning.style.display = 'none';

    Array.from(valores).forEach(valor => {
        let min;
        
        if (valor.className.includes('Y')) {
            min = 0;
        } else {
            min = 1;
        };

        if (valor.value < min && valor.value != "") {
            valor.value = min;
            warning.style.display = 'flex';
        } else if (valor.value > 15) {
            valor.value = 15;
            warning.style.display = 'flex';
        };
    });

    const x1 = document.getElementById('barra1x').value;
    const y1 = document.getElementById('barra1y').value;
    const color1 = document.getElementById('color1').value;
    const x2 = document.getElementById('barra2x').value;
    const y2 = document.getElementById('barra2y').value;
    const color2 = document.getElementById('color2').value;
    const x3 = document.getElementById('barra3x').value;
    const y3 = document.getElementById('barra3y').value;
    const color3 = document.getElementById('color3').value;
    const x4 = document.getElementById('barra4x').value;
    const y4 = document.getElementById('barra4y').value;
    const color4 = document.getElementById('color4').value;
    const x5 = document.getElementById('barra5x').value;
    const y5 = document.getElementById('barra5y').value;
    const color5 = document.getElementById('color5').value;

    limpiarLienzo();
    drawBar (x1, y1, color1);
    drawBar (x2, y2, color2);
    drawBar (x3, y3, color3);
    drawBar (x4, y4, color4);
    drawBar (x5, y5, color5);

};

function drawBar (x, y, color = modulo.getColor()) {
    x = x*50-25
    y = y*50
    lienzo.fillStyle = color;
    lienzo.fillRect(x,0,50,-y);
};

function limpiarLienzo () {
    lienzo.clearRect(0, 0, lienzoElement.width, -lienzoElement.height)

    for (let i = 50; i < 800; i += 50) {
        modulo.dibujarLinea(lienzo,i,0,i,10);
        modulo.dibujarLinea(lienzo,0,i,10,i);
    };

};

function resetValues () {
    let i = 1;
    Array.from(document.getElementsByClassName('valores')).forEach((input) => {
        if (input.className.includes('Y')) {
            input.value = null;
        } else {
            input.value = i;
            ++i;
        };
    });
};