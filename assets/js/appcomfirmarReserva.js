function confirmarReserva(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let integrantes = document.getElementById('integrantes').value;

    if (!nombre || !correo || !fecha || !hora || !integrantes) {
        alert('ups.. faltan datos porfavor,completa la informacion para confirmar tu reserva');
        return;
    }

    if (confirm("seguro " + nombre + ", que quieres confirmar tu reserva para el dia " + fecha + " a las " + hora + " para " + integrantes + " personas?")) {
        alert("gracias " + nombre + " por reservar con nosotros,te esperamos para que prueves lo mejor  de la comida al aire libre👌😎 por el mejor restaurante es de sebastian el de ortiz vale huevo");
    }
}