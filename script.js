function sumNumber(){
var number_one = document.getElementById("numberOne").value

var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) + parseInt(number_two))

var showAnswer = document.getElementById("sum").innerHTML = answer
}

function subtract(){
var number_one = document.getElementById("numberOne").value

var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) - parseInt(number_two))

var showAnswer = document.getElementById("sum").innerHTML = answer
}

function divide(){
var number_one = document.getElementById("numberOne").value

var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) / parseInt(number_two))

var showAnswer = document.getElementById("sum").innerHTML = answer
}

function multiply(){
var number_one = document.getElementById("numberOne").value

var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) * parseInt(number_two))

var showAnswer = document.getElementById("sum").innerHTML = answer
}
