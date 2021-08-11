function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let nota;
  let edad;

  let flagMejorPromedioFisica = 0;
  let nombreMejorPromedioFisica;
  let flagAlumnaMasJoven = 0;
  let nombreAlumnaMasJoven;
  let contadorTotal = 0;
  let contadorEstudiantesQuimica = 0;
  let contadorEstudiantesFisica = 0;
  let contadorEstudiantesSistemas = 0;
  let porcentajeEstudiantesQuimica = 0;
  let porcentajeEstudiantesFisica = 0;
  let porcentajeEstudiantesSistemas = 0;
  let flagMasMaterias = 0;
  let nombreAlumnoMasMaterias;
  let edadAlumnoMasMaterias;

  for (let i = 0; i < 3; i++) {

    nombre = prompt("Ingrese su nombre");
    while (nombre.length == 0) {
      nombre = prompt("Error! Reingrese su nombre");
    }

    carrera = prompt("Ingrese la carrera (Quimica, Fisica, Sistemas)").toLowerCase();
    while (carrera == "quimica" && carrera == "fisica" && carrera == "sistemas") {
      carrera = prompt("Ingrese carrera valida: ").toLowerCase();
    }

    sexo = prompt("Ingrese su sexo (Masculino, Femenino, No binario)").toLowerCase();
    while (sexo == "masculino" || sexo == "femenino" || sexo == "no binario") {
      sexo = prompt("Ingrese sexo valido:  ").toLowerCase();
    }
    cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias (entre 0 y 5)"));
    while (isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 5) {
      cantidadMaterias = parseInt(prompt("Error! Reingrese cantidad de materias (entre 0 y 5)"));
    }
    nota = parseInt(prompt("Ingrese su nota (entre 0 y 10)"));
    while (isNaN(nota) || nota < 0 || nota > 10){ 
      nota = parseInt(prompt("ingrese bien la nota"));
    }
    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad == 0 || edad < 0) {
      edad = parseInt(prompt("ingrese edad valida "));
    }


    if (flagMejorPromedioFisica == 0 && carrera == "fisica") {
      flagMejorPromedioFisica = nota;
      nombreMejorPromedioFisica = nombre;
    } else if (flagMejorPromedioFisica < nota) {
      flagMejorPromedioFisica = nota;
      nombreMejorPromedioFisica = nombre;
    }

    if (flagAlumnaMasJoven == 0 && sexo == "femenino") {
      flagAlumnaMasJoven = edad;
      nombreAlumnaMasJoven = nombre;
    } else if (flagAlumnaMasJoven > edad) {
      flagAlumnaMasJoven = edad;
      nombreAlumnaMasJoven = nombre;
    }
    switch (carrera) {
      case "fisica":
        contadorEstudiantesFisica += 1;
        break;
      case "quimica":
        contadorEstudiantesQuimica += 1;
        break;
      case "sistemas":
        contadorEstudiantesSistemas += 1;
        break;
    }

    if (flagMasMaterias == 0 && carrera != "quimica") {
      flagMasMaterias = cantidadMaterias; 
      edadAlumnoMasMaterias = edad;
      nombreAlumnoMasMaterias = nombre;
    } else if (flagMasMaterias < cantidadMaterias && carrera != "quimica") {
      flagMasMaterias = cantidadMaterias;
      edadAlumnoMasMaterias = edad;
      nombreAlumnoMasMaterias = nombre;
    }
    contadorTotal += 1;
  }
  document.write("a) El mejor promedio de fisica es:" + nombreMejorPromedioFisica);
  document.write("b) La alumna mas joven es" + nombreAlumnaMasJoven);


  porcentajeEstudiantesFisica =
    (contadorEstudiantesFisica * 100) / contadorTotal;
  porcentajeEstudiantesQuimica =
    (contadorEstudiantesQuimica * 100) / contadorTotal;
  porcentajeEstudiantesSistemas =
    (contadorEstudiantesSistemas * 100) / contadorTotal;
  document.write("c) Los porcentajes de cada materia son .<br>Fisica: " + porcentajeEstudiantesFisica + ".<br>Quimica: " + porcentajeEstudiantesQuimica + ".<br>Sistemas: " + porcentajeEstudiantesSistemas);

  document.write("d) El alumno que cursa más materias es: .<br>Nombre:" + nombreAlumnoMasMaterias + ".<br>edad: " + edadAlumnoMasMaterias);
}

