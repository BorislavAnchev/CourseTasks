import "./main.scss";
import { insert, clean, del, equal } from './calc.js';

const button1 = document.getElementById('button_1');
const button2 = document.getElementById('button_2');
const button3 = document.getElementById('button_3');
const button4 = document.getElementById('button_4');
const button5 = document.getElementById('button_5');
const button6 = document.getElementById('button_6');
const button7 = document.getElementById('button_7');
const button8 = document.getElementById('button_8');
const button9 = document.getElementById('button_9');
const button0 = document.getElementById('button_0');
const buttonC = document.getElementById('button_C');
const buttonDel = document.getElementById('delete_button');
const buttonPlus = document.getElementById('addition_button');
const buttonMinus = document.getElementById('substraction_button');
const buttonMultiplication = document.getElementById('multiplication_button');
const buttonDivision = document.getElementById('division_button');
const buttonDecimal = document.getElementById('decimal_button');
const buttonEqual = document.getElementById('equals_button');

button1.addEventListener('click', function() {
  insert('1');
});

button2.addEventListener('click', function() {
  insert('2');
});

button3.addEventListener('click', function() {
  insert('3');
});

button4.addEventListener('click', function() {
  insert('4');
});

button5.addEventListener('click', function() {
  insert('5');
});

button6.addEventListener('click', function() {
  insert('6');
});

button7.addEventListener('click', function() {
  insert('7');
});

button8.addEventListener('click', function() {
  insert('8');
});

button9.addEventListener('click', function() {
  insert('9');
});

buttonC.addEventListener('click', function() {
  clean();
});

buttonDel.addEventListener('click', function() {
  del();
});

buttonPlus.addEventListener('click', function() {
  insert('+');
});

buttonMinus.addEventListener('click', function() {
  insert('-');
});

buttonMultiplication.addEventListener('click', function() {
  insert('*');
});

buttonDivision.addEventListener('click', function() {
  insert('/');
});

buttonDecimal.addEventListener('click', function() {
  insert('.');
});

buttonEqual.addEventListener('click', function() {
  equal();
});

button0.addEventListener('click', function() {
  insert('0');
});



