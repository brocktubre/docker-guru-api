'use strict';
module.exports = function(app) {
  var gurusList = require('../controllers/gurus-controller.js');

  // gurusList Routes
  app.route('/gurus')
    .get(gurusList.list_all_gurus)
    .post(gurusList.add_a_guru);


  app.route('/gurus/:guruId')
    .get(gurusList.read_a_guru)
    .put(gurusList.update_a_guru)
    .delete(gurusList.delete_a_guru);
};
