// ES5
var name = 'Diego';
function helloName (name) {
  return console.log('Hola, mi nombre es ' + name);
};

// ES6
let name = 'Diego';
const lastname = 'Molina';

const helloName = (name, lastname) => console.log(`Hola, mi nombre es ${name} ${lastname}`);

// objetos en JS
const clarita = {
  nombre: 'Clara',
  apellido: 'Figna',
  pelo: {
    color: 'red',
    long: '60cm'
  }
};

// esto si lo puede hacer, pero NO cambiar el valor de 'clarita'
clarita.apellido = 'Moligna';
clarita.hair.color = 'black';

// tipos de datos
String, integer, float, undefined, null, boolean, etc.