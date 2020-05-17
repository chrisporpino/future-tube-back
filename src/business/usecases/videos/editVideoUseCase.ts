import User from "../../entities/user";
import VideoDB from "../../../data/VideosDataBase";

interface EditVideoInput {
  token: string;
  videoId: string;
  newTitle: string;
  newDescription: string;
}

export default class EditVideoUC {
  constructor(private dataBase: VideoDB) {}

  async execute(input: EditVideoInput) {
    if (!input.token || !input.videoId) {
      throw new Error("Não foram informados todos os dados necessários");
    }

    const video = await this.dataBase.getVideoDetails(input.videoId);

    if (!video) {
      throw new Error("Vídeo não localizado");
    }

    const userId = User.getTokenData(input.token).id

    if (video.userId !== userId) {
      throw new Error ("Não é possível editar. Este vídeo pertence a outro usuário.")
    }

    const newTitle = input.newTitle || video.title
    const newDescription = input.newDescription || video.description

    await this.dataBase.editVideo(
      input.videoId,
      newTitle,
      newDescription
    )    
  }
}
