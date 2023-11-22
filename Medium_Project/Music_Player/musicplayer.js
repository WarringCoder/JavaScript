class Player
{
    constructor(MusicList)
    {
        this.musiclist = MusicList;
        this.index = 0;
    }

    getmusic()
    {
        return this.musiclist[this.index];
    }

    nextMusic()
    {

        if(this.index +1 < this.musiclist.length)
        {
            this.index++;
        }
        else
        {
            this.index = 0;
        }
    }

     previous() 
     {
        if(this.index != 0) 
        {
            this.index--;
        } 
        else 
        {
            this.index = this.musicList.length - 1;
        }
    }
}