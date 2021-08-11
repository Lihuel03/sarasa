function mostrar() {
    let seguir;
    let tipo;
    let origen;
    let precio;
    let acumMuñeca = 0;
    let acumRompecabezas = 0;
    let acumPelota = 0;
    let acumPrecioMuñecosImportados = 0;
    let acumMuñecosImportados = 0;
    let acumPrecioTotal = 0;
    let rompecNacionalBarato = 0;
    let flag = 1;
  
    do {
      tipo = prompt("ingrese tipo:");
      while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota") {
        tipo = prompt("ingrese tipo valido:");
      }
      origen = prompt("ingrese origen:");
      while (origen != "nacional" && origen != "importado") {
        origen = prompt("ingrese origen valido:");
      }
      precio = parseFloat(prompt("ingrese precio:"));
      while (isNaN(precio) || precio < 1000 || precio > 5000) {
        precio = parseFloat(prompt("ingrese precio valido:"));
      }
  
      if (tipo == "muñeca") {
        acumMuñeca++;
      } else if (tipo == "pelota") {
        acumPelota++;
      } else {
        acumRompecabezas++;
      }
  
      if (origen == "importado") {
        acumPrecioMuñecosImportados += precio;
        acumMuñecosImportados++;
      }
  
      acumPrecioTotal += precio;
  
      if (tipo == "rompecabezas" && origen == "nacional" && flag || precio < rompecNacionalBarato) {
        rompecNacionalBarato = precio;
        flag = 0;
      }
  
      seguir = prompt("quiere seguir? s/n").toLowerCase();
    } while (seguir == 's');
  
    if (acumMuñeca > acumPelota && acumMuñeca > acumRompecabezas) {
      document.write("a- El tipo de juguete mas vendido es: Muñeca.<br>");
    } else if (acumPelota > acumMuñeca && acumPelota > acumRompecabezas) {
      document.write("a- El tipo de juguete mas vendido es: Pelota.<br>");
    } else if (acumRompecabezas > acumPelota && acumRompecabezas > acumMuñeca) {
      document.write("a- El tipo de juguete mas vendido es: Rompecabezas.<br>");
    }
    document.write("b- El promedio de precio de los juguetes importados es: " + acumPrecioMuñecosImportados / acumMuñecosImportados + ".<br>");
    document.write("c- La recaudacion total es: $" + acumPrecioTotal + ".<br>");
    document.write("d- El precio del rompecabezas nacional mas barato es: " + rompecNacionalBarato + ".<br>");
    document.write("e- En total se percibió $" + acumPrecioTotal * 0.21 + " de IVA.");
  }
  
  