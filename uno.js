function mostrar() {
  let seguir;
  let nombre;
  let tipo;
  let sangre;
  let edad
  let sexo;
  let acumEdadReptil = 0;
  let contEdadFinal = 0;
  let mascotajoven;
  let sexojoven;
  let tipoJoven;
  let flag = 1;
  let ContAnimales = 0;
  let acumave = 0;
  let acummamifero = 0;
  let acumReptil = 0;

  do {
    nombre = prompt("ingrese Nombre").toLowerCase();
    while (nombre.length < 3 || nombre.length > 8) {
      nombre = prompt("ingrese nombre valido:  ").toLowerCase;
    }
    tipo = prompt("ingrese Tipo (mamifero/ave/reptil) ").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") {
      tipo = prompt("Ingrese Tipo valido (mamifero/ave/reptil)").toLowerCase();
    }
    sangre = prompt("ingrese tipo de sangre (fria/caliente)").toLowerCase();
    while (sangre != "fria" && sangre != "caliente") {
      sangre = prompt("ingrese tipo de sangre valida (fria/caliente) ").toLowerCase();

    } while (tipo == "reptil" && sangre == "caliente") {
      tipo = prompt("Reptil solo puede tener sangre fria").toLowerCase();
    }
    edad = parseInt(prompt("ingrese edad del animal: "));
    while (isNaN(edad) || edad < 1) {
      edad = parseInt(prompt("ingrese edad valida del animal: "));
    }
    sexo = prompt("ingrese sexo: ").toLowerCase();
    while (sexo != 'h' && sexo != 'm') {
      sexo = prompt("ingrese sexo valido: ").toLowerCase();
    }
    if (tipo == "reptil") {
      acumEdadReptil += edad;
      contEdadFinal++;
    }
    if (flag || edad < mascotajoven) {
      tipoJoven = tipo;
      mascotajoven = edad;
      sexojoven = sexo;

      flag = 0;

    } if (tipo == "ave") {
      acumave++;

    } else if (tipo == "mamifero") {
      acummamifero++;
    } else {
      acumReptil++;
    }
    ContAnimales++;


    seguir = prompt("quiere seguir? s/n").toLowerCase();
  }
  while (seguir == 's'); 
  document.write("a) El Promedio de edad de los reptiles es " + acumEdadReptil / contEdadFinal + ".<br>");
  document.write("b) El tipo de la mascota mas joven es: " + tipo + "y el sexo " + sexo + ".<br>");
  document.write("c) El porcentaje de mascotas que son aves es " + (acumave * 100) / ContAnimales + ".<br>");

  if (acumReptil > acumave && acumReptil > acummamifero) {
    document.write("d) El tipo de mascota que hay mas es reptil");
  } else if (acumave > acummamifero && acumave > acumReptil) {
    document.write("d) El tipo de mascota que hay mas es ave");
  } else if (acummamifero > acumave && acummamifero > acumReptil) {
    document.write("d) El tipo de mascota que hay mas es reptil ");
  }

} 