"use strict"

// Exercize 1;  


	const someobj = {
		name:"Armen",
		surname:"Shadoyan",
		age:"20",
		someMeth(){
			console.log(`My name is ${this.name} ${this.surname},i am ${this.age}`)
		}
	}
	someobj.someMeth()
//_______________________________________________________________________________
//Exercize 2;,
//Example 1;
	let input = +prompt("how old are you");

		if(input < 18){
			alert("your age is low")
		}else if(input >= 18){
			alert("it's ok")
		}else{
			alert("wrong text")
		};
//Example 2;
	//	IS a AND b EVEN NUMBERS???
	let a = 24,b = 43;
		
		if(a % 2 === 0 && b % 2 === 0){
			console.log("all is even numbers")
		}else if(a % 2 != 0 && b % 2 != 0){
			console.log("all is odd numbers")
		}else{
			console.log("one is odd and other one is even numbers")
		}
//Example 3;
	function bigestNumber(a,b,c){
			if(a > b && a > c){
				console.log(`${a} is bigest number`)
			}else if(b > a && b > c){
				console.log(`${b} is bigest number`)
			}else{
				console.log(`${c} is bigest number`)
			}
	} bigNumber();

//Example 4;
	function whatSeasonIsIt(months){
		if (months == 1 || 2 || 12){
			console.log("winter")
		}else if(months == 3 || 4 || 5){
			console.log("spring")
		}else if(months == 6 || 7 || 8){
			console.log("summer")
		}else if(months == 9 || 10 || 11){
			console.log("autumn")
		}else {
			console.log("input number between 1 to 12")
		}
}
//Example 5;
//	WRITE A NUMBER BETWEEN 18 TO 30
	function creataNumber(num) {
		if(num >= 18 && num <= 30){
			console.log(true)
		}else if(num < 18){
			console.log("number is low")
		}else{
			console.log("number is high")
		}
	}creataNumber()
//_______________________________________________________________________
//EXERCIZE 3;

		if(5 ==="5"){
			console.log("wrong")
			}else{
					if(5 < (10 - 6)){
						console.log("wrong")
					}else{
							if(5 != 5){
								console.log("wrong")
							}else if(15 % 5 != 0){
							console.log("wrong")
							}else{
								console.log("all answers is wrong")
							}
						 }
				}
//_________________________________________________________________________________
//EXERCIZE 4;
//Example 1;
function someFunc(myname) {
	let answer 
	myname == "Armen"?answer = "it's Me":answer = "it's not me";
	console.log(answer)
}	
	someFunc()
//Example 2;
function mathEquation(num) {
	let problem = 10+(5*5)
	let result
	num == problem?result = "right":result = "wrong";
	console.log(result)
	}
		mathEquation()
//Example 3;
function someFunc2(city) {
	console.log(`the capital of Armenia ${city == "Erevan"?city:console.log("eror")}`)
	}
		someFunc2()
//Examole 4;
function examResults(num) {	
	console.log(`you ${num > 8?num = "pass":num = "fail"} your exam`)
	}
		examResults()
//Example 5;
	console.log(125/(5*5+100)==1?"rigth answer":"wrong answer");

//Example 6;
function negativOrPozitive(getNumber) {
	console.log(getNumber < 0?"negative":"pozitive")
	}
		negativOrPozitive()