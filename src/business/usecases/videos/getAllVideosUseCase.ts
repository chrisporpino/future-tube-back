import { AllVideosGateway } from "../../gateways/videoGateway";

export class GetAllVideosUC {
    constructor(private dataBase: AllVideosGateway) {}

    async execute(page: number){
        const videos = await this.dataBase.getAllVideos(page)

        return {videos}
    }
}