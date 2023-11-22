const container = document.querySelector(".container");
const image = document.querySelector(".img");
const title = document.querySelector(".title");
const history = document.querySelector(".history");
const play = document.querySelector(".fa-play");
const next = document.querySelector(".fa-forward");
const previous = document.querySelector(".fa-backward");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector(".list");

const player = new Player(MusicList);



window.addEventListener("load", () => 
{
    let music = player.getmusic();
    displayMusic(music);
    displayMusicList(player.musiclist);
    isPlayingNow();
} );

function displayMusic(music)
{
    title.innerText = music.title;
    history.innerText = music.history;
    image.src = "img/" + music.img;
    audio.src = "audio/" + music.audio;
}

play.addEventListener("click", () =>
{
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
})

next.addEventListener("click", () =>
{
    nextMusic();
})

previous.addEventListener("click", () =>
{
    prevMusic();
})

function prevMusic()
{
    player.previous();
    let music = player.getmusic();
    displayMusic(music);
    playMusic();
    isPlayingNow();
}

function nextMusic()
{
    player.nextMusic();
    let music = player.getmusic();
    displayMusic(music)
    playMusic();
    isPlayingNow();
}

function pauseMusic()
{
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

function playMusic()
{
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (toplamSaniye) => 
{
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}`: `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
}

audio.addEventListener("loadedmetadata", () => 
{
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => 
{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => 
{
  currentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});

let sesDurumu = "sesli";

volumeBar.addEventListener("input", (e) => 
{
    const value = e.target.value;
    audio.volume = value / 100;
    if(value == 0) {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
    }
});

volume.addEventListener("click", () => 
{
    if(sesDurumu==="sesli") {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});


const displayMusicList = (list) => {
    for(let i=0; i < list.length; i++) {
        let liTag = `
            <li li-index='${i}' onclick="selectedMusic(this)" class="choice">
                <span>${list[i].title}</span>
                <span id="music-${i}"></span>
                <audio class="music-${i}" src="audio/${list[i].audio}"></audio>
            </li>
        `;

        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });

    }
}

const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");    
    displayMusic(player.getmusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll("li")) {
        if(li.classList.contains("playing")) {
            li.classList.remove("playing");
        }

        if(li.getAttribute("li-index") == player.index) {
            li.classList.add("playing");
        }
    }
}

audio.addEventListener("ended", () => {
    nextMusic();
})


