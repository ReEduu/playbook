export default class Biography {
    constructor(user,text,music){
        this.user = user,
        this.text = text,
        this.music = music
    }
    getMusic(){
        return this.music;
    }
    getText(){
        return this.text;
    }
    }
    
