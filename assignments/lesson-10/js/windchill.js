
    var t = parseInt(document.getElementById("temp").innerHTML);
    var s = parseInt(document.getElementById("windSpd").innerHTML);
    var ex = Math.pow(s,0.16);
    var w = 35.74+0.6215*t-35.75*ex +0.4275*t*ex;
    w = Math.round(w);    

    //var dig = 2;
    //var multi = Math.pow(10,dig);
    //w = Math.round(w*multi) / multi;

    document.getElementById("windCh").innerHTML = w;
