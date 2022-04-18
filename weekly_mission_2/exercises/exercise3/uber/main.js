import Profile from './profile.js'
import Travel from './travel.js'


const profile1 = new Profile("Juan", "Fernandez", "3.5 stars")
const travel1 = new Travel("CDMX","Oaxaca", "2 hours","Juan Fernandez","Pedro Capo")

console.log(travel1.getStartPoint())
console.log(travel1.getDriver())
console.log(profile1.getNameAndLastName())
