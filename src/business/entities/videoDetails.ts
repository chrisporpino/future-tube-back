export default class VideoDetails {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private url: string,
        private userId: string,
        private name: string,
        private photo: string,
    ) { }
    
    getId = () => this.id
    getTitle = () => this.title
    getDescription = () => this.description
    getUrl = () => this.url
    getUserId = () => this.userId
    getUserName = () => this.name
    getUserPhoto = () => this.photo
}