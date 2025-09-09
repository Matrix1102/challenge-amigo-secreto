// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    // Esta función recibe un string 'nombre' y debe agregarlo al array 'listaAmigos'.
    if (!listaAmigos.includes(nombre) && nombre !== "") {
        listaAmigos.push(nombre);
        mostrarListaAmigos();
    }else if(nombre === ""){
        alert("El campo no puede estar vacío");
    }else {
        alert("El amigo ya está en la lista");
    }
    limpiarCaja();
    return;
}

// Esta función muestra en pantalla la lista de amigos.
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    limpiarLista();
    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
    return;
}

// Esta función escoge al "amigo secreto" de manera aleatoria.
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para sortear.");
        return;
    }
    limpiarLista();

    // Sorteo aleatorio
    let amigosSecretos = [...listaAmigos]; // Una copia de listaAmigos
    let amigoIndex = Math.floor(Math.random() * amigosSecretos.length);
    let amigoSecreto = amigosSecretos[amigoIndex];
    resultado.innerHTML = `El amigo secreto es : ${amigoSecreto}`;
}

// Función para limpiar la caja de texto
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}

// Función para limpiar las listas en pantalla
function limpiarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

}