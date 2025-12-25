import express from "express";
import { HeHasValues , IsTheTypeCorrect, validateUser} from "../middlerwares/usersM.js";

import { createUser } from "../ctrls/usersC.js";
import { HeHasValuesr, IsTheTypeCorrectr, validateUserb } from "../middlerwares/receiptsM.js";



const router = express.Router();




router.post("/register",HeHasValues,IsTheTypeCorrect,createUser);
router.post("/tickets/buy",validateUserb,HeHasValuesr,IsTheTypeCorrectr,createUser);



export default router;


























