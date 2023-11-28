'use strict';

const { createApp } = Vue;

const toDoList = [
    {
        text: 'Mangiare gelato',
        done: true,
    },
    {
        text: 'Fare la spesa',
        done: true,
    },
    {
        text: 'Andare a correre',
        done: true,
    },
    {
        text: 'Fare il bucato',
        done: false,
    },
    
]
  createApp({
    data() {
      return {
        toDoList: toDoList,
      }
    }
  }).mount('#app')