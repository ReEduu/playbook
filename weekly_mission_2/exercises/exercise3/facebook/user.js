export default class User{
    constructor(name, last_name, bio){
        this.name = name,
        this.last_name = last_name,
        this.bio = bio
    }
    friends=[
        {name:"Juan",last_name:"Perez",profile_pic:"juan.png",bio:"q onda"},
        {name:"Manolo",last_name:"Juarez",profile_pic:"mano.png",bio:"q tal"}
    ]
    getBio(){
        return this.bio;
    }
    getFriends(){
        return this.friends;
    }
    }
    