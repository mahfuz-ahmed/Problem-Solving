const emplynu = parseInt(prompt('Enter Employee Number: '));

const emplyHour = parseFloat(prompt('Enter Work Hour: '));

const emplyHourRate = parseFloat(prompt('Enter Hour Rate : '));

// var salary = emplyHour * emplyHourRate;
// var totalSalary = emplynu * salary;
// document.write("Total Employee Number= " + emplynu + "<br/>");
// document.write("Per Employee Salary= " + salary + "<br/>");
// document.write("Total Employee Salary= " + totalSalary + "<br/>");

if (emplyHour >= 208) {
  var main = 208 * emplyHourRate;
  var overTime = (emplyHour - 208) * emplyHourRate;
  var bonus = overTime * 0.15;
  salary = main + overTime + bonus;
  totalSalary = emplynu * salary;
  document.write('Total Employer Number= ' + emplynu + '<br/>');
  document.write('Per Employer Main Salary=' + main + '<br/>');
  document.write('Per Employer overtime Salary=' + overTime + '<br/>');

  document.write('Per Employer bonus=' + bonus + '<br/>');
  document.write('Per Employer Salary= ' + salary + '<br/>');
  document.write('Total Employer Salary= ' + totalSalary + '<br/>');
} else {
  var salary = emplyHour * emplyHourRate;
  var totalSalary = emplynu * salary;
  document.write('Total Employer Number= ' + emplynu + '<br/>');
  document.write('Per Employer Salary= ' + salary + '<br/>');
  document.write('Total Employer Salary= ' + totalSalary + '<br/>');
}
