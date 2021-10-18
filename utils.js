export function colocarPunto (plano,x,y,radio, color) {
    plano.beginPath();
    plano.arc(x, -y, radio, 0, 2 * Math.PI);
    plano.fillStyle = color;
    plano.fill();
    plano.closePath();
};

export function dibujarLinea (plano,xi,yi,xf,yf) {
    plano.beginPath();
    plano.strokeStyle = '#000';
    plano.moveTo(xi,-yi);
    plano.lineTo(xf,-yf);
    plano.lineWidth = 3;
    plano.stroke();
    plano.closePath();
};

export function getColor() {
    let caracteres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; ++i) {
        color += caracteres[Math.floor(Math.random() * 16)];
    };
    return color;
};

export function clearCanvas (xi, yi, canvas, ctx) {
    ctx.clearRect(xi, yi, canvas.width, -canvas.height)
}