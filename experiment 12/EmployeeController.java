

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController

public class EmployeeController {

    List<Employee> employees =
        new ArrayList<>();

    // CREATE

    @PostMapping("/add")

    public String addEmployee(){

        employees.add(

            new Employee(
                101,
                "Rahul",
                50000
            )
        );

        return "Employee Added";
    }

    // READ

    @GetMapping("/employees")

    public List<Employee> getEmployees(){

        return employees;
    }

    // UPDATE

    @PutMapping("/update")

    public String updateEmployee(){

        return "Employee Updated";
    }

    // DELETE

    @DeleteMapping("/delete")

    public String deleteEmployee(){

        return "Employee Deleted";
    }
}
