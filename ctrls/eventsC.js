import { fileJsonToArr, writeFileToJson } from "../utils/utilsFile.js"



const createEvent = async (req, res) => {
    try {
        const events = await fileJsonToArr("./db/events.json")

        
        const findEvent = events.find((event) => {return event.eventName === req.body.eventName}) 
        if(findEvent !== undefined)
            return res.status(409).json("Conflict")

        events.push(req.body)
        await writeFileToJson("./db/events.json",events)
        return res.json({"message": "Event created successfully"
})
        
    }catch (err){ 
        return {err:err}
    }
}



export{
    createEvent
}

