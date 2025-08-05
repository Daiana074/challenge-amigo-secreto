// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crea un array para almacenar nombres
let amigos = [];

//implementa una funcion para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor inserte un nombre');
    }else{
        amigos.push(amigo);
        console.log(amigos);
    }
    limpiarCaja();
}


function limpiarCaja(){
    let valorCaja = document.getElementById('amigo').value = '';
    
}
