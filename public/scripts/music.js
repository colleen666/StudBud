
// add all the consts as initial reference
const bgBody = ["#e5e7e9", "#1C6BA4", "#f8ded3", "#ffc382"];//set up the background transition color
const body = document.body;
const player = document.querySelector(".player");
const playerHeader = player.querySelector(".player__header");
const playerControls = player.querySelector(".player__controls");
const playerPlayList = player.querySelectorAll(".player__song");
const playerSongs = player.querySelectorAll(".audio");
// querySelector for all btns
const playButton = player.querySelector(".play");
const nextButton = player.querySelector(".next");
const backButton = player.querySelector(".back");
const playlistButton = player.querySelector(".playlist");
const slider = player.querySelector(".slider");
const sliderContext = player.querySelector(".slider__context");
const sliderName = sliderContext.querySelector(".slider__name");
const sliderTitle = sliderContext.querySelector(".slider__title");
const sliderContent = slider.querySelector(".slider__content");
const sliderContentLength = playerPlayList.length - 1;
const sliderWidth = 100;
let left = 0;
let count = 0; //initially let and count is 0
let song = playerSongs[count];
let isPlay = false; //let initial play=flase
const pauseIcon = playButton.querySelector("img[alt = 'pause-icon']");
const playIcon = playButton.querySelector("img[alt = 'play-icon']");
const progres = player.querySelector(".progres");
const progresFilled = progres.querySelector(".progres__filled");
let isMove = false;

// creat functions
function openPlayer() {

    playerHeader.classList.add("open-header");
    playerControls.classList.add("move");
    slider.classList.add("open-slider");
    
}

function closePlayer() {

    playerHeader.classList.remove("open-header");
    playerControls.classList.remove("move");
    slider.classList.remove("open-slider");
    
}
// Create funtions for next and previous songs, make sure that the next song is the currrent song + 1
function next(index) {
    
    count = index || count;

    if (count == sliderContentLength) {
        count = count;
        return;
    }

    left = (count + 1) * sliderWidth;
    left = Math.min(left, (sliderContentLength) * sliderWidth);
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
    count++;
    run();

}
// And the previous(back) song is the current -1
function back(index) {
    
    count = index || count;

    if (count == 0) {
        count = count;
        return;
    }
    
    left = (count - 1) * sliderWidth;
    left = Math.max(0, left);
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
    count--;
    run();

}
// Create the function of the changing slider context
function changeSliderContext() {

    sliderContext.style.animationName = "opacity";
    
    sliderName.textContent = playerPlayList[count].querySelector(".player__title").textContent;
    sliderTitle.textContent = playerPlayList[count].querySelector(".player__song-name").textContent;
    
    if (sliderName.textContent.length > 16) {
        const textWrap = document.createElement("span");
        textWrap.className = "text-wrap";
        textWrap.innerHTML = sliderName.textContent + "   " + sliderName.textContent;  
        sliderName.innerHTML = "";
        sliderName.append(textWrap);
        
    }

    if (sliderTitle.textContent.length >= 18) {
        const textWrap = document.createElement("span");
        textWrap.className = "text-wrap";
        textWrap.innerHTML = sliderTitle.textContent + "    " + sliderTitle.textContent;  
        sliderTitle.innerHTML = "";
        sliderTitle.append(textWrap);
    }

}
// bg color if changed as the count
function changeBgBody() {
    body.style.backgroundColor = bgBody[count];
}
// function of selecting songs from the playlist
function selectSong() {

    song = playerSongs[count];

    for (const item of playerSongs) {

        if (item != song) {
            item.pause();
            item.currentTime = 0;
        }

    }

    if (isPlay) song.play();
    
    
}

function run() {
  
    changeSliderContext();
    changeBgBody();
    selectSong();
  
}
// create a function of palysong, if the song is paused, display the pause icon, else dispaly the paly icon
function playSong() {

    if (song.paused) {
        song.play();
        playIcon.style.display = "none"; // the paly icon should be disappeared if the the song is paused
        pauseIcon.style.display = "block";

    }else{
        song.pause();
        isPlay = false;
        playIcon.style.display = "";
        pauseIcon.style.display = "";
    }


}
//Create a progress update function, update progress every second
function progresUpdate() {

    const progresFilledWidth = (this.currentTime / this.duration) * 100 + "%";
    progresFilled.style.width = progresFilledWidth;

    if (isPlay && this.duration == this.currentTime) {
        next();
    }
    if (count == sliderContentLength && song.currentTime == song.duration) {
        playIcon.style.display = "block";
        pauseIcon.style.display = "";
        isPlay = false;
    }
}

//Format time (convert ms to seconds, minutes and add 0 id less than 10),
function durationSongs() {

    let min = parseInt(this.duration / 60);
    if (min < 10) min = "0" + min;

    let sec = parseInt(this.duration % 60);
    if (sec < 10) sec = "0" + sec;
   // which then calculate the time of the song 
    const playerSongTime = `${min}:${sec}`;
    this.closest(".player__song").querySelector(".player__song-time").append(playerSongTime);

}


changeSliderContext();

// add click events if the buttons are being clicked
sliderContext.addEventListener("click", openPlayer);
sliderContext.addEventListener("animationend", () => sliderContext.style.animationName ='');
playlistButton.addEventListener("click", closePlayer);

nextButton.addEventListener("click", () => {
    next(0)
});

backButton.addEventListener("click", () => {
    back(0)
});

playButton.addEventListener("click", () => {
    isPlay = true;
    playSong();
});

playerSongs.forEach(song => {
    song.addEventListener("loadeddata" , durationSongs);
    song.addEventListener("timeupdate" , progresUpdate);
    
});

progres.addEventListener("pointerdown", (e) => {
    scurb(e);
    isMove = true;
});

document.addEventListener("pointermove", (e) => {
    if (isMove) {
        scurb(e); 
        song.muted = true;
    }
});

document.addEventListener("pointerup", () => {
    isMove = false;
    song.muted = false;
});
//Creates playlist, and click event for it
playerPlayList.forEach((item, index) => {

    item.addEventListener("click", function() {

        if (index > count) {
            next(index - 1);
            return;
        }
        
        if (index < count) {
            back(index + 1);
            return;
        }

    });
    
});