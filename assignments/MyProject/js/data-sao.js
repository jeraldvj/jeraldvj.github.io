var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://jeraldvj.github.io/assignments/MyProject/temple.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {      

    var templeInn = request.response;
    showTemple(templeInn);
}


function showTemple(jsonObj) {
    var cn = parseInt(document.getElementById('page').innerHTML);
    var temple = jsonObj['temples'];     

    var myArticle = document.createElement('article');
    var myDiv = document.createElement('div');
    var myDivC1 = document.createElement('div');
    var myDivS1 = document.createElement('div');
    var myDivS2 = document.createElement('div');
    var myDivT0 = document.createElement('div');
    var myDivT1 = document.createElement('div');
    var myDivT2 = document.createElement('div');
    var myDivT3 = document.createElement('div');
    var myDivT4 = document.createElement('div');
    var myDivT5 = document.createElement('div');
    var myDivT6 = document.createElement('div');
    var myDivT7 = document.createElement('div');
    var myDiv0 = document.createElement('div');
    var myDiv1 = document.createElement('div');
    var myDiv2 = document.createElement('div');
    var myDiv3 = document.createElement('div');
    var myDiv4 = document.createElement('div');
    var myDiv5 = document.createElement('div');
    var myDiv6 = document.createElement('div');
    var myDiv8 = document.createElement('div');
    var myDiv9 = document.createElement('div');
    var myDiv10 = document.createElement('div');
    var myDiv11 = document.createElement('div');
    var myDiv12 = document.createElement('div');
    var myDiv13 = document.createElement('div');
    var myDiv14 = document.createElement('div');
    var myDiv15 = document.createElement('div');
    var myDiv16 = document.createElement('div');
    var myDiv17 = document.createElement('div');
    var myImg = document.createElement('img');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myPara0 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var mySpanT0 = document.createElement('span');
    var mySpanT1 = document.createElement('span');
    var mySpanT2 = document.createElement('span');
    var mySpanT3 = document.createElement('span');
    var mySpanT4 = document.createElement('span');
    var mySpanT5 = document.createElement('span');
    var mySpanT6 = document.createElement('span');
    var mySpanT7 = document.createElement('span');
    var mySpanT10 = document.createElement('span');
    var mySpanT11 = document.createElement('span');
    var mySpanT12 = document.createElement('span');
    var mySpanT13 = document.createElement('span');
    

    myH2.textContent = temple[cn].name;
    myDivC1.appendChild(myH2);
    mySpanT0.textContent = 'Temperature';
    myPara0.textContent = 'current';

    for (var i = 0; i < temple[cn].address.length; i++) {
        if (i == 0) {
            mySpanT1.textContent = 'Address';
            myDiv1.appendChild(mySpanT1).setAttribute('class' , "titulo");     
        }
        var myLi0 = document.createElement('li'); 
        myLi0.textContent = temple[cn].address[i];
        myDiv1.appendChild(myLi0);
    }
    mySpanT2.textContent = 'Telephone';
    myPara2.textContent = temple[cn].telephone;
    mySpanT3.textContent = 'E-mail';
    myPara3.textContent = temple[cn].email;
    for (var i = 0; i < temple[cn].services.length; i++) {
        if (i == 0) {
            mySpanT4.textContent = 'Services';
            myDiv4.appendChild(mySpanT4).setAttribute('class' , "titulo");     
        }
        var myLi1 = document.createElement('li'); 
        myLi1.textContent = temple[cn].services[i];
        myDiv4.appendChild(myLi1);
    }
    
    
    for (var i = 0; i < temple[cn].history.length; i++) {
        if (i == 0) {
            mySpanT5.textContent = 'History';
            myDiv5.appendChild(mySpanT5).setAttribute('class' , "titulo");     
        }
        var myLi2 = document.createElement('li'); 
        myLi2.textContent = temple[cn].history[i];
        myDiv5.appendChild(myLi2);        
    }
    
    for (var i = 0; i < temple[cn].milestone.length; i++) {
        if (i == 0) {
            mySpanT6.textContent = 'Milestone';
            myDiv6.appendChild(mySpanT6).setAttribute('class' , "titulo");     
        }
        var myLi3 = document.createElement('li'); 
        myLi3.textContent = temple[cn].milestone[i];
        myDiv6.appendChild(myLi3);        
    }


    var attr = document.createAttribute("src");
    attr.value = "images/img" + cn + ".jpg";
    myImg.setAttributeNode(attr);

    myH3.textContent = 'Ordinances';
    mySpanT7.textContent = 'Baptism';

        for (var i = 0; i < temple[cn].ordinances[0].baptism[0].tuesday.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = 'Tuesday - Friday';
                myDiv8.appendChild(mySpanT8).setAttribute('class' , "subsubtitulo");     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].baptism[0].tuesday[i];
        myDiv8.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].baptism[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv9.appendChild(mySpanT9).setAttribute('class' , "subsubtitulo");     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].baptism[0].saturday[i];
        myDiv9.appendChild(myLi5);        
        }
    
    mySpanT10.textContent = 'Initiatory';
    
        for (var i = 0; i < temple[cn].ordinances[0].initiatory[0].tuesday.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = 'Tuesday - Friday';
                myDiv10.appendChild(mySpanT8).setAttribute('class' , "subsubtitulo");     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].initiatory[0].tuesday[i];
        myDiv10.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].initiatory[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv11.appendChild(mySpanT9).setAttribute('class' , "subsubtitulo");     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].initiatory[0].saturday[i];
        myDiv11.appendChild(myLi5);        
        }
    
    mySpanT11.textContent = 'Endowment';
    
        for (var i = 0; i < temple[cn].ordinances[0].endowment[0].tuesday.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = 'Tuesday - Friday';
                myDiv12.appendChild(mySpanT8).setAttribute('class' , "subsubtitulo");     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].endowment[0].tuesday[i];
        myDiv12.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].endowment[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv13.appendChild(mySpanT9).setAttribute('class' , "subsubtitulo");     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].endowment[0].saturday[i];
        myDiv13.appendChild(myLi5);        
        }
    
    mySpanT12.textContent = 'Sealing';
    
        for (var i = 0; i < temple[cn].ordinances[0].sealing[0].tuesday.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = 'Tuesday - Friday';
                myDiv14.appendChild(mySpanT8).setAttribute('class' , "subsubtitulo");     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].sealing[0].tuesday[i];
        myDiv14.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].sealing[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv15.appendChild(mySpanT9).setAttribute('class' , "subsubtitulo");     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].sealing[0].saturday[i];
        myDiv15.appendChild(myLi5);        
        }

    mySpanT13.textContent = 'Closure';
    
        for (var i = 0; i < temple[cn].closure[0].y2019.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = '2019';
                myDiv16.appendChild(mySpanT8).setAttribute('class' , "subsubtitulo");     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].closure[0].y2019[i];
        myDiv16.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].closure[0].y2020.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = '2020';
                myDiv17.appendChild(mySpanT9).setAttribute('class' , "subsubtitulo");     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].closure[0].y2020[i];
        myDiv17.appendChild(myLi5);        
        }


    myDiv0.appendChild(mySpanT0).setAttribute('class' , "titulo");
    myDiv0.appendChild(myPara0).setAttribute('id' , "temp");
    

    myDiv2.appendChild(mySpanT2).setAttribute('class' , "titulo");
    myDiv2.appendChild(myPara2);
    myDiv3.appendChild(mySpanT3).setAttribute('class' , "titulo");
    myDiv3.appendChild(myPara3);
    
    myDivT0.appendChild(myDiv0).setAttribute('id' , "temperature");
    myDivT0.appendChild(myDiv1).setAttribute('id' , "address");
    myDivT0.appendChild(myDiv2).setAttribute('id' , "telephone");
    myDivT0.appendChild(myDiv3).setAttribute('id' , "email");
    myDivT0.appendChild(myDiv4).setAttribute('id' , "services");
    myDivT2.appendChild(myDiv5).setAttribute('id' , "history");
    myDivT2.appendChild(myDiv6).setAttribute('id' , "milestone");
    myDivT1.appendChild(myImg).setAttribute('id' , "ima");
    myDivS1.appendChild(myDivT0).setAttribute('class' , "lefts");
    myDivS1.appendChild(myDivT1).setAttribute('class' , "rights");
    myDivS1.appendChild(myDivT2).setAttribute('class' , "center");
    myDivS2.appendChild(myH3).setAttribute('class' , "titulo2");
    myDivT3.appendChild(mySpanT7).setAttribute('class' , "subtitulo");    
    myDivT3.appendChild(myDiv8).setAttribute('class' , "left");
    myDivT3.appendChild(myDiv9).setAttribute('class' , "right");
    myDivT4.appendChild(mySpanT10).setAttribute('class' , "subtitulo");
    myDivT4.appendChild(myDiv10).setAttribute('class' , "left");
    myDivT4.appendChild(myDiv11).setAttribute('class' , "right");
    myDivT5.appendChild(mySpanT11).setAttribute('class' , "subtitulo");
    myDivT5.appendChild(myDiv12).setAttribute('class' , "left");
    myDivT5.appendChild(myDiv13).setAttribute('class' , "right");
    myDivT6.appendChild(mySpanT12).setAttribute('class' , "subtitulo");
    myDivT6.appendChild(myDiv14).setAttribute('class' , "left");
    myDivT6.appendChild(myDiv15).setAttribute('class' , "right");
    myDivT7.appendChild(mySpanT13).setAttribute('class' , "subtitulo titulo2");
    myDivT7.appendChild(myDiv16).setAttribute('class' , "left");
    myDivT7.appendChild(myDiv17).setAttribute('class' , "right");
    myDivS2.appendChild(myDivT3).setAttribute('class' , "secinfe");
    myDivS2.appendChild(myDivT4).setAttribute('class' , "secinfe");
    myDivS2.appendChild(myDivT5).setAttribute('class' , "secinfe");
    myDivS2.appendChild(myDivT6).setAttribute('class' , "secinfe");
    myDivS2.appendChild(myDivT7).setAttribute('class' , "secinfe");
    myDivC1.appendChild(myDivS1).setAttribute('id' , "supe");
    myDivC1.appendChild(myDivS2).setAttribute('id' , "infe");
    
    myDiv.appendChild(myDivC1).setAttribute('id' , "contenedor");
    myArticle.appendChild(myDiv).setAttribute('id' , "divis");

    section.appendChild(myArticle).setAttribute('id' , "artic");
         
}

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=3448433&units=imperial&APPID=5155b328d398b92be7cd1e1112e8e8da';

weatherRequest.open('Get' , apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var t = Math.round(weatherData.main.temp);
    var s = Math.round(weatherData.wind.speed*10)/10;

    document.getElementById('temp').innerHTML = t + "&deg;F";
    
}