'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GuruSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of an awesome Guru.'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
//   skill_level: {
//     type: [{
//       type: String,
//       enum: ['practitioner', 'beginner', 'intermediate', 'guru']
//     }],
//     default: ['beginner']
//   },
  favorite_course: {
    type: String,
    required: 'Enter your favorite course on A Cloud Guru.'
  },
});

module.exports = mongoose.model('Gurus', GuruSchema);