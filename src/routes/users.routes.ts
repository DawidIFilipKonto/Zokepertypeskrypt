import express , {Request, Response} from "express";
import UsersControllers from "../controllers/users.controllers";

const userRouter = express.Router();

userRouter.get("/", UsersControllers.getAllUsers)
userRouter.get("/:id",UsersControllers.getUserById)
userRouter.post("/", UsersControllers.createUser);
userRouter.put("/:id", UsersControllers.updateUser);

export default userRouter;