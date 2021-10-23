let a, b, result;

a = 0; //0,1,1,2
b = 1; //1,1,2,3
result = b; //1,1,2,3

for (x = 1; x <= 10; x++) {
  console.log(result); //1,1,2,3
  result = a + b; //0+1=1,1+1=2,1+2=3,2+3=5,
  a = b; //1,1,2,3
  b = result; //1,2,3,5
}

// User Input

const number = parseInt(prompt('Enter a positive number: '));

let n1, n2, sum;
n1 = 0;
n2 = 1;
sum = n2;

for (x = 1; x <= number; x++) {
  document.write(sum + '<br/>');
  sum = n1 + n2;
  n1 = n2;
  n2 = sum;
}
