function home (req, res, next) {

    // return res.send("WELCOME TO REST API UPDATE");
    res.render('index.html');

}

module.exports = {
    home: home
}