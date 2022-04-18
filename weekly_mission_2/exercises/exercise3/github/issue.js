export default class Issue {
    constructor(title,repository_name_associated,status,number_of_comments,labels,author,date_created,last_updated){
        this.title = title,
        this.repository_name_associated = repository_name_associated,
        this.status = status,
        this.number_of_comments = number_of_comments,
        this.labels = labels,
        this.author = author,
        this.date_created = date_created,
        this.last_updated = last_updated
    }
    getTitleAndAuthor() {
        return `The repository ${this.title} was created by ${this.author}`
    }
    getGeneralInfo (){
      return `The ${this.title} repository was created on ${this.date_created} and the last update was ${this.last_updated}`
    }
   }
