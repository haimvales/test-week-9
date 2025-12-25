import { fileJsonToArr, writeFileToJson } from "../utils/utilsFile.js"


const createUser = async (req, res) => {
    try {
        const events = await fileJsonToArr("./db/events.json")
        const findEvent = events.find((event) => {return event.eventName === req.body.eventName}) 
        if(findEvent === undefined)
            return res.status(404).json("Not Found")
        const numCard = findEvent.ticketsForSale
        if (req.body.quantity > numCard)
            return res.status(400).json("out of")
        else{
            const findEventIndex = events.findIndex((event) => {return event.eventName === req.body.eventName}) 
            events[findEventIndex].quantity -= req.body.quantity
            const receipts = await fileJsonToArr("./db/receipts.json")
            const newReceipts = {username:req.body.username,password:req.body.password,eventName:req.body.eventName,quantity:req.body.quantity}
            receipts.push(newReceipts)
            await writeFileToJson("./db/events.json",events)
            await writeFileToJson("./db/receipts.json",receipts)
        }    
    }catch (err){ 
        return {err:err}
    }
}



