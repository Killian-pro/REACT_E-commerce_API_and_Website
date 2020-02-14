let express = require('express')
let router = express.Router()
let mid = require('./middleware.js');
let commandes = require('./commandes.js');




router.get('/', function (req, res) {
    commandes.find({}, (error, results) => {
        res.json(results)
    })
})



router.post('/', mid, function (req, res) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(req.body)
    let body = req.body
    body.date = today;
    let newCommandes = new commandes(body)
    newCommandes.save((error) => {
        if (error)
            res.send(400, error)
        else
            res.json(newCommandes)
    })

})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    commandes.find({ users: id }, (error, results) => {
        res.json(results)
    })
})



module.exports = router;