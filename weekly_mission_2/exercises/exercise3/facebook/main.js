import User from './user.js'
import Post from './post.js'
import Biography from './biography.js'


const user1 = new User("Juan", "Perez", "vibrando alto")
const post1 = new Post("2323","Juanpes", "El batman","batman.jpg")
const biography1 = new Biography("Juanpes", "Hola a toda la razita", "Harry Styles")

console.log(biography1.getMusic())
console.log(biography1.getText())
console.log(user1.getFriends())
console.log(post1.getLikes())
console.log(post1.getTextAndImage())