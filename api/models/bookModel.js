'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  author: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  location: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  userId: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('Books', BookSchema);