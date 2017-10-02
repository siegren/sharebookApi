'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DonorSchema = new Schema({
  email: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('Donors', DonorSchema);