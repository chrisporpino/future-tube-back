import { Response, Request } from "express";
import VideoDB from "../../../data/VideosDataBase";
import GetUserVideosUC from "../../../business/usecases/videos/getUserVideosUseCase";

export default async function getUserVideosEndpoint(req: Request, res: Response) {
  try {
    const dataBase = new VideoDB();
    const useCase = new GetUserVideosUC(dataBase);

    const data = await useCase.execute({
      token: req.headers.token as string,
      userId: req.query.userId as string,
    });

    res.status(200).send(data);
  } catch (err) {
    res.status(err.code || 400).send(err.message);
  }
}
