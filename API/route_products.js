let express = require('express')
let router = express.Router()
let product = require ('./product.js');
const retrieveIp = require('retrieve-ip');
let middleware = require('./middleware.js');
// Import the library:
var cors = require('cors');
var app = express();
app.use(cors());


router.get('/',  function (req,res)  {
    product.find({} , (error , results) => {
        res.json(results)
    }  )
})



router.post('/', function(req,res)  {
    let body = req.body
    body.ip = retrieveIp(req)
    let newProduct = new product(body)
    newProduct.save((error) => {
        if(error)
        res.send(400 , error)
        else
        res.json(newProduct)
    })

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const suppr = await product.deleteOne({_id : id})
    res.json(suppr)
})

router.delete('/all/all', async (req, res) => {
    const suppr = await product.remove()
    res.json(suppr)
})



module.exports = router;