const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  
  if(!Validator.isLength(data.name, {min: 3, max: 30})) {
    errors.name = 'Name must be between 3 and 30 characters';
  }

  if (isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(!Validator.isLength(data.password, {min: 3, max: 30})) {
    errors.password = 'Password must be between 3 and 30 characters';
  }

  if (Validator.equals(data.passowrd, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}