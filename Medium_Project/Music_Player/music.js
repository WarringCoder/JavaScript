class Music
{
    constructor(title, singer, img, audio)
    {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.audio = audio;
    }
    getName ()
    {
        return this.title +  " / " + this.singer;
    }

}

const MusicList = 
[
    new Music("Padrino", "Nino Rota","1.webp","1.mp3"),
    new Music("Peaky Blinder", "Otnicka - Duke Lika", "2.jpeg", "2.mp3")
]