import User from "../../entities/user";
import VideoDB from "../../../data/VideosDataBase";

export default class DeleteVideoUC {
  constructor(private dataBase: VideoDB) { }

  async execute(token: string, videoId: string) {
    if (!token || !videoId) {
      throw new Error("Dados incorretos")
    }

    const selectedVideo = await this.dataBase.getVideoDetails(videoId)

    if(!selectedVideo) throw new Error("Vídeo não localizado")

    const userId = User.getTokenData(token).id

    if (selectedVideo.userId !== userId) {
      throw new Error("Não é possível deletar. Este vídeo pertence a outro usuário.")
    }

    await this.dataBase.deleteVideo(videoId)
  }
}
