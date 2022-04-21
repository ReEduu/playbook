const User = require('./../models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"nah")
    }
    static getInfo(user){
        return [user.id,user.username,user.name,user.bio]
    }
    static updateUserUsername(user,username){
        user.username =username
    }
    static getAllUsernames(users){
        return users.map((user)=>user.username)
    }
}

module.exports = UserService