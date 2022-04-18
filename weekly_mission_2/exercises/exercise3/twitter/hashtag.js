export default class Hashtag {
    constructor(name,total_tweets,emoji){
        this.name= name,
        this.total_tweets = total_tweets,
        this.emoji = emoji
    }
    getNameAndEmoji(){
        return `Name: ${this.name} emoji: ${this.emoji}`
    }
}