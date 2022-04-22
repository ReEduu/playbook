const User = require('./../models/User')
class UserView
{
    static createUser(user){
        if (user === null)
            return {error:'payload no existe'}
        else if(user.username === null || user.id === null || user.name === null)
            return {error:'necesitan tener un valor valido'}
        else if(user.username === undefined || user.id === undefined || user.name === undefined)
            return {error:'necesitan tener un valor valido'}
        return new User(user.id,user.username,user.name,"nah")
    }
}
module.exports = UserView