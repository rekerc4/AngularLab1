"use strict";


function TodoController(){
    let vm = this; 
    vm.arr = [{text: "Do laundry", completed: true}, 
    {text: "Make Dinner", completed: false}, 
    {text: "Pay Bills", completed: true}, 
    {text: "Pick Up Kids", completed: false}]
}




angular.module("todoApp").controller("TodoController", TodoController); 