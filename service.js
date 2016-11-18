var express = require('express');
var request = require('request');


exports.service = function(serviceName, port, test = false) {
	var app = express();

	app.get('/status', function(req, res) {
	  res
		.status(200)
		.json({
				name: serviceName
			});
	});

  this.start = function(port) {
    this.server = app.listen(port, function() {});


    if(!test) {

      var registerJson= {
        name: serviceName,
        port: port
      };

      request({
          url: "http://localhost:8100/register",
          method: "POST",
          json: true,
          body: registerJson
      }, function (error, response, body){
        if(error) {
            console.log('Error when posting register request');
            console.log(error);
          }
        console.log('Startup - Service registered!');
      });
    }
  };

  this.stop = function() {
    this.server.close();
  };

  return this;
};
