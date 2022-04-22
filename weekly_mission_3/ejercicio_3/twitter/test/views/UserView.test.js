const UserView = require('./../../app/views/UserView')

describe("Test for user view",()=>{
    test("return a error object when try to create a new user with a new payload",()=>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("return an error object when try to create a new user with a payload with invalid propierties",()=>{
        const payload ={username:null, name:12,id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })
    test("return an error object when try to create a new user with a payload with missing propierties",()=>{
        const payload ={username:"username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })
    test("create a user by a given valid payload",()=>{
        const payload ={username:"Juan", name:"Juano",id:1}
        const result = UserView.createUser(payload)
        expect(result.id).toBe(1)
        expect(result.username).toBe("Juan")
        expect(result.name).toBe("Juano")
    })
})