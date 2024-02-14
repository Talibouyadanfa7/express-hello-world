class VideoData {
    constructor(title, description, category, level,duration, language, image, price, fullDescription, videoResume, videoByUrl) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.level = level;
        this.duration = duration;
        this.language = language;
        this.image = image;
        this.price = price;
        this.fullDescription = fullDescription;
        this.videoResume = videoResume;
        this.videoByUrl = videoByUrl;
    }
}

module.exports = VideoData;