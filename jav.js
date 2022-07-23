

const keys = document.addEventListener("keydown",(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio){
        return
    }
    audio.currentTime =0;
    audio.play();

});

const addclass = document.addEventListener("keydown",(e)=>{
    const drumhit = document.querySelector(`.drum[data-key="${e.keyCode}"]`)
    drumhit.classList.add("playing");

});

const drum = document.querySelectorAll(".drum");


drum.forEach((ele)=>{
    ele.addEventListener('transitionend',(e)=>{
        console.log(e);
        if(e.propertyName !== "transform"){
            return
        }
        ele.classList.remove("playing")
    })
})



