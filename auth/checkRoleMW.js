module.exports = function(role) {
    return function(req, res, next) {
        const user = req.user
        if(user){
            if(user.roles && Array.isArray(user.roles) && user.roles.includes(role)){
                next()
            }else{
                req.status(403).json({message: "can't touch this."})
            } 
        } else{
            req.status(401).json({message: "you cannot pass."})
        }
    }
} 