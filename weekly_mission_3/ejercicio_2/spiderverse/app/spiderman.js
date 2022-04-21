class Spiderman {
    constructor(name,age,actor,movies,studio){
        this.name = name
        this.actor = actor
        this.age = age
        this.movies = movies
        this.studio = studio
    }

    getActorAndStudio(){
        return `My name is ${this.actor} and my studio is ${this.studio}`
        
    }

}

module.exports = Spiderman