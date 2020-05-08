import { Response, Request } from "express";
import UserDB from "../../../data/UserDataBase";
import SignupUC from "../../../business/usecases/user/SignupUseCase";

export default async function signupEndpoint(req: Request, res: Response) {
    try {
        const dataBase = new UserDB()
        const useCase = new SignupUC(dataBase)
        await useCase.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthDate: req.body.birthdate,
            photo: req.body.photo
        })
        res.send("Usuário cadastrado com sucesso!")
    } catch (err) {
        res.status(err.code || 400).send(err.message)
    }
}