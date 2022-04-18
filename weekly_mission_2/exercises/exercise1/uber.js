const profile = {
    name: "Jose",
    last_name: "Sanchez",
    grade: "4.5 stars",
    payment:[
        {credit_card: "Mastrercard"},
        {paypal:"Jsan@adsa.com"}
    ],
    getNameAndLastName: function(){
        return `Name: ${this.name} ${this.last_name}`
    },
    getGrade: function(){
        return `Grade: ${this.grade}`
    }
}

const travel ={
    start_point:"GDL",
    destination:"CDMX",
    time:"4 hours",
    driver:"Juan Jose Cruz",
    passager:"Simolomeno Cruz",

    getStartPoint: function(){
        return this.start_point
    },
    getDriver: function(){
        return this.driver
    }
}

console.log(travel.getStartPoint())
console.log(travel.getDriver())
console.log(profile.getNameAndLastName())