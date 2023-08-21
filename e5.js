/*
    Crea una función que busque en el array numbers la existencia de un número. Los números que buscarás serán 100, 155, 523, 750 y 800 y debes imprimir en consola si fueron o no encontrados.
    El array numbers, como puedes ver, tiene una longitud de 1000 números y se encuentra ordenado de forma ascendente.
    La búsqueda debe ser óptima. No puedes modificar el array original pero puedes crear otros elementos/objetos auxiliares.
    Tu función de búsqueda debe retornar el index en el array del número encontrado o un -1 en el caso de no haber sido encontrado
    Tip: para realizar la búsqueda, debes implementar el algoritmo de búsqueda binaria.
    Cada vez que ejecutes esta prueba el array numbers se poblará de manera distinta, por lo que es normal que los resultados varíen entre cada prueba.
*/

function createNonConsecutiveArray(count, gap) {
  const array = [];
  let currentNumber = 0;

  for (let i = 0; i < count; i++) {
    array.push(currentNumber);
    currentNumber += gap + Math.floor(Math.random() * 10); // Incrementa el número actual por el gap más un número aleatorio entre 0 y 9
  }

  return array;
}

const numbers = createNonConsecutiveArray(1000, 5); // Crea un array con 1000 números, con una diferencia mínima de 5 entre cada número consecutivo
const numbersToSearch = [100, 155, 523, 750, 800];

/* Approach: Usar metodo includes para ver si en el array se encuentra cierto numero y luego tuve que googlear como poder usar indexof en este caso.
Si el array no tiene el numbero, return -1, si lo tiene return el index. */
const binarySearch = (array, number) => {
  if (!array.includes(number)) {
    return -1;
  }
  const index = array.indexOf(number);
  return index;
};

numbersToSearch.forEach((number) => {
  const found = binarySearch(numbers, number);
  if (found === -1) {
    console.log(`El número ${number} no fue encontrado`);
  } else {
    console.log(`El número ${number} fue encontrado en la posición ${found}`);
  }
});
