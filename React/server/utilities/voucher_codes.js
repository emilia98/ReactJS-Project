const codeGenerator = require('voucher-code-generator');
let currentYear = new Date().getFullYear();

module.exports.generateForActivation = () => {
  let activationCode = codeGenerator.generate({
    prefix: 'activate-',
    postfix: '-' + currentYear,
    length: 6,
    charset: codeGenerator.charset('alphanumeric')
  });

  return activationCode;
};
