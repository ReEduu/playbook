class User{
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.lastUpdated = new Date()
        this.dateCreated = new Date()
    }
    getUsername(){
        return this.username;
    }
    getBio(){
        return this.bio
    }
    getDateCreated(){
        return this.dateCreated
    }
    getLastUpdated(){
        return this.lastUpdated
    }

    setBio(bio){
        this.bio = bio
    }

    setUsername(username){
        this.username = username
    }

}
module.exports = User