const divTablero = document.querySelector("#tablero");
const inputFila = document.querySelector("#fila");
const inputCol = document.querySelector("#col");

/* const MAX_FILA = 3;
const MAX_COL = 5; */



function generarMatriz() {
    let maxFila = parseInt(inputFila.value);

    divTablero.innerHTML = "";    
    for (let fila = 0; fila < maxFila; fila++) {
        /* matriz.push([])    */ 
        divTablero.innerHTML += `
            <div class="row">
                ${ agregarColumnas() }
            </div>
        `
    }
}

function agregarColumnas() {
    let maxFila = parseInt(inputCol.value);
    let columnas = "";
    for (let columna = 0; columna < maxFila; columna++) {
        columnas += `
            <div class="col casilla"> </div>
        `;
    }
    return columnas;
}

