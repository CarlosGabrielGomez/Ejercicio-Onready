let ArrayAutos = [
    {
      Marca: "Peugeot",
      Modelo: 206,
      Puertas: 4,
      Precio: 200000.0,
    },
    {
      Marca: "Honda",
      Modelo: "Titan",
      Cilindrada: 125,
      Precio: 60000.0,
    },
    {
      Marca: "Peugeot",
      Modelo: 208,
      Puertas: 5,
      Precio: 250000.0,
    },
  
    {
      Marca: "Yamaha",
      Modelo: "YBR",
      Cilindrada: 125,
      Precio: 80500.5,
    },
  ];
  
  function numtostr(num) {
    let numero = new Intl.NumberFormat("es-Es", {
      minimumFractionDigits: 2,
    }).format(num);
    return numero.toString(numero);
  }
  
  function clave(val) {
    let claves = Object.keys(val);
    let valores = Object.values(val);
    if (claves[2] === "Puertas") {
      return "Puertas: " + valores[2];
    } else {
      return "Cilindradas: " + valores[2] + "c";
    }
  }
  
  function mascaro(array) {
    let vehiculo = array[0];
    for (let index = 0; index < ArrayAutos.length; index++) {
      if (ArrayAutos[index].Precio > vehiculo.Precio) {
        vehiculo = ArrayAutos[index];
      }
    }
    return vehiculo.Marca + " " + vehiculo.Modelo;
  }
  
  function masbarato(array) {
    let vehiculo = array[0];
    for (let index = 0; index < ArrayAutos.length; index++) {
      if (ArrayAutos[index].Precio < vehiculo.Precio) {
        vehiculo = ArrayAutos[index];
      }
    }
    return vehiculo.Marca + " " + vehiculo.Modelo;
  }
  
  function posletraY(array) {
    let pos = -1;
    for (let index = 0; index < array.length; index++) {
      if (isNaN(array[index].Modelo)) {
        if (array[index].Modelo.indexOf("Y" != -1)) {
          pos = index;
        }
      }
    }
    return pos;
  }
  
  function mayamen(array) {
    let objaux = 0;
    array.forEach((element) => {
      for (let index = 0; index < array.length - 1; index++) {
        if (array[index].Precio < array[index + 1].Precio) {
          objaux = array[index];
          array[index] = array[index + 1];
          array[index + 1] = objaux;
        }
      }
    });
    return array;
  }
  
  function precio(str) {
    let arrayprecio = str.replace(".", ",");
    let preciofinal = arrayprecio.split(",");
    return preciofinal[0] + "." + preciofinal[1] + "," + preciofinal[2];
  }
  
  for (let index = 0; index < ArrayAutos.length; index++) {
    clave(ArrayAutos[index]);
  
    console.log(
      "Marca: " +
        ArrayAutos[index].Marca +
        " //" +
        " Modelo: " +
        ArrayAutos[index].Modelo +
        "// " +
        clave(ArrayAutos[index]) +
        " //" +
        " Precio: " +
        "$" +
        precio(numtostr(ArrayAutos[index].Precio))
    );
  }
  
  console.log("======================================");
  console.log("Vehiculo más caro: " + mascaro(ArrayAutos));
  console.log("Vehiculo más barato: " + masbarato(ArrayAutos));
  
  if (posletraY(ArrayAutos) === -1) {
    console.log("Vehiculo que contiene en el modelo la letra  'Y' no existe ");
  } else {
  }
  console.log(
    "Vehiculo que contiene en el modelo la letra  'Y': " +
      ArrayAutos[posletraY(ArrayAutos)].Marca +
      " " +
      ArrayAutos[posletraY(ArrayAutos)].Modelo +
      " " +
      "$" +
      precio(numtostr(ArrayAutos[posletraY(ArrayAutos)].Precio))
  );
  
  console.log("======================================");
  console.log("Vehiculos ordenados por precio de mayor a menor ");
  mayamen(ArrayAutos).forEach((element) => {
    console.log(element.Marca + " " + element.Modelo);
  });