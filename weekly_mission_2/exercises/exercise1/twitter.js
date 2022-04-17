const user = {
    user: "Juan el pro",
    username:"juanos232",
    name:"Juan",
    last_name:"Perez",
    city: "San Jose",
    age: 22,
    bio:"fluyendo",
    getNameAndLastName: function(){
        return `Hi ${this.name} ${this.last_name}`
    },
    getUserNameAndBio: function(){
        return `Username: ${this.username} bio:${this.bio}`
    }
}

const trending_topic = {
    name:"AMLO",
    description:"La revocacion de mandato se llevo a cabo con resultados exitosos",
    total_tweets: "3000,000",
    getNameAndDescription: function(){
        return `Name: ${this.name} Description: ${this.description}`
    }
}

const hashtag = {
    name:"Spider-man",
    total_tweets: "323229",
    emoji:"arañita",
    getNameAndEmoji: function(){
        return `Name: ${this.name} emoji: ${this.emoji}`
    }
}

console.log(hashtag.getNameAndEmoji())
console.log(trending_topic.getNameAndDescription())
console.log(user.getNameAndLastName())