
function home (req, res, next) {
	// return res.send("WELCOME TO REST API UPDATE");
    res.sendFile('C:/GRM_project/client/index.html');
}

module.exports = {
    home: home
}