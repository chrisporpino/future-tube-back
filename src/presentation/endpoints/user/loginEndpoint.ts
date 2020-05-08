import { Response, Request } from "express";
import UserDB from "../../../data/UserDataBase";
import { LoginUC } from "../../../business/usecases/user/loginUseCase";

export async function loginEndpoint(req: Request, res: Response) {
    try {
        const dataBase = new UserDB()
        const useCase = new LoginUC(dataBase)
        const data = await useCase.execute({
            email: req.body.email,
            password: req.body.password
        })
        res.send(data)
    } catch (err) {
        res.status(err.code || 400).send(err.message)
    }
}