

module.exports = function(app) {
    var physicsController = require('../controller/physicsController')
    app.get('/physics', physicsController.home);   
};