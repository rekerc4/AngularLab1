"use strict";



function TodoController(){
    let vm = this; 
    vm.arr = [{text: "Do laundry", completed: true}, 
    {text: "Make Dinner", completed: false}, 
    {text: "Pay Bills", completed: true}, 
    {text: "Pick Up Kids", completed: false}]
    vm.addTask = (newTask) => {
        console.log(newTask.newTask);
        if(!newTask.newTask){
            return; 
        }
        else{
        console.log(typeof newTask.newTask.text);
        vm.arr.push({text: angular.copy(newTask.newTask.text), completed: false});
        console.log(vm.arr);
        }

    }
    vm.deleteTask = (index) =>{
        console.log(index);
        vm.arr.splice(index, 1); 
    }
    vm.completeTask = (index) => {
        vm.arr[index].completed = true; 
    }
}






angular.module("todoApp").controller("TodoController", TodoController); 