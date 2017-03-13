/**
 * Created by shenshuai on 2017/3/13.
 */
window.onload = function () {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById('music');
    var audio = document.getElementsByTagName("audio")[0];

    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
        music.style.animationPlayState = "paused";
        music.style.webkitAnimationPlayState = "paused";
    }, false)

    /*    music.onclick = function () {
     if (audio.paused){
     audio.play();
     //this.setAttribute("class","music_play");
     this.style.animationPlayState = "running"
     this.style.webkitAnimationPlayState = "running"
     }else {
     audio.pause();
     //this.setAttribute("class"," ");
     this.style.animationPlayState = "paused"
     this.style.webkitAnimationPlayState = "paused"
     }

     }*/
    music.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            //this.setAttribute("class","music_play");
            this.style.animationPlayState = "running"
            this.style.webkitAnimationPlayState = "running"
        } else {
            audio.pause();
            //this.setAttribute("class"," ");
            this.style.animationPlayState = "paused"
            this.style.webkitAnimationPlayState = "paused"
        }
    }, false);

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "0";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    }, false)
}
