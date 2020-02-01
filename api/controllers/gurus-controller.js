'use strict';


var mongoose = require('mongoose'),
  Gurus = mongoose.model('Gurus');

exports.list_all_gurus = function(req, res) {
  Gurus.find({}, function(err, guru) {
    if (err)
      res.send(err);
    res.json(guru);
  });
};




exports.add_a_guru = function(req, res) {
  var new_guru = new Gurus(req.body);
  new_guru.save(function(err, guru) {
    if (err)
      res.send(err);
    res.json(guru);
  });
};


exports.read_a_guru = function(req, res) {
  Gurus.findById(req.params.taskId, function(err, guru) {
    if (err)
      res.send(err);
    res.json(guru);
  });
};


exports.update_a_guru = function(req, res) {
  Gurus.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, guru) {
    if (err)
      res.send(err);
    res.json(guru);
  });
};


exports.delete_a_guru = function(req, res) {


  Gurus.remove({
    _id: req.params.taskId
  }, function(err, guru) {
    if (err)
      res.send(err);
    res.json({ message: 'Guru successfully deleted' });
  });
};