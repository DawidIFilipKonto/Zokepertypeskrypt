import express, {Application, Request, Response} from 'express';
import usersRoutes from "./routes/users.routes";

const app: Application = express();

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.send("Welcome");
})

app.use("/api/users", usersRoutes);


export default app;