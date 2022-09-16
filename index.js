// Write your solution in this file!
const employee = {
    name: 'Megan',
    streetAddress: '12 Main',
}

function updateEmployeeWithKeyAndValue (employee, key, value){
    const emp = {...employee};
    emp[key] = value;

    return emp;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
};
function deleteFromEmployeeByKey(employee, key){
    const emp1 = {...employee};
    delete emp1[key]
    return emp1
};
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}