/*
    Teniendo un array de empresas y un array de empleados, imprimir en consola todos los empleados con su nombre y apellido junto al nombre de la empresa para cual trabaja separado por un guión "-".
*/
const companies = [
  { id: 1, name: "Google" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Globant" },
  { id: 5, name: "Accenture" },
  { id: 6, name: "Microsoft" },
  { id: 7, name: "Apple" },
  { id: 8, name: "Amazon" },
  { id: 9, name: "IBM" },
  { id: 10, name: "Oracle" },
  { id: 11, name: "Adobe" },
  { id: 12, name: "Salesforce" },
  { id: 13, name: "SAP" },
  { id: 14, name: "Dell" },
  { id: 15, name: "Cisco" },
];

const employees = [
  { name: "Francisco", lastName: "Gomez", companyId: 3 },
  { name: "Pedro", lastName: "Martinez", companyId: 1 },
  { name: "Pedro", lastName: "Fernandez", companyId: 2 },
  { name: "Manuel", lastName: "Perez", companyId: 5 },
  { name: "Laura", lastName: "Garcia", companyId: 6 },
  { name: "Juan", lastName: "Rodriguez", companyId: 7 },
  { name: "Maria", lastName: "Lopez", companyId: 8 },
  { name: "Sofia", lastName: "Gonzalez", companyId: 9 },
  { name: "Carlos", lastName: "Hernandez", companyId: 10 },
  { name: "Ana", lastName: "Martinez", companyId: 11 },
  { name: "Luis", lastName: "Sanchez", companyId: 12 },
  { name: "Miguel", lastName: "Ramirez", companyId: 13 },
  { name: "Sara", lastName: "Morales", companyId: 14 },
  { name: "Diego", lastName: "Ortiz", companyId: 15 },
];

// expected result = "Francisco Gomez-Twitter"
// What to do, iterate through the array and extract the name, lastName and associate the companyId to the id of the company.
/* Aqui estamos usando un for of loop para iterar por todos los empleados  y dentro creamos una variable para encontrar en companies solo las que tengan el mismo id con employees
entonces, despues, si hubo un match if company, imprimimos la informacion. (Tuve que googlear aqui porque no me estaba saliendo.)
*/
const sortEmployees = () => {
  for (const employee of employees) {
    const company = companies.find((c) => c.id === employee.companyId);

    if (company) {
      console.log(`${employee.name} ${employee.lastName}-${company.name}`);
    }
  }
};

sortEmployees();
