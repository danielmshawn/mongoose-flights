const mongoose = require('mongoose');
//Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: { 
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
    //  How do I deal with this flight object? do this? With ObjectIf...
    // tells me to include ref: 'Flight' to enable population
})

module.exports = mongoose.model('Ticket', ticketSchema)

