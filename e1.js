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

const mathOperation = (array) => {
  //  First approach,loop hell jaja

  for (let i = 0; i < array.length; i++) {
    if (array[i].b === 0) {
      console.log(0);
    } else if (array[i].operation === "+") {
      console.log(array[i].a + array[i].b);
    } else if (array[i].operation === "-") {
      console.log(array[i].a - array[i].b);
    } else if (array[i].operation === "*") {
      console.log(array[i].a * array[i].b);
    } else if (array[i].operation === "/") {
      console.log(array[i].a / array[i].b);
    }

    // Second approach, tuve que googlear como poder usar el + en esta situacion, y llegue al metodo eval()

    //   if (array[i].b !== 0) {
    //     let newArr = eval(array[i].a + array[i].operation + array[i].b);
    //     console.log(newArr);
    //   } else {
    //     console.log(0);
    //   }
    // }
  }
};

mathOperation(array);
