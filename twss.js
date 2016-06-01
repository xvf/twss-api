var twssClassifier = require('twss');

module.exports = function(req, res, next) {
  var query = req.body.query
  var botPayload = {
    result: twssClassifier.is(query)
  };

  return res.status(200).json(botPayload);
};
