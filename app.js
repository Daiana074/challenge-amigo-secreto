// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crea un array para almacenar nombres
let amigos = [];

//implementa una funcion para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor inserte un nombre');
    } else {
        amigos.push(amigo);
        //console.log(amigos);
        recorrerLista(amigos); // Actualiza la lista visual
    }
    limpiarCaja();
}


function limpiarCaja(){
    let valorCaja = document.getElementById('amigo').value = '';
    
}

//implemente una funcion para actualizar la lista de amigos
function recorrerLista(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//implenta funcion para sortear amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indice];

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}


