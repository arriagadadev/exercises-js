/*
    Implementar la función deepClone.
    Tu tarea es implementar una función llamada deepClone que toma un objeto y devuelve una copia profunda de ese objeto.
    Una copia profunda significa que todas las propiedades del objeto original y sus objetos anidados deben ser copiadas recursivamente, de modo que la nueva copia sea completamente independiente del original.
*/

const original = {
  name: "John",
  details: {
    age: 30,
    address: {
      city: "New York",
      street: "123 Main St",
    },
  },
};

const deepClone = (obj) => {

};

const clone = deepClone(original);

console.log(clone !== original); // Debe imprimir true
console.log(clone.details !== original.details); // Debe imprimir true
console.log(clone.details.address !== original.details.address); // Debe imprimir true
console.log(clone.details.address.city === original.details.address.city); // Debe imprimir true
