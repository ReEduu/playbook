import Hashtag from './hashtag.js'
import User from './user.js'
import TrendingTopic from './trending_topic.js'


const user1 = new User("Juansa", "juanse","Juan", "Fernandez", "GTO","26","aqui pasando el rato")
const hashtag1 = new Hashtag("SIALAREFORMA","243","No hay")
const trending_topic1 = new TrendingTopic("PS5","Hay nuevos juegos","53222")

console.log(hashtag1.getNameAndEmoji())
console.log(trending_topic1.getNameAndDescription())
console.log(user1.getNameAndLastName())