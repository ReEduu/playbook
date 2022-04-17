const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   const issue = {
    title: "issue 1",
    repository_name_associated: "week 2",
    status: "active",
    number_of_comments: 30,
    labels: 2,
    author: "Juan Carlos",
    date_created: "10/31/2021",
    last_updated: "11/12/2021",
    getTitleAndAuthor: function(){
        return `The repository ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `The ${this.title} repository was created on ${this.date_created} and the last update was ${this.last_updated}`
    }
   }

   const pullRequest = {
    title: "pull 1",
    branch_name: "main",
    date_created: "11-10-2020",
    status: "active",
    author: "Juan Mendoza",
    repository_name_associated: "week 3",
    getTitleAndAuthor: function(){
        return `The pull request ${this.title} was created by ${this.author}`
    },
    getStatus: function(){
      return this.status
    }
   }
   

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

console.log(pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())


   