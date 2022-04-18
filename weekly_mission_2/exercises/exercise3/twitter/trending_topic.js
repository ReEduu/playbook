export default class TrendingTopic{
    constructor(name,description,total_tweets){
        this.name = name,
        this.description = description,
        this.total_tweets = total_tweets
    }
    getNameAndDescription (){
        return `Name: ${this.name} Description: ${this.description}`
    }
}