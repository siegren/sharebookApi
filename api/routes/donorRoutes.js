'use strict';
module.exports = function(app) {
  var donor = require('../controllers/donorController');

  // todoList Routes
  app.route('/donors')
    .get(donor.list_all_donors)
    .post(donor.create_a_donor);

  app.route('/login')
    .post(donor.login);


  app.route('/donors/:donorId')
    .get(donor.read_a_donor)
    .put(donor.update_a_donor)
    .delete(donor.delete_a_donor);
};
