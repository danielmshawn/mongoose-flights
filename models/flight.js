const mongoose = require('mongoose');
//Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    destination: {
        airport: { type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD']   
    },
        arrival: Date
 }}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: { type: String, 
        enum:['American', 'Southwest', 'United', 'Alaskan', 'Jet Blue'] 
            },
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD'] },
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {
        type: Date, 
        default: function() {
            return new Date().getFullYear()+1;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);