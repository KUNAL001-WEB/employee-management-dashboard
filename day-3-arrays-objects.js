// DAY 3 - ARRAYS AND OBJECTS
// Employee Management Dashboard

// Employee records
const employees = [
    { id: 1, name: "Kunal", department: "IT", salary: 30000, status: "Active" },
    { id: 2, name: "Rahul", department: "HR", salary: 25000, status: "Inactive" },
    { id: 3, name: "Aman", department: "IT", salary: 40000, status: "Active" },
    { id: 4, name: "Priya", department: "Finance", salary: 35000, status: "Active" },
    { id: 5, name: "Rohit", department: "HR", salary: 28000, status: "Inactive" },
    { id: 6, name: "Neha", department: "IT", salary: 45000, status: "Active" },
    { id: 7, name: "Ankit", department: "Marketing", salary: 32000, status: "Active" },
    { id: 8, name: "Sneha", department: "Finance", salary: 38000, status: "Inactive" },
    { id: 9, name: "Vikas", department: "Marketing", salary: 27000, status: "Active" },
    { id: 10, name: "Pooja", department: "HR", salary: 33000, status: "Active" }
];

// forEach - Display all employees

// console.log("ALL EMPLOYEES:");
// employees.forEach(employee => {
   
//     console.log(employee.name,employee.department);
// });

// map - Get employee names

// const employeesName = employees.map((employee)=>{
//     return employee.name
// });
// console.log("EMPLOYEE NAMES:", employeesName);

// filter - Get active employees
// const activeEmployees = employees.filter((employee)=>{
//     return employee.status==="Active"
// });
// console.log("Active Employees:",activeEmployees);

// filter - Get IT employees
// const itEmployess = employees.filter((employee)=>{
//     return employee.department==="IT";
// });
// console.log("IT employees",itEmployess);

// find - Search employee by name
// const searchEmployee = employees.find((employee)=>{
//     return employee.name.toLowerCase()==="kunal"
// })
// console.log("SEARCHED EMPLOYEE", searchEmployee);

// Add an employee property

// const firstEmployee=employees[0];
// firstEmployee.email = "kunal@gamil.com";
// console.log(firstEmployee);

// Update employee department
// firstEmployee.department = "Development"
// console.log("UPDATE EMPLOYEE",firstEmployee);

// Remove a property

// delete firstEmployee.email;
// console.log("REMOVE PROPERTY",firstEmployee);

// Get unique departments

// const departments = [... new Set(employees.map((employee)=>
//      employee.department
// ))]
// console.log(departments);

// Create department-wise lists

// const hrDept = employees.filter((employee)=>employee.department==="HR");
// const market = employees.filter((employee)=>employee.department==="Marketing");

// console.log("HR EMPLOYEES:",hrDept);
// console.log("MARKETING EMPLOYEES:",market);

// Count active employees

// const activeEmployees = employees.filter((employee)=>employee.status==="Active")
// console.log("ACTIVE EMPLOYEE COUNT:", activeEmployees.length);