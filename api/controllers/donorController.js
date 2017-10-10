'use strict';


var mongoose = require('mongoose'),
  Donor = mongoose.model('Donors');

exports.list_all_donors = function(req, res) {
  Donor.find({}, function(err, donor) {
    if (err)
      res.send(err);
    res.json(donor);
  });
};

exports.login = function(req, res) {
  var user = req.body;
  var a = 'INVALID'
  Donor.find({"email": user.email, "password": user.password}, function(err, donor) {
    if (err)
      res.send(err);
      res.json(donor);
  });
};



exports.create_a_donor = function(req, res) {
  var new_donor = new Donor(req.body);
  new_donor.save(function(err, donor) {
    if (err)
      res.send(err);
    res.json(donor);
  });
};


exports.read_a_donor = function(req, res) {
  Donor.findById(req.params.donorId, function(err, donor) {
    if (err)
      res.send(err);
    res.json(donor);
  });
};


exports.update_a_donor = function(req, res) {
  Donor.findOneAndUpdate({_id: req.params.donorId}, req.body, {new: true}, function(err, donor) {
    if (err)
      res.send(err);
    res.json(donor);
  });
};


exports.delete_a_donor = function(req, res) {


  Donor.remove({
    _id: req.params.donorId
  }, function(err, donor) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};



