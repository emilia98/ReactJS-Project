const User = require('../models/User');
const Activator = require('../models/Activator');
const sendEmail = require('../utilities/send_email_2');
const encryption = require('../utilities/encryption');
const voucherCodes = require('../utilities/voucher_codes');
const shortid = require('short-id');



module.exports.registerPost = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let repeat = req.body.repeat;
  let email = req.body.email;


  let salt = encryption.generateSalt();
  let hashedPassword = encryption.generateHashedPassword(salt, password);

  console.log(req.body);
  if (repeat !== password) {
    res.status(402).json('Both passwords should match');
    res.end();
    return;
  }

  if (password.length <= 3 || password.length > 30) {
    res.status(402).json('The password should be between 3 and 30 characters long!');

    res.end();
    return;
  }

  let user = new User({
    username: username,
    hashedPassword: hashedPassword,
    email: email,
    salt: salt
  });

  let newUser;
  let activationLink = shortid.generate();
  let activationCode = voucherCodes.generateForActivation();

  try {
    newUser = await user.save();
    // sendEmail(); 
  } catch (err) {
    let errors = [];

    for (let error in err.errors) {
      errors.push(err.errors[error].message);
    }
    res.status(402).json(errors);
    return;
  }

  let activator;
  // let modifiedCode = 
  


  try {
    activator = await new Activator({
      activationLink: activationLink,
      userId: newUser._id,
      activationCode: activationCode
    }).save();
  } catch (err) {
    res.status(402).json({ server: 'Error while sending confimation email. Contact us to solve this problem!'});
    return;
  }

  sendEmail(email, activationLink, activationCode);
  // console.log(activator);

  res.status(200).json('Successfully created a user!');
  /*
  req.login(user, (error, user) => {
    if (error) {
      res.status(402).json('Authentication is unsuccessful!');
      return;
    }

   // console.log(req.user);
     // req.user.profilePicture = 'https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg';
    // res.redirect('/');
   // console.log(req.user);
 
   // res.cookie('session', value, { expires: Date + 1800000 });
  });
  res.status(200).json('Successfully created a user');*/
};


module.exports.loginPost = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = await User.findOne({username: username});

  if (!user) {
    res.status(402).json('Incorrect username!');
    return;
  }

  if (!user.authenticate(password)) {
    res.status(402).json('Incorrect password!');
    return;
  }

  req.login(user, (error, user) => {
    if (error) {
      res.status(402).json('Authentication is unsuccessful!');
      return;
    }
    res.json('Logged in!');
  });
};

module.exports.activatePost = async (req, res) => {
  //console.log(req.url);
  let activationId = req.params.id;
  let activation = await Activator.findOne({
    activationLink: activationId
  });

  // console.log(req)
  //console.log(window.location.href);

  if (!activation) {
    //console.log('*'.repeat(''))
    res.status(402).json({
      singleError: 'Wrong or expired link for profile activation!'
    });
    return;
  }


// console.log('*'.repeat(20));
  console.log(req.body);
  console.log(activation);
};
