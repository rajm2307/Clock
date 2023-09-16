function Time() {

    const d = new Date();
    const days_list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    
    
    let days = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let am_pm = (hours >= 12) ? "PM" : "AM";
    let month = d.getMonth();
    let date = d.getDate();
    hours = (hours >= 12) ? hours - 12 : hours;
    hours = set_time(hours);
    minutes = set_time(minutes);
    seconds = set_time(seconds);

    document.getElementById("real_time").innerHTML = hours + ":" + minutes + ":" + seconds ;
    document.getElementById("day").innerHTML = days_list[days];
    document.getElementById("am_pm").innerHTML = am_pm;
    document.getElementById("month").innerHTML = month+1;
    document.getElementById("date").innerHTML = date;
    console.log(d.getMonth())
}
                

Time();

setInterval(Time, 1000);

function set_time(time) {
    if (time < 10) { time = "0" + time };
    return time;
}







