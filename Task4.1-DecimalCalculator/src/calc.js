let memoryField = document.getElementById("memoryField");
let currentInput = document.getElementById("currentInput");

let resetCurrentInputFlag = false;
//let initialInput = (currentInput.value === '0' && memoryField.value === '');
export const insert = (input) => {
  let operatorRegEx = /(\+|-|\*|\/)$/; // String ends with +, -, x or /.
  let check = operatorRegEx.test(memoryField.value); // If the string ends with an operator
  if(input === '.') {  // The input is a decimal point.
    let decimalRegEx = /\./;
    let decimalCheck = decimalRegEx.test(currentInput.value);
    if(!decimalCheck) {
      if(resetCurrentInputFlag){
        currentInput.value = input;
      }
      else {
        currentInput.value += input;
      }
    }
  }
  else if(input !== '+' && input !== '-' && input !== '*' && input !== '/') { // The input is a number.
    if(currentInput.value === '0' || resetCurrentInputFlag) { // If it is the initial input,
      currentInput.value = input;                                // set the value to be the input.
    }
    else {
      currentInput.value += input;
    }
    if(resetCurrentInputFlag) {
      resetCurrentInputFlag = false;
    }
  }
  else { // The input is an operator.
    
    if(memoryField.value === '') {
      if(currentInput.value === '0') {
        memoryField.value = '0' + input; // Works.
      }
      else {
        memoryField.value = currentInput.value + input; // Works.
      }
    }
    else if(!resetCurrentInputFlag) {
      memoryField.value += currentInput.value + input;
    } 
    else if(check) { // May be useless check. Works without it, too.
      let limit = memoryField.value.length - 1;
      memoryField.value = (memoryField.value).slice(0, limit) + input;
    }
    resetCurrentInputFlag = true; // Works as intended.
  }  
}

export const clean = () => {
  currentInput.value = '0';
  memoryField.value = '';
}

export const del = () => {
  let limit = currentInput.value.length - 1;
  if(!resetCurrentInputFlag) { // If the last pressed button is not an operator - check further.
    if(currentInput.value.length === 1) { // If it is the last or the only digit - set currentInput to 0.
      currentInput.value = '0';
    }
    else {
      currentInput.value = currentInput.value.slice(0, limit); // If there is currentInput and it it more than 1 digits - remove the last digit.
    }
  }
}

export const equal = () => {
  if(resetCurrentInputFlag) {
    let limit = memoryField.value.length-1;       // If the last pressed butto was an operator
    memoryField.value = memoryField.value.slice(0, limit); 
    currentInput.value = eval(memoryField.value); // we don't calculate the currentInput as it has
    memoryField.value = '';                       // already been added the memoryField.
  }
  else {
    currentInput.value = eval(memoryField.value + currentInput.value); //If the last pressed button was a number
    memoryField.value = '';   // Works.                                  we calculate both the memoryField and currentInput.
  }                                                                      
}