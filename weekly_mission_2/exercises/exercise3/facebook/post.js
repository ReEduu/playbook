export default class Post {
    constructor(likes,user,text,image){
        this.likes = likes,
        this.user = user,
        this.text = text,
        this.image = image
    }
    comments =[
        {user:"juana",text:"ta chido"},
        {user:"geriberto",text:"q cool"}
    ]
    getLikes(){
        return `Likes: ${this.likes}`
    }
    getTextAndImage (){
        return `Text: ${this.text} Image: ${this.image}`
    }
    }
    