import { Response, Request } from "express";
import UploadVideoUC from "../../../business/usecases/videos/uploadVideoUseCase";
import VideoDB from "../../../data/VideosDataBase";

export default async function uploadVideoEndpoint(req: Request, res: Response) {
  try {
    const dataBase = new VideoDB();
    const useCase = new UploadVideoUC(dataBase);

    await useCase.execute({
      token: req.headers.token as string,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
    });

    res.send("Video adicionado com sucesso!");
  } catch (err) {
    res.status(err.code || 400).send(err.message);
  }
}
