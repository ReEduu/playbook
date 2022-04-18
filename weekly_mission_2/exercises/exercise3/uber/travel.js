export default class Travel {
    constructor(start_point,destination,time,driver,passager){
        this.start_point = start_point,
        this.destination = destination,
        this.time = time,
        this.driver = driver,
        this.passager = passager
    }
    getStartPoint (){
        return this.start_point
    }
    getDriver (){
        return this.driver
    }
}