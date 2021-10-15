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

function getColor() {
    let caracteres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; ++i) {
        color += caracteres[Math.floor(Math.random() * 16)];
    };
    return color;
}

function submitClick () {
    const inputX = document.getElementById('coordInputX').value;
    const inputY = document.getElementById('coordInputY').value;
    let randomColor = getColor()
    if (inputX >= -400 && inputX <= 400 && inputY >= -400 && inputY <= 400) colocarPunto(inputX,inputY,5,randomColor)
    else console.log('El valor ingresado debe de ser cualquier número entre -400 y 400');

};

function enter (tecla) {
    if(tecla.keyCode == 13) submit.click();
}

// -----------

let x = 50;
let y = -50;

const plano = document.getElementById('plano').getContext("2d");
plano.save();
plano.translate(400,400);

let coordX = -400;
let coordY = 400;
let radio = 1;
let color = "#000";

dibujarLinea(400,0,-400,0);
dibujarLinea(0,400,0,-400);

for (let i = 1; i <= 289; ++i) {
    colocarPunto(coordX, coordY, radio, color);
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
