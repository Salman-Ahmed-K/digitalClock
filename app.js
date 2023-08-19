function digitalClock(){
    let dat = new Date();
    let hour = dat.getHours();
    let minute = dat.getMinutes();
    let second = dat.getSeconds();
    let timeFormat = 'AM';

    if(hour == 0){
        hour = 12;
    }else if(hour > 12){
        hour = hour - 12;
        timeFormat = "PM"
    } if (10 > hour){
        hour = '0'+ hour;
    } if (10 > minute){
        minute = '0'+ minute;
    } if (10 > second){
        second = '0'+ second;
    }
    let finalTime = `${hour}:${minute}:${second}`;
    

    let show = document.getElementById('time');
    show.innerText = finalTime;
    let format = document.getElementById('choto');
    format.innerText = timeFormat;

    setInterval(digitalClock,1000)

}

digitalClock();


