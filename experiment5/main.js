let employees = [];

function addEmployee(){

    let name = document.getElementById("name").value;

    let id = document.getElementById("id").value;

    let salary = parseInt(
        document.getElementById("salary").value
    );

    let department =
        document.getElementById("department").value;

    let employee = {
        name,
        id,
        salary,
        department
    };

    employees.push(employee);

    alert("Employee Added");
}

function displayEmployees(){

    let result = "";

    for(let emp of employees){

        result +=
        "<p>" +
        emp.name + " | " +
        emp.id + " | " +
        emp.salary + " | " +
        emp.department +
        "</p>";
    }

    document.getElementById("output").innerHTML = result;
}

function filterEmployees(){

    let filtered =
        employees.filter(emp => emp.salary > 50000);

    let result = "";

    for(let emp of filtered){

        result +=
        "<p>" +
        emp.name + " | " +
        emp.salary +
        "</p>";
    }

    document.getElementById("output").innerHTML = result;
}

function totalSalary(){

    let total = 0;

    for(let emp of employees){
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "<h3>Total Salary = " + total + "</h3>";
}

function averageSalary(){

    let total = 0;

    for(let emp of employees){
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary = " + avg + "</h3>";
}