import { Router } from "express";
import { CreateCarController } from "./controllers/CreateCarController";
import { DeleteCarController } from "./controllers/DeleteCarController";
import { GetAllCarsController } from "./controllers/GetAllCarsController";
import { GetOneCarController } from "./controllers/GetOneCarController";
import { UpdateCarController } from "./controllers/UpdateCarController";

const router = Router();

const createCarController = new CreateCarController();
const getAllCarsController = new GetAllCarsController();
const getOneCarController = new GetOneCarController();
const updateCarController = new UpdateCarController();
const deleteCarController = new DeleteCarController();

router.post('/car', createCarController.handle)
router.get('/car', getAllCarsController.handle)
router.get('/car/:id', getOneCarController.handle)
router.put('/car/:id', updateCarController.handle)
router.delete('/car/:id', deleteCarController.handle)

export {router};