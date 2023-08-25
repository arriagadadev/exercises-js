/*
    Utilizando el array que se muestra a continuación, imprimir en consola los resultados matemáticos correspondientes
     a las operaciones entre los elementos a y b, teniendo en cuenta que a es el primer elemento y b el segundo.
*/

const array = [
  { a: 1, b: 2, operation: "+" },
  { a: 19, b: 2, operation: "-" },
  { a: 10, b: 10, operation: "*" },
  { a: 20, b: 2, operation: "/" },
  { a: 1.256, b: 2, operation: "*" },
  { a: 7, b: 0, operation: "/" },
];


/* Approach: crear un objeto que tiene varios metodos y estos van a ser llamados por la variable calculate*/

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Division not allowed" : a / b),
};

/* Calculate, tiene un parametro que es dado despues en el forEach loop, retornamos el objeto operations pero que nos llevaria a cada operation del array y despues al operation lo que nos 
llevaria a los distintos metodos en operations y despues se pasan como argumentos a y b de el array para el metodo de operations*/
const calculate = (operation) => {
  try {
    return operations[operation.operation](operation.a, operation.b);
  } catch (error) {
    return error.message;
  }
};

/* Se llama un forEach loop en el array que va a chequear cada elemento para asi poder usar la funcion calculate, que toma como argumento cada operation.*/
array.forEach((operation) => {
  console.log(
    `The result of ${operation.a} ${operation.operation} ${
      operation.b
    } is: ${calculate(operation)} `
  );
});
