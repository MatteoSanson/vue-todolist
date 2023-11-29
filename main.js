'use strict';

const { createApp } = Vue;

const toDoList = [
    {
        text: 'Mangiare gelato',
        done: false,
    },
    {
        text: 'Fare la spesa',
        done: false,
    },
    {
        text: 'Pulire casa',
        done: true,
    },
    {
        text: 'Andare a correre',
        done: false,
    },
    {
        text: 'Fare il bucato',
        done: true,
    },
]; 

createApp({
    data() {
      return {
        toDoList: toDoList,
        newToDo: "",
      }
    },
    methods: {
        cancel(index){
            console.log('Hai cliccato', index);
            this.toDoList.splice(index, 1);
        },
        addToDo() {
            const toDoText = this.newToDo.trim();
            if (toDoText !== "") {
                this.toDoList.push({ text: toDoText, done: false });
            }
            this.newToDo = "";
        },
        changeStat(index) {
            console.log('click sul div', this.toDoList[index]);
            this.toDoList[index].done = !this.toDoList[index].done;
        },
      },
}).mount('#app')