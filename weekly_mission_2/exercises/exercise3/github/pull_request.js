export default class PullRequest {
    constructor(title,branch_name,date_created,status,author,repository_name_associated){
        this.title = title,
        this.branch_name = branch_name,
        this.date_created = date_created,
        this.status = status,
        this.author = author,
        this.repository_name_associated = repository_name_associated
    }
    
    getTitleAndAuthor(){
        return `The pull request ${this.title} was created by ${this.author}`
    }
    getStatus(){
      return this.status
    }
   }