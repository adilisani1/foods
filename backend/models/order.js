const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    qty: {
        type: Number,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("Order", Order);
