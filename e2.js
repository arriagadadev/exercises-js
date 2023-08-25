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

/*Creamos una funcion auxiliar que va a retornarnos el company name, chequeando antes si el company.id y companyId que pasamos como argumento son el mismo, solo va a retornar ese nombre. */

const getCompanyName = (companyId) => {
  try {
    for (const company of companies) {
      if (company.id === companyId) {
        return company.name;
      }
    }
  } catch (error) {
    return error.message;
  }
};

/* Aqui la variable getEmployees usa la funcion auxuliar getCompanyName y pasa como argumento el companyId del empleado, el cual sera usado por la funcion auxiliar.*/
const getEmployeesInformation = (employees) => {
  const employeesInformation = [];
  employees.forEach((employee) => {
    employeesInformation.push(
      `${employee.name} ${employee.lastName}-${getCompanyName(
        employee.companyId
      )}`
    );
  });
  return employeesInformation;
};

console.log(getEmployeesInformation(employees));
