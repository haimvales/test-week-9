
const HeHasValues = async (req,res,next)=>{
    if(!req.body.username || !req.body.password ||!req.body.username || !req.body.password || Object.keys(req.body).length !== 4){
        return res.status(400).json("Bad Request") 
    }
    else
        next()
}

const IsTheTypeCorrect = async (req,res,next)=>{
    for (const property in req.body){
        if(property !== "ticketsForSale" && typeof( req.body[property])!=='string')
            return res.status(400).json(`${property} is not a string`)}
        if(typeof(req.body.ticketsForSale) !== 'number')
            return res.status(400).json(`ticketsForSale is not a number`)
        next()
}

export {
    HeHasValues,
    IsTheTypeCorrect,
}