import { Router } from "express";
import auth from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";
import { addSizes, getController } from "../controllers/size.controller.js";

const SizeRouter = Router()

SizeRouter.post('/add',auth,admin,addSizes)
SizeRouter.get('/get',auth,getController)

export default SizeRouter