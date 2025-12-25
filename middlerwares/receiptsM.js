import { fileJsonToArr } from "../utils/utilsFile.js"

const validateUserb = async (req,res,next)=>{
    const {username,password}=  req.body
    let users = null
    try{
       users = await fileJsonToArr("./db/users.json") 
    }catch(err){
        res.json({err:err.name})
    }
    const findUser = users.find((user) => {return user.username === username && user.password === password})
    if (findUser){
        next()        
    }
    else
        return res.status(401).json({msg:'Unauthorized'}) 
}


const HeHasValuesr = async (req,res,next)=>{
    if(!req.body.username || !req.body.password ||!req.body.eventName || !req.body.quantity|| Object.keys(req.body).length !== 4){
        return res.status(400).json("Bad Request") 
    }

    else
        next()
}

const IsTheTypeCorrectr = async (req,res,next)=>{
    for (const property in req.body){
        if(property !== "quantity" && typeof( req.body[property])!=='string')
            return res.status(400).json(`${property} is not a string`)}
        if(typeof(req.body.quantity) !== 'number')
            return res.status(400).json(`quantity is not a number`)
        next()
}

export {
    HeHasValuesr,
    IsTheTypeCorrectr,
    validateUserb
}