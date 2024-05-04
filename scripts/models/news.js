// ES6 (2015) Standards
class News{
    constructor(title, desc , url, image){
        this.title = title;
        this.desc = desc;
        this.url = url;
        this.image = image;
        this.isRead = false;
        this.isReadLater = false;
    }
}
export default News;