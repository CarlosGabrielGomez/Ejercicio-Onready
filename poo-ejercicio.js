/* programación orientada a objetos  */
/*ejemplo de constructores
 */
class Vehiculo {
  constructor(marca, modelo, precio) {
    if (!isNaN(precio)) {
      //Atributos

      /* si usamos this. los atributos serán públicos */
      this._marca = marca;
      this._modelo = modelo;
      this._precio = precio;

      /* aca definomos los atributos como privados  */
      /* 
    let Marca = marca;
    let Modelo = modelo;
    Precio = precio;
    */
    }
  }
  //Propiedades
  //GETTER
  get Marca() {
    return `Marca:  ${this._marca} //`;
  }
  get Modelo() {
    /* primera opcion*/
    //return 'Modelo: '+ this.Modelo+' //';
    return `Modelo:  ${this._modelo} //`;
  }
  get Precio() {
    return `Precio:  $${this._precio} `;
  }
  //SETTER

  set Marca(val) {
    this._marca = val;
  }

  set Modelo(val) {
    this._modelo = val;
  }

  set Precio(val) {
    this._precio = val;
  }

  //METODOS

  Formato(val) {
    let preciolocal = new Intl.NumberFormat("es-Es", {
      minimumFractionDigits: 2,
    }).format(val);

    return preciolocal.toString(preciolocal);
  }

  PrecioTexto(val) {
    let arrayprecio = val.replace(".", ",");
    let preciofinal = arrayprecio.split(",");
    return preciofinal[0] + "." + preciofinal[1] + "," + preciofinal[2];
  }

  preliminar() {
    return this.PrecioTexto(this.Formato(this._precio));
  }
}
//aplicamos herencia
class Auto extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    //llamamos al constructor padre
    super(marca, modelo, precio);
    if (!isNaN(puertas)) {
      this._puertas = puertas;
    }
  }
  //Propiedades
  //GETTER
  get Puertas() {
    return `Puertas:  ${this._puertas} //`;
  }

  //SETTER
  set Puertas(val) {
    this._puertas = val;
  }

  //Metodos
  /*los metodos de las clases no necesitan de la palabra clave function */
  datos() {
    return `Marca:  ${this._marca} // Modelo:  ${this._modelo} // Puertas:  ${
      this._puertas
    } //  Precio  $${this.preliminar()} `;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this._cilindrada = cilindrada;
  }

  //GETTER
  get Cilindrada() {
    return `Cilindrada:  ${this._cilindrada} //`;
  }

  //SETTER
  set Cilindrada(val) {
    this._cilindrada = val;
  }

  //METODOS

  datos() {
    return `Marca:  ${this._marca} // Modelo:  ${
      this._modelo
    } // Cilindrada:  ${this._cilindrada}c //  Precio  $${this.preliminar()} `;
  }
}

class Ejercicio1 {
  constructor() {
    
  }

  static parte1() {
   
    let auto1 = new Auto("Peugeot", 206, 200000.0, 4);
    let auto2 = new Auto("Peugeot", 208, 250000.0, 5);
    let moto1 = new Moto("Honda", "Titan", 60000.0, 2);
    let moto2 = new Moto("F", "YBR", 80500.5, 2);
    
    this.ArrayAutos = new Array();
    this.ArrayMotos = new Array();
    this.ArrayAutos.push(auto1);
    this.ArrayAutos.push(auto2);
    this.ArrayMotos.push(moto1);
    this.ArrayMotos.push(moto2);
  
   
   
    return this.ArrayAutos;

    //console.log(ArrayMotos);
  }
}

/*probamos el constructor */
let vehiculo = new Vehiculo("Fiat", "Palio", 500.0);

/* 
console.log(vehiculo.marca);
vehiculo.marca = "Ford";
console.log(vehiculo.marca);
console.log(vehiculo.modelo);

*/

//console.log(auto.Marca);
//console.log(auto.datos());

//console.log(moto.datos());
let ejercicio1 = new Ejercicio1();
console.log(Ejercicio1.parte1());
/*segunda forma de instancia objetos  */
