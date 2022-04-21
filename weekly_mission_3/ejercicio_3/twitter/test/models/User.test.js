const User = require('./../../app/models/User')

describe("Unit test for User Class",()=>{
    test('Create and User object',()=>{
        const user = new User(1,"Juanpedro","Juan","fluyendo","2020/08/12","2022/02/12")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Juanpedro")
        expect(user.name).toBe("Juan")
        expect(user.bio).toBe("fluyendo")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('Add getters',()=>{
        const user = new User(1,"Juanpedro","Juan","fluyendo","2020/08/12","2022/02/12")
        expect(user.getBio()).toBe("fluyendo")
        expect(user.getUsername()).toBe("Juanpedro")
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()
    })
    test('add setters',()=>{
        const user = new User(1,"Juanpedro","Juan","fluyendo","2020/08/12","2022/02/12")
        user.setBio("JAJAJA")
        expect(user.bio).toBe("JAJAJA")
        user.setUsername("Pedrillo")
        expect(user.username).toBe("Pedrillo")
    })
})