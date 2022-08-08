const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const baristaSchema = new Schema({
  shop_name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  shop_address: {
    type: String,
  }
});

const Barista = mongoose.model('Barista', baristaSchema);
module.exports = Barista;