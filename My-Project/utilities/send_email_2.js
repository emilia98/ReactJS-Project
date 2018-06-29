const nodemailer = require('nodemailer');
const Email = require('email-templates');
const path = require('path');
const templateDir = path.normalize(
  path.join('../', 'views', 'email')
);

module.exports = (email,  activationLink, activationCode) => {
  const template = new Email();
  const locals = {
    activationCode: activationCode,
    activationLink: activationLink,
    // userMail: email
  }

  let rendered;
  renderTemplate();

  async function renderTemplate(activationCode, ) {
    rendered = await template.render(templateDir, locals);
    console.log(rendered);

    const transporter = nodemailer.createTransport({
      host: 'neva.superhosting.bg',
      port: 465,
      secure: true,
      auth: {
        user: 'info@aremixer.com',
        pass: 'aremix-Bulgaria'
      }
    });

    const mailOptions = {
      from: 'info@aremixer.com',
      //to: userMail,
      to: 'emilia_nedialkova@abv.bg',
      subject: 'Sending Email using Node.js',
      html: rendered
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }

    });
  }
}

// console.log(templateDir);

/*
myTemplate.render(templateDir, locals , function (err, result) {
 console.log('hereee');
  console.log(result);
  // result.html 
  // result.text 
    if (err) {
       return console.error(err)
    }

    /*
    

  
 
 */


    // check here what is showing in your result
  /*
}).then(r => {
    console.log(r);
})
*/

