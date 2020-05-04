import Video from "../entities/video";

export default interface VideoGateway {
    getAllVideos(page: number): Promise<Video[]>
}