function colocarPunto (x,y,radio, color) {
    plano.beginPath();
    plano.arc(x, -y, radio, 0, 2 * Math.PI);
    plano.fillStyle = color;
    plano.fill();
    plano.closePath();
}

function dibujarLinea (xi,yi,xf,yf) {
    plano.beginPath();
    plano.strokeStyle = '#000';
    plano.moveTo(xi,-yi);
    plano.lineTo(xf,-yf);
    plano.lineWidth = 3;
    plano.stroke();
    plano.closePath();
};

function submitClick () {
    const inputX = document.getElementById('coordInputX').value;
    const inputY = document.getElementById('coordInputY').value;
    colocarPunto(inputX,inputY,5,'#f00');
};

function enter (tecla) {
    if(tecla.keyCode == 13) submit.click();
}

// -----------

let x = 50;
let y = -50;

const plano = document.getElementById('plano').getContext("2d");
plano.save();
plano.translate(300,300);

let coordX = -300;
let coordY = 300;
let radio = 1;
let color = "#000";

dibujarLinea(300,0,-300,0);
dibujarLinea(0,300,0,-300);

for (i = 1; i <= 169; ++i) {
    colocarPunto(coordX, coordY, radio, color);
    coordX += 50;
    if (i % 13 == 0) {
        coordY -= 50
        coordX = -300
    };
};

const submit = document.getElementById('submit');
const coordInputs = document.getElementById("coordInputs");
const reiniciar = document.getElementById("reiniciar");


submit.addEventListener('click', submitClick);
coordInputs.addEventListener('keyup', enter);
reiniciar.addEventListener('click', () => location.reload())
