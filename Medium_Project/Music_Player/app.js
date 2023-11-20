const container = document.querySelector(".container");
const image = document.querySelector(".img");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const history = document.querySelector(".history");
const play = document.querySelector(".fa-play");
const next = document.querySelector(".fa-forward");
const previous = document.querySelector(".fa-backward");

const player = new Player(MusicList);



window.addEventListener("load", () => 
{
    let music = player.getmusic();
    displayMusic(music);
} );

function displayMusic(music)
{
    title.innerText = music.title;
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "audio/" + music.audio;
}

play.addEventListener("click", () =>
{
    audio.play();
})

