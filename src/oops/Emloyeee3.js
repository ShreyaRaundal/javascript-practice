class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // call parent constructor
        this.department = department;
    }

    display() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}

// create object
let manager1 = new Manager("Shreya", 50000, "IT");

// call method
manager1.display();