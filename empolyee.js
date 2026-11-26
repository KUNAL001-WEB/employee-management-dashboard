// Day 1 - JavaScript Basics

const employees = [
    {
        id: 1,
        name: "Kunal Thakur",
        department: "IT",
        salary: 35000,
        status: "Active"
    },
    {
        id: 2,
        name: "Rahul Sharma",
        department: "IT",
        salary: 30000,
        status: "Active"
    },
    {
        id: 3,
        name: "Amit Kumar",
        department: "Finance",
        salary: 28000,
        status: "Inactive"
    },
    {
        id: 4,
        name: "Neha Singh",
        department: "Marketing",
        salary: 45000,
        status: "Active"
    },
    {
        id: 5,
        name: "Rohit Gupta",
        department: "IT",
        salary: 50000,
        status: "Active"
    },
    {
        id: 6,
        name: "Anjali Sharma",
        department: "HR",
        salary: 32000,
        status: "Inactive"
    },
    {
        id: 7,
        name: "Vikas Yadav",
        department: "Finance",
        salary: 38000,
        status: "Active"
    },
    {
        id: 8,
        name: "Pooja Mehta",
        department: "IT",
        salary: 42000,
        status: "Active"
    },
    {
        id: 9,
        name: "Karan Malhotra",
        department: "Marketing",
        salary: 25000,
        status: "Inactive"
    },
    {
        id: 10,
        name: "Sneha Kapoor",
        department: "HR",
        salary: 55000,
        status: "Active"
    }
];


// 1. Display all employees
// console.log("All Employees", employees);


// 2. Total number of employee
// console.log("Total Employee:", employees.length);

// 3. Access first employee's name
// console.log("First Employee Name:", employees[0].name);

// 4. Check employee status
// const employee = employees[0]
// if (employee.status === "Active") {
//     console.log(employee.name + " is working");
// } else {
//     console.log(employee.name + " is not working");
// }

// 5. Check salary condition
// const salary = employees[4].salary;
// if (salary >= 40000) {
//     console.log(" Good salary");
// } else {
//     console.log("Salary is less than 40000");
// }

// 6. Print employees with salary above 30000
// console.log("Employees with salary above 30000:");

// for (const emp of employees) {
//   if (emp.salary > 30000) {
//     console.log(emp.name);
//   }
// }

// 7. Count active employees
let activeCount = 0;

for (const emp of employees) {
  if (emp.status === "Active") {
    activeCount++;
  }
}
console.log("Active Employees:", activeCount);

// 8. Count inactive employees
let inactiveCount = 0;

for (const emp of employees) {
  if (emp.status === "Inactive") {
    inactiveCount++;
  }
}

console.log("Inactive Employees:", inactiveCount);
