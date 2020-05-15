import { Video , VideoDetails } from "../entities/video";

export interface AllVideosGateway {
    getAllVideos(page: number): Promise<Video[]>
}

export interface VideoDetailsGateway {
    getVideoDetails(id: string): Promise<VideoDetails[]>
}