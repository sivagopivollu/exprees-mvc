/**
 * configuration file to setup app variables
 */
var path = require('path');
module.exports = function () {
    const env = process.env.NODE_ENV || 'development';
    var config = {};
    config['env'] = '<>project name<>';
    config['secret_key'] = 'Site';

    //config user roles
    config['user_roles'] = {
        'admin': 1,
        'user': 2
    };

    //configure common variables
    config['admin_api'] = '/admin';
    config['user_api'] = '/user';
    config['APPPATH'] = path.join(__dirname, './'); //app path
    config['VIEWSPATH'] = path.join(__dirname, './views/'); //app path
    config['LIBPATH'] = path.join(__dirname, 'libraries'); //libraries path
    config['CONPATH'] = path.join(__dirname, 'controllers'); //controllers path
    config['MODPATH'] = path.join(__dirname, 'models'); //modelas path

    //Environment variables
    if (env == "production" || env == "staging") {
        config["BASE_URL"] = "http://localhost:3000/";
        config['MONGODB_URI'] = '';
        config['DATABASE'] = '';
    } else {
        config["BASE_URL"] = "http://localhost:3000/";
        config['MONGODB_URI'] = 'mongodb://127.0.0.1:27017/<>database name<>';
        config['DATABASE'] = '<>database name<>';
    }

    return config;
};