export default class Profile {
    constructor(name,last_name,grade){
        this.name = name,
        this.last_name = last_name,
        this.grade = grade,
        this.payment =[
            {credit_card: "Mastrercard"},
            {paypal:"Jsan@adsa.com"}
        ]
    }
    
    getNameAndLastName (){
        return `Name: ${this.name} ${this.last_name}`
    }
    getGrade (){
        return `Grade: ${this.grade}`
    }
}

