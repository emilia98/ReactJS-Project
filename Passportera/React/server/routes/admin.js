const isAdministarted = require('../middlewares/administration').isAdministrated;
const router = require('express').Router();
const Country = require('../models/Country');
const VisitedCountry = require('../models/Country/VisitedCountry');
const ToVisitCountry = require('../models/Country/ToVisitCountry');
const LovedCountry = require('../models/Country/LovedCountry');
// const CountryInfo = require('../models/CountryInfo');

router.post('/manage/country/new', isAdministarted, async (req, res) => {
    let fullName = req.body.fullName;
    let displayName = req.body.abbreviated;
    let isoCode = req.body.isoCode.toLowerCase();
    let latitude = req.body.latitude * 1;
    let longitude = req.body.longitude * 1;

    latitude = isNaN(latitude) ? 0 : latitude;
    longitude = isNaN(longitude) ? 0 : longitude;

    let errors = {};

    let entriesWithIsoCode = await Country.findOne({isoCode: isoCode});

    if(entriesWithIsoCode) {
        return res.json({
            exists: true
        })
    };
/*

  
*/
    /*
    if (fullName.length === 0) {
        errors.fullName = 'Country name cannot be empty!';
    }

    if ( !(val.length > 0 && val.length <= 20)) {
        errors.displayName = 'Country abbreviation should be between 1 and 20 characters long!';
    }

    if (isoCode.length === 0) {
        errors.isoCode = 'ISO Country code should be exactly 2 characters long';
    }

    

    if (!(latitude >= -90 && latitude <= 90)) {
        errors.latitude = 'Latitude should be between -90 and 90!';
    }
*/
    

    let country;

    try {
        country = await Country.create({
            name: fullName,
            abbreviatedName: displayName,
            isoCode: isoCode,
            latitude: latitude,
            longitude: longitude
        });
    } catch (err) {
        // console.log(err);
        for(let props in err.errors) {
            errors[props] = err.errors[props].message;
            // console.log();
        }

        
       // console.log('dabe');
        // console.log(err.errors);
        return res.json(errors);
        // errors.fullName = err.errors.name.message;
        // return res.json(errors);
    }

    // console.log('here');
    let visitedCountry = await VisitedCountry.create({
        countryId: country._id
    });
    let toVisitCountry = await ToVisitCountry.create({
        countryId: country._id
    });
    let lovedCountry = await LovedCountry.create({
        countryId: country._id
    });

    await country.update({ $set:
       {
        visitedData: visitedCountry._id,
        toVisitedData: toVisitCountry._id,
        lovedData: lovedCountry._id
       }
     });


    res.status(200).json(null);
});

module.exports = router;
