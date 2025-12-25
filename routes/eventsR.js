import express from "express";
import { validateUser } from "../middlerwares/usersM.js";
import { HeHasValues, IsTheTypeCorrect } from "../middlerwares/eventsM.js";
import { createEvent } from "../ctrls/eventsC.js";




const router = express.Router();


router.post("/creator/:username/:password",validateUser,HeHasValues,IsTheTypeCorrect,createEvent);





    
    


export default router;