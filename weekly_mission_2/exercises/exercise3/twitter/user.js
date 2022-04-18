export default class User {
    constructor(user,username,name,last_name,city,age,bio){
        this.user = user,
        this.username = username,
        this.name = name,
        this.last_name = last_name
        this.city = city,
        this.age = age,
        this.bio = bio
    }

    getNameAndLastName (){
        return `Hi ${this.name} ${this.last_name}`
    }
    getUserNameAndBio (){
        return `Username: ${this.username} bio:${this.bio}`
    }
}