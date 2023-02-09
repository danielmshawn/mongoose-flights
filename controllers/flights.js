//Need access to Flight model. Require at top.
//Dont quite udnerstand atm waht accessing the
//model above does. Makes us able to add to the docuemtn/object?const Flight = require('../models/flight') 
const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create
};

function show(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight});
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
    res.render('flights/index', { 
        flights,
        title: 'All Flights'
     });
    });
}

function create(req, res) {
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/');
        console.log(flight)
        res.redirect('/flights/');
    });
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'New Flight'
    });
}