import { fileJsonToArr } from "../utils/utilsFile.js"

const validateUser = async (req,res,next)=>{
    const {username,password}=  req.params
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



const HeHasValues = async (req,res,next)=>{
    if(!req.body.username || !req.body.password || Object.keys(req.body).length !== 2){
        return res.status(400).json("Bad Request") 
    }

    else
        next()
}

const IsTheTypeCorrect = async (req,res,next)=>{
    for (const property in req.body){
        if(typeof( req.body[property])!=='string')
            return res.status(400).json(`${property} is not a string`)}
        next()
}


export {
    HeHasValues,
    IsTheTypeCorrect,
    validateUser
}