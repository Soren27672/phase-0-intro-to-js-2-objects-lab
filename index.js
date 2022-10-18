// Write your solution in this file!

const employee = {
    name: 'Martha',
    streetAddress: '2567 Helena ct',
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {...employee,[key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    let newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}