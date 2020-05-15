import { VideoDetailsGateway } from "../../gateways/videoGateway";

export class GetVideoDetailsUC {
  constructor(private dataBase: VideoDetailsGateway) {}

  async execute(id: string) {
    const details = await this.dataBase.getVideoDetails(id);

    return { details };
  }
}
