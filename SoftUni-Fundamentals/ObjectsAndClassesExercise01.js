function Employees(arr) {

    for (let EmployeesName of arr) {

        let EmployeesInfo = {}

        EmployeesInfo.name = EmployeesName;
        EmployeesInfo.PersonalNum = EmployeesName.length;

        console.log(`Name: ${EmployeesInfo.name} -- Personal Number: ${EmployeesInfo.PersonalNum}`);

    }


}