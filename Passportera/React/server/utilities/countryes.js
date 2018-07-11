const User = require('../models/User');

(() => {
  return storeEntry();
})();

async function storeEntry () {
    let user = new User({
        username: 'didaka',
        hashedPassword: '45612',
        email: 'email',
        salt: 'sfsafsaf'
      });

      let newUser;

  try {
    newUser = await user.save();
    console.log(newUser);
    // sendEmail(); 
  } catch (err) {
    let errors = [];

    for (let error in err.errors) {
      errors.push(err.errors[error].message);
    }
    console.log(err);
  }
}
/*
async function storeEntry (entry) {
    let country = new Country({
        name: entry.name,
        ISOCode: entry.code
    });

    let newUser;
      try {
        newUser = await country.save();
        console.log(newUser);
      } catch(err) {
        console.log(err);
      }
    
   // console.log(country);
    
     //console.log('hteeerer');
     /*
    console.log(newCountry);
    try {
        newCountry = await country.save();
        console.log(newCountry);
    } catch (err) {
        console.log('therere')
        console.log(err);
        return;
    }

    console.log('HERE');
    
}
*/
/*
const fs = require('fs');
const path = require('path');
const filePath = path.normalize(
  path.join(__dirname, 'countries.json')
);

let readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
};

(async () => {
    let file = await readFile(filePath);
    let data = JSON.parse(file);

    // console.log(data);
    for (let entry of data) {
        // console.log(entry);
      storeEntry(entry);
        // break;
    }
})();

async function storeEntry (entry) {
    // console.log('init');
    let country = new Country({
        name: entry.name,
        ISOCode: entry.code,
        selo: 4
    });
    
   // console.log(country);
    
     let newCountry = await country.save();
    console.log(newCountry);
   /* try {
        newCountry = await country.save();
        console.log(newCountry);
    } catch (err) {
        console.log('therere')
        console.log(err);
        return;
    }

    console.log('HERE');
    
}
*/