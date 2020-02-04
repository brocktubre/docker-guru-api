'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GuruSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of an awesome Guru.'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  favorite_course: {
    type: String,
    required: 'Enter your favorite course on A Cloud Guru.'
  },
});

module.exports = mongoose.model('Gurus', GuruSchema);