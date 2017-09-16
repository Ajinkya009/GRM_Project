module.exports = function(app) {
	var homeController = require('../controller/homeController');
    app.get('/', homeController.home);
};