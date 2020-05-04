import { Response, Request } from "express";
import VideoDB from "../../../data/VideosDataBase";
import { GetAllVideosUC } from "../../../business/usecases/videos/getAllVideosUseCase";

export async function getAllVideosEndpoint(req: Request, res: Response) {
    try {
        const dataBase = new VideoDB()
        const useCase = new GetAllVideosUC(dataBase)
        const data = await useCase.execute(Number(req.query.page))
        res.send(data)
    } catch (err) {
        res.status(err.code || 400).send(err.message)
    }
}