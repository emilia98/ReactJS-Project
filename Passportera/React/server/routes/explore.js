const isAdministarted = require('../middlewares/administration').isAdministrated;
const router = require('express').Router();
const Country = require('../models/Country');
const VisitedCountry = require('../models/Country/VisitedCountry');
const ToVisitCountry = require('../models/Country/ToVisitCountry');
const LovedCountry = require('../models/Country/LovedCountry');
const qs = require('querystring');
const url = require('url');

function sortable (sort) {
    switch (sort) {
        case 'alphabetically': {
            console.log(1);
            return {'name': 1};
        }
        case 'alphabetically-reversed': {
            console.log(-1);
            return {'name': -1};
        }
        default: return {};
    }
}

router.get('/country/all', async (req, res) => {
    let query = qs.parse(url.parse(req.url).query) ;
    let sort = query.sort;

    let sortingObj = sortable(sort);
    let countries = await Country.find({})
    .populate('visitedData')
    .populate('toVisitedData')
    .populate('lovedData')
    .sort(sortingObj);

    /*
    if (sortingObj === null) {
        countries = await
       
    } else {
        Country.find({});
    }
   
    console.log(countries);
   */
    let countriesAsResult = [];
    for(let country of countries) {
        let usersVisited = country.visitedData.users_local.length;
        let usersToVisit = country.toVisitedData.users_local.length;
        let usersLoved = country.lovedData.users_local.length;

        let currentCountry = {
            id: country._id,
            displayName: country.abbreviatedName,
            isoCode: country.isoCode,
            visited: usersVisited,
            toVisit: usersToVisit,
            loved: usersLoved,
            timesListed: usersVisited + usersToVisit
        };


        countriesAsResult.push(currentCountry);
       // console.log(currentCountry);
    }

    if(sort === 'most-popular') {
        countriesAsResult = countriesAsResult.sort((a, b) => b.timesListed - a.timesListed);
        // console.log('POP');
    }
    
    res.status(200).json({
        countries: countriesAsResult
    });
});

module.exports = router;
