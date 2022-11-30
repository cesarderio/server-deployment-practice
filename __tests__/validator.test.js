'use strict';
const validator = require('../src/middleware/validator');

describe('Validator middleware', () => {
  let req = {query: {name: 'Raphael'}};
  let res = {};
  let next = jest.fn();


  it('validates query as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();

  });


  it('fails appropriately if no query name property', () => {
    req = {query: {notName: 'Raphael'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Query Name Required');
  });
});
