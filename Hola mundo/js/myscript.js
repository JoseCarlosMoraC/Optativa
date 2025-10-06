 /* alert("Hello to JS")

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
*/
/*
var third_array = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

/*for(var i=0; third_array.length > i; i++){
console.log(third_array[i]);
}*/

/*
for(var i=third_array.length-1;i>=0;i--){
console.log(third_array[i]);
}
*/

/*
var i = third_array.length-1;
for(;i>=0;i--){
  console.log(third_array[i])
}
*/

/*third_array.forEach(function myFunction(item) {
  console.log(item); 
});
*/
let today = new Date();
let first_october = new Date(2025, 9,1);
console.log(today);
console.log(first_october);
console.log(today.getDate());

if(today>first_october){
  console.log("Today is after to first octuber");

}else{
  console.log("Today is before to first octuber");
}
  function myFirstFunction(){
    console.log("Thank you for you click");
  }

    function mySecondFunction(){
    console.log("Thank you for you interest");
  }
  function myThirdFunction(mensaje){
console.log ("Pesao")
console.log(mensaje)
  }


var div = document.getElementsByTagName("div");
console.log(div);
var second_div = document.querySelector("#my_second_div");
console.log(second_div);

function $(selector){
  return document.querySelectorAll(selector);

}
console.log($("#my_third_div"))
