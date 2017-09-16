module.exports = function (app) {

    require("./api/home")(app);
    require("./api/physics")(app);
};