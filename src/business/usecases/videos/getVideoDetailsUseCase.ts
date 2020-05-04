import VideoDetailsGateway from "../../gateways/videoDetailsGateway";

export class GetVideoDetailsUC {
    constructor(private dataBase: VideoDetailsGateway) {}

    async execute(id: string){
        const details = await this.dataBase.getVideoDetails(id)

        return {details}
    }
}