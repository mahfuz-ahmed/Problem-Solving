const emplynu = parseInt(prompt("Enter Employee Number: "));

const emplyHour = parseFloat(prompt("Enter Work Hour: "));

const emplyHourRate = parseFloat(prompt("Enter Hour Rate : "));

var salary = emplyHour * emplyHourRate;
var totalSalary = emplynu * salary;
document.write("Total Employee Number= " + emplynu + "<br/>");
document.write("Per Employee Salary= " + salary + "<br/>");
document.write("Total Employee Salary= " + totalSalary + "<br/>");
