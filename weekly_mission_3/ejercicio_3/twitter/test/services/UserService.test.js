const UserService = require('./../../app/services/UserService')

describe("Unit test for User Service",()=>{
    test('1)Create new User',()=>{
        const user = UserService.create(1,"Juanpedro","Juano")
        expect(user.username).toBe("Juanpedro")
        expect(user.name).toBe("Juano")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test('2) Get all user data',()=>{
        const user = UserService.create(1,"Juanpedro","Juano")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("Juanpedro")
        expect(userInfoList[2]).toBe("Juano")
        expect(userInfoList[3]).toBe("nah")
    })
    test('3). Update username,',()=>{
        const user = UserService.create(1,"Juanpedro","Juano")
        UserService.updateUserUsername(user,"elpancho")
        expect(user.username).toBe("elpancho")
    })
    test('4) Given a list of users give me the list of usernames',()=>{
        const user1 = UserService.create(1,"Juanpedro","Juano")
        const user2 = UserService.create(2,"Pedros","picapedro")
        const user3 = UserService.create(3,"J balvin","Jose")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("Juanpedro")
        expect(usernames).toContain("Pedros")
        expect(usernames).toContain("J balvin")
    })
})