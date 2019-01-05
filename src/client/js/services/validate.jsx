import _ from 'lodash';

export const NOT_EMPTY = 'not-empty';
export const INTEGER_BETWEEN = 'integer-between';
export const HTTPS_URL = 'https-url';

const TYPES = {
  [NOT_EMPTY]: notEmpty,
  [INTEGER_BETWEEN]: integerBetween,
  [HTTPS_URL]: httpsUrl
};

function notEmpty(value, error) {
  const str = value.toString().trim();
  
  if (!str.length) {
    return {
      valid: false,
      error
    };
  }
  return {
    valid: true
  };
}

function integerBetween(value, error, min, max) {
  const nbr = parseFloat(value);
  
  if (!_.isInteger(nbr) || nbr < min || nbr > max) {
    return {
      valid: false,
      error
    };
  }
  
  return {
    valid: true
  };
}
  
function httpsUrl(value, error) {
  // const exp = /https:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
  const exp = /https:\/\/([\da-z.-]+).([a-z.]{2,6})([/\w .-]*)*\/?/;
  
  if(!exp.test(value)) {
    return {
      valid: false,
      error: error
    };
  }
  
  return {
    valid: true
  };
}
  
/**
  @param {string} value - value to validate
  @param {array} types - list of validation types to run on value
    [
      ['type-name', 'error-message', ...params]
    ]
*/
export const validate = (value, types) => {
  
  let status = {
    valid: true
  };
  const len = types.length;
  
  for(let i=0; i<len; i++) {
    let [type, error, ...params] = types[i];
    status = TYPES[type].call(null, value, error, ...params);
    
    if (!status.valid) {
      return status;
    }
  }
  
  return status;
}

/*
let {error: nameError, valid: nameValid} = validate('Test name', [
  [NOT_EMPTY, 'Name cannot be empty']
]);

console.log(nameError, nameValid);

let {error: sizeError, valid: sizeValid} = validate(1, [
  [NOT_EMPTY, 'Size cannot be empty'],
  [INTEGER_BETWEEN, 'Size must be an integer between 1 and 1000', 1, 1000]
]);

console.log(sizeError, sizeValid);

                     
let {error: urlError, valid: urlValid} = validate('https://aaa.com', [
  [NOT_EMPTY, 'URL cannot be empty'],
  [HTTPS_URL, 'We only accept https URLs']
]);

console.log(urlError, urlValid);

console.log(nameValid && sizeValid && urlValid);
*/