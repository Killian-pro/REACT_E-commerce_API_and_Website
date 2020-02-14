var jwt = require('jsonwebtoken')


const checkToken = (req,res,next) => {
    let token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, 'KIKI',function(err ,decoded ){
        if(err)
         res.json(err)
         req.user=decoded
         next()
    })
    
}

module.exports = checkToken