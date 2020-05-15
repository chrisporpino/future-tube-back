import { v4 } from "uuid";
import User from "../../entities/user";
import VideoDB from "../../../data/VideosDataBase";
import { Video } from "../../entities/video";

interface UploadVideoInput {
  token: string;
  title: string;
  description: string;
  url: string;
}

export default class UploadVideoUC {
  constructor(private dataBase: VideoDB) {}

  async execute(input: UploadVideoInput) {
    const id = v4();
    const userId = User.getTokenData(input.token).id;
    const newVideo = new Video(
      id,
      input.title,
      input.description,
      input.url,
      userId
    );

    await this.dataBase.uploadVideo(newVideo);

    return {
      message: "Video successfully uploaded.",
    };
  }
}
