const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates').EmailTemplate;

var path = require('path');

var templateDir = path.join(__dirname, 'views', 'email');

var myTemplate = new EmailTemplate(templateDir);
var locals = {
      email: 'example@mail.com',
      name: {
           first: 'Mamma',
           last: 'Mia'
      }
 }

// let mailTemplate = `<h1> Confirmation email </h1><a href="http://localhost:8080">Confoirm email</a>`;

myTemplate .render(locals , function (err, result) {
  console.log(result);
  // result.html 
  // result.text 
    if (err) {
       return console.error(err)
    }

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
    html: mailTemplate
  };
 
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
}); 


    // check here what is showing in your result
    transport.sendMail({
        from: 'Spicy Meatball <spicy.meatball@spaghetti.com>',
        to: locals.email,
        subject: 'Mangia gli spaghetti con polpette!',
        html: results.html,
        text: results.text
     }, function (err, responseStatus) {
        if (err) {
            return console.error(err)
        }
        console.log(responseStatus.message)
        return responseStatus;// return from status or as you need;
    })
})

/*
module.exports = (userMail, activationCode) => {
  mailTemplate = mailTemplate.replace('{codeHere}', activationCode);
  console.log('Sending...');
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
      html: mailTemplate
    };
   
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  }); 
}
*/
/*
function send(userMail, activationCode) {
    mailTemplate = mailTemplate.replace('{codeHere}', activationCode);
    console.log('Sending...');
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
        to: 'userMail',
        subject: 'Sending Email using Node.js',
        html: mailTemplate
      };
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
}
*/
/*
module.exports = () => {
    console.log('Sending...');
    const transporter = nodemailer.createTransport({
        host: 'mail.aremixer.com',
        port: 25,
        secure: true,
        auth: {
          user: 'info@aremixer.com',
          pass: 'aremix-Bulgaria'
        }
    });
    
    const mailOptions = {
        from: 'info@aremixer.com',
        to: 'emilia_nedialkova@abv.bg',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
    
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
}
*/
