 /* alert("Hello to JS")
*/
  console.log("Hola K ASE");

  var table = "Normal Table";
  let chair = "One chair";
  console.log(table);
  console.log(chair);

  let testBoolean = true;
  console.log(testBoolean);

  let testNumber = 10;
  console.log(testNumber);

  let testString = 'text';
  console.log(testString);

  let testBooleanObject = new Boolean(true);
  console.log(testBooleanObject);

  let testNumberObject = new Number(10);
  console.log(testNumberObject);

  let testSringObject = new String('text');
  console.log(testSringObject);

  
let operator_a = 3;
let operator_b = 3;
let expo = operator_a ** operator_b;
let inc = ++operator_a;
let dec = --operator_a;

console.log(expo);
console.log(inc);
console.log(dec);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull = null;
console.log(typeof(testNull));

let testUndefined;
console.log(testUndefined);

var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5,6,7);
var fourth_array = new Array(3,5,"Seville",true, third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log(third_array[1]);
console.log(fourth_array[4][0]);

console.log(fourth_array.length);

console.log(fourth_array.push("Spain"));

third_array[2] = 9;

console.log(third_array);

var arrayFinal = new Array (third_array, fourth_array);

console.log(arrayFinal);

arrayFinal [1][2] = 8;
console.log(arrayFinal)