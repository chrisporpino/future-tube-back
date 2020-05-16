import { Response, Request } from "express";
import VideoDB from "../../../data/VideosDataBase";
import DeleteVideoUC from "../../../business/usecases/videos/deleteVideoUseCase";

export default async function deleteVideoEndpoint(req: Request, res: Response) {
  try {
    const dataBase = new VideoDB();
    const useCase = new DeleteVideoUC(dataBase);

    await useCase.execute(req.headers.token as string, req.params.videoId);

    res
        .status(200)
        .send({ message: "Vídeo deletado com sucesso" })
  } catch (err) {
    res
        .status(err.code || 400)
        .send(err.message)}
}
