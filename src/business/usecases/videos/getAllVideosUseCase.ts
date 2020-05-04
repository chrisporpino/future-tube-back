import VideoGateway from "../../gateways/videoGateway";

export class GetAllVideosUC {
    constructor(private dataBase: VideoGateway) {}

    async execute(page: number){
        const videos = await this.dataBase.getAllVideos(page)

        return {videos}
    }
}