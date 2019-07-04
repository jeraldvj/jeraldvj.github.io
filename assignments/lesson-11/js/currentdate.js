function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    var w = d.getDate();
  
    var month = [" ","January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var m = month[d.getMonth()];
    var y = d.getFullYear();
    document.getElementById("currentDate").innerHTML = n +", "+ w + " "+ m +" "+ y;
}
function SSvalue(severity) {
    document.getElementById("ssvalue").innerHTML = severity;
}

var today = new Date();
var weekd = new Array(7);
    weekd[0] = "Sun";
    weekd[1] = "Mon";
    weekd[2] = "Tue";
    weekd[3] = "Wed";
    weekd[4] = "Thu";
    weekd[5] = "Fri";
    weekd[6] = "Sat";

var c = 0, val = today.getDay();
for (let i = 0; i < weekd.length; i++) {
    val += 1;
    if (val == 7) {
        val = 0;
    }
    document.getElementById('day'+c).innerHTML = weekd[val];
    c += 1;
    if (c == 5) {
        break;
    }
}