var login = require('../../models/admin/login_model');

module.exports.controller = function (app) {

    /**
     * login controller
     */
    app.get('/admin/login', function (req, res) {
        var params = {
            "user_email": 'admin@admin.com',
            "user_password": '123456'
        };
        login.login(req.db, params, function (error, result) {
            if(result){
                res.status(200).send('login page');
            }
        });
    });
    app.post('/admin/logout', function (req, res) {
       
    });
    


}