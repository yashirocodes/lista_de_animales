//INSTANCIA PROPIETARIO
class Propietario {
  constructor() {
    this._nombre;
    this._telefono;
    this._direccion;
  }
  set nombre(value) {
    this._nombre = value;
  }
  set telefono(value) {
    this._telefono = value;
  }
  set direccion(value) {
    this._direccion = value;
  }
  get nombre() {
    return this._nombre;
  }
  get telefono() {
    return this._telefono;
  }
  get direccion() {
    return this._direccion;
  }

  datosPropietario() {
    return `El nombre del dueño es ${this.nombre}. Domicilio ${this.direccion} y numero de contacto ${this.telefono}`;
  }
}

class Animal extends Propietario {
    
  constructor() {
    super()
    this._tipo;
  }
  set tipo(value) {
    this._tipo = value;
  }
  get tipo() {
    return this.tipo;
  }
}
// INSTANCIA MASCOTA

class Mascota extends Animal {
  constructor() {
    super()
    this._nombreMascota;
    this._enfermedad;
  }
  set nombreMascota(value) {
    this._nombreMascota = value;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set enfermedad(value) {
    this._enfermedad = value;
  }
  get enfermedad() {
    return this._enfermedad;
  }
}

// VARIABLES
const formulario = document.getElementById("formulario");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const propietario1 = new Propietario();
  propietario1.nombre = propietario.value;
  propietario1.telefono = telefono.value;
  propietario1.direccion = direccion.value;

  if (tipo.value === "perro") {
    `El tipo de animal es un ${tipo.value}`;
  }
  if (tipo.value === "gato") {
    `El tipo de animal es un ${tipo.value}`;
  }
  if (tipo.value === "conejo") {
    `El tipo de animal es un ${tipo.value}`;
  }

  const animal1 = new Animal();
  animal1.nombreMascota = nombreMascota.value;
  animal1.enfermedad = enfermedad.value;

  resultado.innerHTML = `<ul>
  <li>${propietario1.datosPropietario()}</li>
  <li>El tipo de animal es ${tipo.value}, el nombre de la mascota ${nombreMascota.value} y la enfermedad es ${enfermedad.value}</li>
  </ul>
  `
});
