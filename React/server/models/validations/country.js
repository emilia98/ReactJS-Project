function checkName (val) {
  return val.length > 0;
}

function checkISOCode (val) {
    return val.length === 2;
}

let nameValidator = [
  {
    validator: checkName,
    msg: 'Country name cannot be empty!'
  }
];

let codeValidator = [
    {
        validator: checkISOCode,
        msg: 'ISO Country code should be exactly 2 characters long!'
    }
];

module.exports = {
  name: nameValidator,
  code: codeValidator
};
