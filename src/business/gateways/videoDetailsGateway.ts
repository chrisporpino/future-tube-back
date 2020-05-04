import VideoDetails from "../entities/videoDetails";

export default interface VideoDetailsGateway {
    getVideoDetails(id: string): Promise<VideoDetails[]>
}