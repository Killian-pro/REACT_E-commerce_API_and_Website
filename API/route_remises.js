let express = require('express')
let router = express.Router()
let remises = require ('./remises.js');
const retrieveIp = require('retrieve-ip');


router.get('/', function (req,res)  {
    remises.find({} , (error , results) => {
        res.json(results)
    }  )
})


router.post('/', function(req,res)  {
    console.log(req.body)
    let body = req.body
    let newremises = new remises(body)
    newremises.save((error) => {
        if(error)
        res.send(400 , error)
        else
        res.json(newremises)
    })

})






module.exports = router;