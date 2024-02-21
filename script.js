function clock(){
    const now = new Date();
    let hours = now.getHours()
    const AM_PM = hours >=12 ? "PM" : "AM"
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minu = now.getMinutes().toString().padStart(2,0);
    const seco = now.getSeconds().toString().padStart(2,0);
    

    const string1 = `${hours}:${minu}:${seco} ${AM_PM}`;
    

    document.getElementById("clock").textContent=string1;
    
}
clock();
function date(){
    const now2 = new Date();
    const day = now2.getDate()
    const month = now2.getMonth() + 1;
    const year = now2.getFullYear()
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Saturday'];
    const week = weekdays[now2.getDay()]
    const string2 = `${day}/${month}/${year}  ${week}`
    document.getElementById("date").textContent=string2;

}
date();
setInterval(clock,1000)
setInterval(date,10000)
var changetxt = new Typed(".rewrite",{
    strings : ["Digital clock"," Date"],
    typeSpeed : 50,
    loop : true,
    backDelay : 900,
    backSpeed : 30,
    
});