import Issue from './issue.js'
import PullRequest from './pull_request.js'
import Repo from './repo.js'


const issue1 = new Issue("Week 2 problem 1", "Week2", "active", "232","momias","Juanads","12/12/2021","18/04/2022")
const pull_request1 = new PullRequest("agregan cosas de la actividad","main","10/11/2021","closed","juanes","week 1")
const repo1 = new Repo("Week 3","Junaes","Java","342","3","33","32","12")
   
console.log(issue1.getTitleAndAuthor())
console.log(issue1.getGeneralInfo())

console.log(pull_request1.getTitleAndAuthor())
console.log(pull_request1.getStatus())

