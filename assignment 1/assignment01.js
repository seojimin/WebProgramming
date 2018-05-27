
/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: __Jimin Seo_____ Student ID: __145803169___ Date: ___2 Feb 2018___
*
********************************************************************************/

/*****************************
* Task 1
*****************************/
var student_name = "Jimin Seo";
var number_course = 4;
var program = "CPD";
var part_time = true;

var part_true_false = (part_time == true) ? "have" : "don't have"; 

console.log( "My name is " + student_name + "and I’m in " + program + "program. I’m taking " + number_course + "course in this semester");
console.log( "My name is " + student_name + "and I’m in " + program + "program. I’m taking " + number_course + "course in this semester  and I " +part_true_false + " a part‐time job now.");

/*****************************
* Task 2
*****************************/
var year = 2018;
var age = prompt("Please enter your age:");
var my_year = Number(year) - Number(age);

console.log("You were born in the year of" + my_year + ".");

var expect_year = prompt("Enter the number of years you expect to study in the college:");
var graduate_year = Number(year) + Number(expect_year) - 1;

console.log("You will graduate from Seneca college in the year of" + graduate_year + ".");

/*****************************
* Task 3
*****************************/

var celsius = prompt("Celsius temperature:"); 
var fahrenheit = Number(celsius) * 1.8 + 32;
console.log(celsius + "°C is " +fahrenheit+ "°F");

var f = prompt("Fahrenheit temperature:"); 
var c = (Number(f)-32)/1.8;
console.log( f +"°F is "+ c +"°C.");

/*****************************
* Task 4
*****************************/

for (var i = 0; i < 11; i++){
  if(i%2==0){
    console.log(i + "is even");
  }else{
    console.log(i + "is odd");
  }
} 
  
/*****************************
* Task 5
*****************************/
var num1=3;
var num2=8; 
var num3=11;
var num4=7;
var largeNum;
var greatNum;

function largerNum(num1, num2){
  if(num1 > num2){
   largeNum = num1;
  }else{
   largeNum = num2; 
  }
  return largeNum;
}

function greaterNum(num3, num4){
  if(num1 > num2){
   greatNum = num1;
  }else{
   greatNum = num2; 
  }
  return greatNum;
}

console.log ("The larger number of "+num1+" and "+num2+ " is " + largerNum(num1,num2));
console.log ("The larger number of "+num3+" and "+num4+ " is " + greaterNum(num3,num4));

/*****************************
* Task 6
*****************************/
var score_1= 70;
var score_2= 50;
var score_3= 40; 
var return_num;

function Evaluator (score){
   if (score>= 50)
   {return_num = "true"}
   else 
   {return_num = "false"}
    return return_num; 
}

console.log ( "Average grater than or equal to 50 : " + Evaluator (score_1));
console.log ( "Average grater than or equal to 50 : " + Evaluator (score_2));
console.log ( "Average grater than or equal to 50 : " + Evaluator (score_3));


/*****************************
* Task 7
*****************************/

var mark1= 75;
var mark2= 97;
var mark3= 69;

var Grader = function (mark){
     if (mark >= 80)
     grade='A';
     else if (mark >= 70)
     grade='B';
     else if (mark >= 60)
     grade='C';
     else if (mark >= 50)
     grade='D';
     else 
     grade="F";
  
     return grade; 
}

console.log("This semester grade is : " + Grader(mark1));
console.log("This semester grade is : " + Grader(mark2));
console.log("This semester grade is : " + Grader(mark3));

/*****************************
* Task 8
*****************************/

function showMultiples (num, numMultiples){
  for (var i= 1;i<= numMultiples;i++){
      var total = num * i 
      console.log(num + " x " + i + " = " + total);
  }
}

showMultiples(5,3);
showMultiples(4,2);
showMultiples(5,5);









