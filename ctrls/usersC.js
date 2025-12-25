

import { fileJsonToArr, writeFileToJson } from "../utils/utilsFile.js"






const createUser = async (req, res) => {
    try {
        const users = await fileJsonToArr("./db/users.json")
        const findUser = users.find((user) => {return user.username === req.body.username}) 
        if(findUser !== undefined)
            return res.status(409).json("Conflict")
        else{
        users.push(req.body)
        await writeFileToJson("./db/users.json",users)
        return res.json({"message": "User registered successfully"})
        }
    }catch (err){ 
        return {err:err}
    }
}



export{
    createUser
}











