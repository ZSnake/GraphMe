exports.register = function (server, options, next) {

  server.route({
    method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: ["../../client/app", "../../client/bower_components"]
        }
      },
      config: {
      auth: false
    }
  });

  next();
};

exports.register.attributes = {
  name: 'index'
};
