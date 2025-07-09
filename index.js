let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timer = document.getElementById("timer");
let sec=0;
let min = 0;
let time;
let is_time_running=false;
startBtn.onclick = function(){
    if(is_time_running===true){
        return
    }
    is_time_running=true;
    time = setInterval(()=>{
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
    },1000)
}

stopBtn.onclick=function(){
    clearInterval(time);
    is_time_running=false
}

resetBtn.onclick=function(){
    clearInterval(time);
    min=0;
    sec=0;
    timer.textContent="00:00";
    is_time_running=false;
}