function MathController(app) {
    // Addition
    app.get('/add/:a/:b', function (req, res) {
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)
        res.send(`${a} + ${b} = ${a + b}`)
    })

    // subtract
    app.get('/subtract/:a/:b', function (req, res) {
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)
        res.send(`${a} - ${b} = ${a - b}`)
    })

    // Mutiply
    app.get('/multiply/:a/:b', function (req, res) {
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)
        res.send(`${a} * ${b} = ${a * b}`)
    })

    // Divide
    app.get('/divide/:a/:b', function (req, res) {
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)
        res.send(`${a} / ${b} = ${a / b}`)
    })

}

module.exports = MathController