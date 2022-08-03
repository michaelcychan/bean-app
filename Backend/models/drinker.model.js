const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinkerSchema = new Schema({
  firstname: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  password: {
    type: String,
    // required: true
  },
  bean_count: {
    type: Number,
  }
});

const Drinker = mongoose.model('Drinker', drinkerSchema);
module.exports = Drinker;