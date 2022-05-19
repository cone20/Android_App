//let boruto = "https://go.asblaze.cf/file/AS-Stream/AS+(1)/xsaBRT/xsaBRT+-+01.mp4";
let startLink = "https://cdn.asroll.tk/file/AS-Stream/AS+(1)/xsaNS/xsaNS+-+010.mp4";
let prev = startLink.substr(0,startLink.length-7);
let number = 342;
let after = startLink.substr(startLink.length-4,4);
let video = document.getElementById('video_url');
video.volume = 1;
let play = 0;
let TextButton = document.getElementById("btn2");

function findEpisode(){
    let lastWatch = parseInt(document.getElementById("inputForEpisode").value);

    if(lastWatch == 1 || lastWatch == 2){
        number = `001-002`;
    }else if(lastWatch == 3){
        number = `003`;
    }else if(lastWatch == 4){
        number = `004`;
    }else if(lastWatch == 5){
        number = `005`;
    }else if(lastWatch == 6 || lastWatch == 7){
        number = `006-007`;
    }else if(lastWatch == 8 || lastWatch == 9){
        number = `008-009`;
    }else if(lastWatch >9 && lastWatch <100){
        number = `0${lastWatch}`;
    }else{
        number = lastWatch;
    }

    video.setAttribute('src', `${prev}${number}${after}`);

    let printEpisode = document.getElementById("print_episode");
    printEpisode.innerHTML = `${number}`;

    video.pause();
    video.load();
};

function lastOne(){
    number -= 1 ;

    video.setAttribute('src', `${prev}${number}${after}`);

    let episode = document.getElementById("print_episode");
    episode.innerHTML = `${number}`;

    video.pause();
    video.load();

};

function nextOne(){
    number += 1 ;

    video.setAttribute('src', `${prev}${number}${after}`);

    let episode = document.getElementById("print_episode");
    episode.innerHTML= `${number}`;

    video.pause();
    video.load();

};

function hideAll(){
    let elements = document.getElementById("container");
    let textP = document.getElementById("removeChangeText");
    let cont = document.getElementById("container2");

    if(textP.innerText == "Minimize All"){
        textP.innerText = "Show All";
        cont.classList.add("buttonFix");
        elements.classList.add("transitionFade");
        video.pause();
    }else if(textP.innerText == "Show All"){
        textP.innerText = "Minimize All";
        cont.classList.remove("buttonFix");
        elements.classList.remove("transitionFade");
    }

};

function volumeDown(){
    if(video.volume <= 1 && video.volume >0){
    video.volume -=0.25;
    }
};

function volumeUp(){
    if(video.volume >= 0 && video.volume < 1){
    video.volume +=0.25;
    }
};

function playVideo(){
    if(play == 0){
        video.play();
        play = 1;
        TextButton.innerText = "Pause";
    }else if(play == 1){
        video.pause();
        play = 0;
        TextButton.innerText = "Play";
    }
}





