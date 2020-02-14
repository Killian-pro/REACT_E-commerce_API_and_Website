let express = require('express')
let router = express.Router()
let parrainage = require ('./parrainage.js');
const retrieveIp = require('retrieve-ip');
let middleware = require('./middleware.js');


router.get('/', middleware, function (req,res)  {
    parrainage.find({} , (error , results) => {
        res.json(results)
    }  )
})



router.post('/', middleware,function(req,res)  {
    console.log(req.body)
    let body = req.body
    body.parrain= req.user.id
    body.ip = retrieveIp(req)
    let newparrainage = new parrainage(body)
    newparrainage.save((error) => {
        if(error)
        res.send(400 , error)
        else
        res.json(newparrainage)
    })

})





module.exports = router;