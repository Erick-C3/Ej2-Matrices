const divTablero = document.querySelector("#tablero");

const MAX_FILA = 5;
const MAX_COL = 6;

for (let fila = 0; fila < MAX_FILA; fila++) {
    /* matriz.push([])    */ 
    divTablero.innerHTML += `
        <div class="row">
            ${ agregarColumnas() }
        </div>
    `
}

function agregarColumnas() {
    let columnas = "";
    for (let columna = 0; columna < MAX_COL; columna++) {
        columnas += `
            <div class="col casilla"> </div>
        `;
    }
    return columnas;
}