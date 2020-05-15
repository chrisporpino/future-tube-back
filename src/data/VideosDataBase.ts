import MainDB from "./MainDatabase";
import { AllVideosGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";

export default class VideoDB extends MainDB implements AllVideosGateway {
  private videosTableName = "futuretube_videos";

  async getAllVideos(page: number = 0) {
    try {
        const offset = (page - 1) * 10;

        const result = await this.connection.raw(`
                SELECT id, title, url
                FROM ${this.videosTableName}
                LIMIT 10
                OFFSET ${offset};
            `);

      return result[0];
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  }

  async getVideoDetails(id: string) {
    try {
        const result = await this.connection.raw(`
            SELECT ${this.videosTableName}.*, name, photo
            FROM futuretube_videos
            JOIN futuretube_USERS on userId = futuretube_USERS.id
            WHERE futuretube_videos.id = '${id}';
        `);
      return result[0][0];
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  }

  async uploadVideo(video: Video) {
    try {
        await this.connection.raw(`
            INSERT INTO ${
              this.videosTableName
            } (id, title, description, url, userId)
            VALUES (
                "${video.getId()}",
                "${video.getTitle()}",
                "${video.getDescription()}",
                "${video.getUrl()}",
                "${video.getUserId()}"
            )
        `);
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  }
}
