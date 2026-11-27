const employees = [
    { id: 1, name: "Kunal", department: "IT", salary: 30000, status: "Active" },
    { id: 2, name: "Rahul", department: "HR", salary: 25000, status: "Inactive" },
    { id: 3, name: "Aman", department: "IT", salary: 40000, status: "Active" },
    { id: 4, name: "Priya", department: "Finance", salary: 35000, status: "Active" },
    { id: 5, name: "Rohit", department: "HR", salary: 28000, status: "Inactive" },
    { id: 6, name: "Neha", department: "IT", salary: 45000, status: "Active" },
    { id: 7, name: "Vikas", department: "Finance", salary: 32000, status: "Active" },
    { id: 8, name: "Anjali", department: "HR", salary: 27000, status: "Active" },
    { id: 9, name: "Mohit", department: "IT", salary: 38000, status: "Inactive" },
    { id: 10, name: "Sneha", department: "Finance", salary: 42000, status: "Active" }
];

// Problem 1: Print all employee names

// for (const employee of employees) {
//     console.log(employee.name);
// }

// Problem 2: Count active employees
// let count = 0;
// for (const employee of employees) {
//     if(employee.status==="Active"){
//         count++;
//     }

// }
// console.log("Actve Employees:",count);

// Problem 3: Count inactive employees
// let count = 0;
// for (const employee of employees) {
//     if(employee.status==="Inactive"){
//         count++;
//     }
// }

// console.log("Inactive Employees:",count);

// Problem 4: Calculate total salary

// let TotalSalary = 0;
// for (const employee of employees) {
//     TotalSalary= TotalSalary+employee.salary;
// }
// console.log(TotalSalary);

// Problem 5: Calculate average salary

// let TotalSalary = 0;
// for (const employee of employees) {
//     TotalSalary += employee.salary;
// }

// const AverageSalary = TotalSalary/employees.length;
// console.log("Average Salary:",AverageSalary);

// Problem 6: Find the highest-paid employee

// let highestPaid = employees[0];
// for (const employee of employees) {
//     if (highestPaid.salary < employee.salary) {
//         highestPaid = employee;
//     }
// }
// console.log(highestPaid);

// Problem 7: Find employees from the IT department

// for (const employee of employees) {
//     if(employee.department==="IT"){
//         console.log(employee.name);
//     }
// }

// let i=0;
// while (i<employees.length) {
//     if(employees[i].department==="IT"){
//         console.log(employees[i].name);
//     }
//     i++
// }

// for (let i = 0; i < employees.length; i++) {
//    if(employees[i].department==="IT"){
//             console.log(employees[i].name);
//         }
        
// }

// Problem 8: Find employees earning more than ₹30,000

// let i= 0
// while (i<employees.length) {
//     if(employees[i].salary>30000){
//         console.log(employees[i].name);
//     }
//     i++
// }

// for (const employee of employees) {
//     if(employee.salary>30000){
//         console.log(employee.name);
//     }
// }

// for (let i = 0; i < employees.length; i++) {
//    if(employees[i].salary>30000){
//     console.log(employees[i].name);
//    }
    
// }

// Problem 9: Search for an employee by name

// const searchName = "Kunal";
// let foundEmployee = null;

// for (const employee of employees) {
//     if(employee.name.toLowerCase()===searchName.toLowerCase()){
//         foundEmployee=employee;

//         break;
//     }
// }
// if (foundEmployee) {
//     console.log("Found Employee",foundEmployee);
// } else {
//     console.log("Employee not found");
// }


// Problem 10: Find the lowest-paid employee

// let lowestSalary = employees[0];
// let i = 1;
// while (i<employees.length) {
//     if(employees[i].salary<lowestSalary.salary){
//         lowestSalary=employees[i];
       
//     }
//     i++;
// }
// console.log(lowestSalary.name, lowestSalary.salary);


// let lowestSalary = employees[0];
// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].salary<lowestSalary.salary){
//         lowestSalary=employees[i];
//     }
// }
// console.log(lowestSalary.name, lowestSalary.salary);

// let lowestSalary = employees[0];
// for (const employee of employees) {
//     if(employee.salary<lowestSalary.salary){
//         lowestSalary=employee
//     }
// }
// console.log(lowestSalary.name, lowestSalary.salary);
