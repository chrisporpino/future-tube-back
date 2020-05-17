import { Response, Request } from "express";
import VideoDB from "../../../data/VideosDataBase";
import EditVideoUC from "../../../business/usecases/videos/editVideoUseCase";

export default async function editVideoEndpoint(req: Request, res: Response) {
  try {
    const dataBase = new VideoDB();
    const useCase = new EditVideoUC(dataBase);

    await useCase.execute({
      token: req.headers.token as string,
      videoId: req.body.videoId,
      newTitle: req.body.newTitle,
      newDescription: req.body.newDescription
    });

    res.status(200).send({ message: "Vídeo editado com sucesso" });
  } catch (err) {
    res.status(err.code || 400).send(err.message);
  }
}
