import User from "../../entities/user";
import VideoDB from "../../../data/VideosDataBase";

interface getUserVideosInput {
  token: string;
  userId: string;
}

export default class GetUserVideosUC {
  constructor(private dataBase: VideoDB) {}

  async execute(input: getUserVideosInput) {
    let userId;

    if (input.userId) {
      userId = input.userId;
    } else if (input.token) {
      userId = User.getTokenData(input.token).id;
    } else {
      throw new Error("Dados incorretos");
    }

    const videos = await this.dataBase.getUserVideos(userId);

    return { videos };
  }
}
