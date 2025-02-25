import {Request, Response} from "express";
import {userService} from "../services/users.service";



class UserController {
    static getAllUsers (req: Request, res: Response): void {
        const users = userService.getAllUsers();
        res.json({message: "all users", users });
    }

    static getUserById (req: Request, res: Response): void {
        const userId = parseInt(req.params.id);
        const user = userService.getUserById(userId);
        if (!user) {
            res.status(404).json({message: "no user found"});
        }
        res.json({message: "found user", users: user});
    }

    static updateUser(req: Request, res: Response) : void {
        const userId: number = parseInt(req.params.id);
        const {name, species, age, isEndangered, habitat} = req.body;

        if(!name || !species || !age || !isEndangered || !habitat){
            res.status(400).json({message: "Missing required field"});
            return;
        }

        const updatedUser = userService.updateUser(userId, name, species, age, isEndangered, habitat);
        if(!updatedUser){
            res.status(404).json({message: "User not found"});
        }

        res.status(200).json({message: "User updated", user: updatedUser});

    }


    static createUser(req: Request, res: Response): void{
        const {name, species, age, isEndangered, habitat} = req.body;
        if(!name || !species || !age || !isEndangered || !habitat){
            res.status(400).json({message: "Missing required field"});
            return;
        }
        const newUsers = userService.createUser(name, species, age, isEndangered, habitat)

        res.status(201).json({message: "A new user added", user: newUsers});
    }


}


export default UserController;