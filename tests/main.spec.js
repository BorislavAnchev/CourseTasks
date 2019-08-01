const counter = (state, action) => {
  if(typeof state !== 'number') {
      return 0;
  }
  else {
    if(action === 'increment') {
    state += 1;
    }
    else if(action === 'decrement') {
      state -= 1;
    }
    return state;
  }
}

describe('#counter', function () {
  it('should increment current value by 1 and return 1', function () {
    expect(counter(0, 'increment')).to.equal(1);
  });

  it('should increment current value by 1 and return 2', function () {
    expect(counter(1, 'increment')).to.equal(2);
  });

  it('should decrement current value by 1 and return 3', function () {
    expect(counter(4, 'decrement')).to.equal(3);
  });

  it('should decrement current value by 1 and return  2', function () {
    expect(counter(3, 'decrement')).to.equal(2);
  });
  
  it('state should be undefined and counter should return 0', function () {
    expect(counter('decrement')).to.equal(0);
  });

  it('arguments should be undefined and counter should return 0', function () {
    expect(counter()).to.equal(0);
  });

  it('the order of the arguments is wrong counter should return 0', function () {
    expect(counter('decrement', 3)).to.equal(0);
  });

  it('action is undefined and counter should return the current state which is 0', function () {
    expect(counter(0)).to.equal(0);
  });

  it('should decrement current value by 1 and return -1', function () {
    expect(counter(0, 'decrement')).to.equal(-1);
  });

  it('should decrement current value by 1 and return -2', function () {
    expect(counter(-1, 'decrement')).to.equal(-2);
  });

  it('should increment current value by 1 and return -1', function () {
    expect(counter(-2, 'increment')).to.equal(-1);
  });

  it('action is undefined and counter should return the current state which is -1', function () {
    expect(counter(-1)).to.equal(-1);
  });

  it('should increment current value by 1 and return 0', function () {
    expect(counter(-1, 'increment')).to.equal(0);
  });
});