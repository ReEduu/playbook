const user = {
name:"Pedro",
last_name:"Juarez",
friends:[
    {name:"Juan",last_name:"Perez",profile_pic:"juan.png",bio:"q onda"},
    {name:"Manolo",last_name:"Juarez",profile_pic:"mano.png",bio:"q tal"}
],
bio: "aqui nomas",
getBio: function(){
    return this.bio;
},
getFriends: function(){
    return this.friends;
}
}

const post = {
likes: "322",
user: "Juan Sanchez",
text:"El nuevo perrito",
image:"\perrito.jpg",
comments:[
    {user:"juana",text:"ta chido"},
    {user:"geriberto",text:"q cool"}
],
getLikes: function(){
    return `Likes: ${this.likes}`
},
getTextAndImage: function(){
    return `Text: ${this.text} Image: ${this.image}`
},
}

const biography = {
user: "Juan Perez",
text: "Aqui tranqui",
music: "Harry Styles",
getMusic: function(){
    return this.music;
},
getText: function(){
    return this.text;
}
}

console.log(biography.getMusic())
console.log(biography.getText())
console.log(user.getFriends())
console.log(post.getLikes())
console.log(post.getTextAndImage())