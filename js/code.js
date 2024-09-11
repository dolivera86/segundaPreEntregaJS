// Función para agregar centros deportivos y usuarios
function agregarCentros() {
    let centrosDeportivos = [];
    let agregar = true;
    let conteo = 1;
    let intentos = 2;

    while (agregar) {
        const nombre = prompt('Ingrese el nombre del centro deportivo:').toLowerCase();
        const dias = parseFloat(prompt('¿Cuántos días a la semana asistirá? (0-7):'));

        if (isNaN(dias) || dias < 0 || dias >= 8) {
            alert('Por favor, ingrese un número entre 0 y 7.');
            conteo++;

            if (conteo > intentos) {
                alert('No juegues con mí paciencia e ingresa un número del 0 al 7');
                conteo = 1;
            }

            
        } else {
            const usuario = prompt('Ingrese su nombre').toLowerCase();
            centrosDeportivos.push({ nombreCentro: nombre, diasPorSemana: dias, usuario: usuario });
            agregar = confirm('¿Desea agregar otro centro deportivo?');
            console.log(centrosDeportivos);
        }
    }

    return centrosDeportivos;
}


// Función para mostrar el resumen
function mostrarDatos(centrosDeportivos) {
    let resumenCentros = '';
    centrosDeportivos.forEach(centroDeportivo => {
        resumenCentros += ` Centro: ${centroDeportivo.nombreCentro}, Días de entrenamiento: ${centroDeportivo.diasPorSemana}, Usuario: ${centroDeportivo.usuario}`;
    });

    alert(resumenCentros);
}

// Función principal
function ejecutarAplicacion() {
    const centrosDeportivos = agregarCentros();
    mostrarDatos(centrosDeportivos);
}

// Ejecutar la aplicación
ejecutarAplicacion();
