/*
    Utiliza el array de personas que se muestra a continuación e implementa una función que a partir del id de la persona, devuelva el nombre completo de la misma.
    Si no existe ninguna persona con el id especificado, devolver un string que lo indique.
    La búsqueda debe ser óptima. No puedes modificar el array original pero puedes crear otros elementos/objetos auxiliares.
*/

const people = [
  { id: 1, name: "Alice", lastName: "Johnson" },
  { id: 2, name: "Bob", lastName: "Smith" },
  { id: 3, name: "Charlie", lastName: "Brown" },
  { id: 4, name: "David", lastName: "Lee" },
  { id: 5, name: "Emily", lastName: "Clark" },
  { id: 6, name: "Frank", lastName: "Harris" },
  { id: 7, name: "Grace", lastName: "Lewis" },
  { id: 8, name: "Henry", lastName: "Walker" },
  { id: 9, name: "Ivy", lastName: "Hall" },
  { id: 10, name: "Jack", lastName: "Allen" },
  { id: 11, name: "Kathy", lastName: "Young" },
  { id: 12, name: "Larry", lastName: "King" },
  { id: 13, name: "Mary", lastName: "Wright" },
  { id: 14, name: "Nancy", lastName: "Lopez" },
  { id: 15, name: "Oscar", lastName: "Hill" },
  { id: 16, name: "Paul", lastName: "Scott" },
  { id: 17, name: "Quincy", lastName: "Adams" },
  { id: 18, name: "Rachel", lastName: "Green" },
  { id: 19, name: "Steve", lastName: "Baker" },
  { id: 20, name: "Tina", lastName: "Turner" },
  { id: 21, name: "Ulysses", lastName: "Grant" },
  { id: 22, name: "Victoria", lastName: "Parker" },
  { id: 23, name: "Walter", lastName: "White" },
  { id: 24, name: "Xander", lastName: "Harris" },
  { id: 25, name: "Yvonne", lastName: "Carter" },
  { id: 26, name: "Zachary", lastName: "Taylor" },
];

/* Approach: For loop para iterar el array people y si el id es igual al id dado, imprimir name y lastname. En este caso especifico no es necesario hacer sort
porque los id's ya van de forma ascendente, pero en caso de estar desordenados, se puede usar la HoF sort para organizarlos y poder usarlos (En este caso se usa una shallow copy para no mutar array
    original.) */
const getFullName = (id) => {
  let sortedArr = [...people.sort((a, b) => a.id - b.id)];

  for (let index = 0; index < people.length; index++) {
    const element = sortedArr[index];
    if (element.id === id) {
      return `${element.name} ${element.lastName}`;
    }
  }
  return "No existe ninguna persona con el id especificado";
};
console.log(getFullName(1)); // Alice Johnson
console.log(getFullName(5)); // Emily Clark
console.log(getFullName(15)); // Oscar Hill
console.log(getFullName(26)); // Zachary Taylor
console.log(getFullName(100)); // No existe ninguna persona con el id especificado
