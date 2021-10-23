let a, b, result;

a = 0; //0,1,1,2
b = 1; //1,1,2,3
result = b; //1,1,2,3

for (x = 0; x < 10; x++) {
  document.write(result + "<br/>"); //1,1,2,3
  result = a + b; //0+1=1,1+1=2,1+2=3,2+3=5,
  a = b; //1,1,2,3
  b = result; //1,2,3,5
}
