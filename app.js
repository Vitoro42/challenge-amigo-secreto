// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(){

    let nombre = document.getElementById('amigo').value;

    // Validación campo vacío y agrega el nombre a la lista.

    if (nombre.trim() === ''){
        alert("El campo no puede estar vacío. Por favor, inserte un nombre.");
        return;
    }else{
        amigos.push(nombre);
        console.log(amigos);

        let lista = document.getElementById('listaAmigos');
        lista.innerHTML += `<li>${nombre}</li>`;

        document.getElementById('amigo').value = '';

    }
}

function sortearAmigo() {
    // Validación lista vacía
    if (amigos.length === 0){
        alert("Agregue al menos un amigo para sortear");
        return;
    }

    // Variables para el sorteo
    let numeroAmigos = amigos.length;
    let indiceAleatoreo = Math.floor(Math.random()* numeroAmigos);

    // Amigo sorteado
    let amigoSorteado = amigos[indiceAleatoreo];

    // muestra en pantalla
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;


}