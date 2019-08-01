describe('#insert()', function () {
  let currentInput = { value: '0'};
  let memoryField = { value: ''};
  let resetCurrentInputFlag = false;
  let initialInput = (currentInput.value === '0' && memoryField.value === '');
  const insert = (input) => {
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
        let limit = memoryField.value.length - 1; // Removes the last symbol. 
        memoryField.value = memoryField.value.slice(0, limit) + input; // Seems to be working now.
      }
      resetCurrentInputFlag = true; // Works as intended.
    }  
  }

  it('initialInput should be true', function () {
    expect(initialInput).to.equal(true);
  });

  it('The display of the calculator should show only 0', function () {
    expect(currentInput.value).to.equal('0');
    expect(memoryField.value).to.equal('');
  });
  
  it('currentInput should be 1', function () {
    insert('1');
    expect(currentInput.value).to.equal('1');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 12', function () {
    insert('2');
    expect(currentInput.value).to.equal('12');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 123', function () {
    insert('3');
    expect(currentInput.value).to.equal('123');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 1234', function () {
    insert('4');
    expect(currentInput.value).to.equal('1234');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 12345', function () {
    insert('5');
    expect(currentInput.value).to.equal('12345');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 123456', function () {
    insert('6');
    expect(currentInput.value).to.equal('123456');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 1234567', function () {
    insert('7');
    expect(currentInput.value).to.equal('1234567');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 12345678', function () {
    insert('8');
    expect(currentInput.value).to.equal('12345678');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 123456789', function () {
    insert('9');
    expect(currentInput.value).to.equal('123456789');
    expect(memoryField.value).to.equal('');
  });

  it('currentInput should be 1234567890', function () {
    insert('0');
    expect(currentInput.value).to.equal('1234567890');
    expect(memoryField.value).to.equal(''); 
  });
 
  it('currentInput should be 1234567890, memoryField should be 1234567890+', function () {
    insert('+');
    expect(currentInput.value).to.equal('1234567890');
    expect(memoryField.value).to.equal('1234567890+'); 
    expect(memoryField.value.length).to.equal(11);
  });

  it('check should be true', function () {
    let testRegEx = /(\+|-|\*|\/)$/;
    let testString = '1234567890+';
    let check = testRegEx.test(testString);
    expect(check).to.equal(true);
  });

  it('currentInput should be 1234567890, memoryField should be 1234567890-', function () {
    insert('-');
    expect(memoryField.value.length).to.equal(11);
    expect(currentInput.value).to.equal('1234567890');
    expect(memoryField.value).to.equal('1234567890-'); 
  });

  it('currentInput should be 1234567890, memoryField should be 1234567890/', function () {
    insert('/');
    expect(memoryField.value.length).to.equal(11);
    expect(currentInput.value).to.equal('1234567890');
    expect(memoryField.value).to.equal('1234567890/'); 
  });

  it('currentInput should be 1, memoryField should be 1234567890/', function () {
    insert('1');
    expect(currentInput.value).to.equal('1');
    expect(memoryField.value).to.equal('1234567890/');
  })

  it('currentInput should be 1, memoryField should be 1234567890/1+', function () {
    insert('+');
    expect(currentInput.value).to.equal('1'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+');
  })

  it('currentInput should be 5, memoryField should be 1234567890/1+', function () {
    insert('5');
    expect(currentInput.value).to.equal('5'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+');
  })

  it('currentInput should be 1, memoryField should be 1234567890/1+5+', function () {
    insert('+');
    expect(currentInput.value).to.equal('5'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+');
  })

  it('currentInput should be 5, memoryField should be 1234567890/1+', function () {
    insert('1');
    expect(currentInput.value).to.equal('1'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+');
  })

  it('currentInput should be 1, memoryField should be 1234567890/1+5+', function () {
    insert('+');
    expect(currentInput.value).to.equal('1'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+1+');
  })

  it('currentInput should be 2', function () {
    insert('2');
    expect(currentInput.value).to.equal('2'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+1+');
  });

  it('currentInput should be 2.', function () {
    insert('.');
    expect(currentInput.value).to.equal('2.'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+1+');
  });

  it('currentInput should be 2.', function () {
    insert('.');
    expect(currentInput.value).to.equal('2.'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+1+');
  });

  it('currentInput should be 2.', function () {
    insert('+');
    expect(currentInput.value).to.equal('2.'); // to equal eval()
    expect(memoryField.value).to.equal('1234567890/1+5+1+2.+');
  });
});

// == End of insert() tests ==

describe('#clean()', function () {
  let currentInput = { value: '12345'};
  let memoryField = { value: '1+23+4-'};
  const clean = () => {
    currentInput.value = '0';
    memoryField.value = '';
  }
  it('should set currentInput to 0 and memoryField to "" ', function ()  {
    clean();
    expect(currentInput.value).to.equal('0');
    expect(memoryField.value).to.equal('');
  });
});

// == End of clean() tests ==

describe('#del()', function () {
  let currentInput = { value: '12345'};
  let memoryField = { value: '1+23+4-'};
  let resetCurrentInputFlag = false;
  const del = () => {
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
  it('should remove the last digit of currentInput - 12345', function ()  {
    del();
    expect(currentInput.value).to.equal('1234');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('should remove the last digit of currentInput - 1234', function ()  {
    del();
    expect(currentInput.value).to.equal('123');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('should remove the last digit of currentInput - 123', function ()  {
    del();
    expect(currentInput.value).to.equal('12');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('should remove the last digit of currentInput - 12', function ()  {
    del();
    expect(currentInput.value).to.equal('1');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('currentInput (1) should change from 1 to 0', function ()  {
    del();
    expect(currentInput.value).to.equal('0');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('currentInput (0) should stay 0', function ()  {
    del();
    expect(currentInput.value).to.equal('0');
    expect(memoryField.value).to.equal('1+23+4-');
  });

  it('currentInput (456) should stay 456', function ()  {
    currentInput = { value: '456'};
    memoryField = { value: '456+'};
    resetCurrentInputFlag = true;    
    del();
    expect(currentInput.value).to.equal('456');
    expect(memoryField.value).to.equal('456+');
  });
});

// == End of del() tests ==

describe('#equal', function () {
  let resetCurrentInputFlag = false;
  let currentInput = { value: '35'};
  let memoryField = { value: '12+10+'};
  const equal = () => {
    if(resetCurrentInputFlag) {
      let limit = memoryField.value.length-1;       // If the last pressed butto was an operator
      memoryField.value = memoryField.value.slice(0, limit); 
      currentInput.value = eval(memoryField.value); // we don't calculate the currentInput as it has
      memoryField.value = '';                       // already been added the memoryField.
    }
    else {
      currentInput.value = eval(memoryField.value + currentInput.value); //If the last pressed button was a number
      memoryField.value = '';   // Works.                                  // we calculate both the memoryField and currentInput.
    }                                                                      
  }

  it('calculates the whole expression', function () {
    equal();
    expect(currentInput.value).to.equal(12+10+35);
    expect(memoryField.value).to.equal('');
  });

  it('calculates the whole expression', function () {
    resetCurrentInputFlag = true; // The last pressed button was an operator.
    currentInput.value = '10'; 
    memoryField.value = '35-10+'; 
    equal();
    expect(currentInput.value).to.equal(35-10);
    expect(memoryField.value).to.equal('');
  });

  it('calculates the whole expression', function () {
    resetCurrentInputFlag = true; // The last pressed button was an operator.
    currentInput.value = '10'; 
    memoryField.value = '35*10/'; 
    equal();
    expect(currentInput.value).to.equal(350);
    expect(memoryField.value).to.equal('');
  });

  it('calculates the whole expression', function () {
    resetCurrentInputFlag = true; // The last pressed button was an operator.
    currentInput.value = '10'; 
    memoryField.value = '35/10.'; 
    equal();
    expect(currentInput.value).to.equal(3.5);
    expect(memoryField.value).to.equal('');
  });

  it('calculates the whole expression', function () {
    resetCurrentInputFlag = true; // The last pressed button was an operator.
    currentInput.value = '10'; 
    memoryField.value = '20+10*10-160/2-'; 
    equal();
    expect(currentInput.value).to.equal(40);
    expect(memoryField.value).to.equal('');
  });
});

// == End of equal() tests ==