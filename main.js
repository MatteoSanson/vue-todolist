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
      }
    },
    methods() {

    }
  }).mount('#app')