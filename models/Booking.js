const mongoose = require('mongoose')
const {Schema} = mongoose;
const bookingSchema = new Schema({
    place: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Place'},
    user: {type: mongoose.Schema.Types.ObjectId, require: true},
    checkIn: {type: String, require: true},
    checkOut: {type: String, require: true},
    guests: {type: Number, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},
    mobile: {type: Number, require: true},
})

const BookingModel = mongoose.model('Booking', bookingSchema);
module.exports = BookingModel;
