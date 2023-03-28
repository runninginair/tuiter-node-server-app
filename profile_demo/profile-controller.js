function ProfileController(app) {

    app.get('/profile/:name', function(req, res) {
        const profile = {
            "name": req.params.name,
            "age": 20,
            "salary": 10000
        }
        res.send(profile)
    })

    app.get('/login', function(req, res) {
        res.send('Login')
    })

    app.get('/register', function(req, res) {
        res.send('Register')
    })

}


module.exports = ProfileController