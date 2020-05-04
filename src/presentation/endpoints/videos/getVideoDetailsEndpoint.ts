import { Response, Request } from "express";
import VideoDB from "../../../data/VideosDataBase";
import { GetVideoDetailsUC } from "../../../business/usecases/videos/getVideoDetailsUseCase";

export async function getVideoDetailsEndpoint(req: Request, res: Response) {
    try {
        const dataBase = new VideoDB()
        const useCase = new GetVideoDetailsUC(dataBase)
        const data = await useCase.execute(String(req.query.id))
        res.send(data)
    } catch (err) {
        res.status(err.code || 400).send(err.message)
    }
}