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
    var myDivT1 = document.createElement('div');
    var myDivT2 = document.createElement('div');
    var myDivT3 = document.createElement('div');
    var myDivT4 = document.createElement('div');
    var myDivT5 = document.createElement('div');
    var myDivT6 = document.createElement('div');
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
    var myImg = document.createElement('img');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
//    var myPara0 = document.createElement('p');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
//    var mySpanT0 = document.createElement('span');
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
    

    myH2.textContent = temple[cn].name;
//    mySpanT0.textContent = 'Temperature';
//    myPara0.textContent = 'current';
    mySpanT1.textContent = 'Address';
    myPara1.textContent = temple[cn].address;
    mySpanT2.textContent = 'Telephone';
    myPara2.textContent = temple[cn].telephone;
    mySpanT3.textContent = 'E-mail';
    myPara3.textContent = temple[cn].email;
    for (var i = 0; i < temple[cn].services.length; i++) {
        if (i == 0) {
            mySpanT4.textContent = 'Services';
            myDiv4.appendChild(mySpanT4);     
        }
        var myLi1 = document.createElement('li'); 
        myLi1.textContent = temple[cn].services[i];
        myDiv4.appendChild(myLi1);
    }
    
    
    for (var i = 0; i < temple[cn].history.length; i++) {
        if (i == 0) {
            mySpanT5.textContent = 'History';
            myDiv5.appendChild(mySpanT5);     
        }
        var myLi2 = document.createElement('li'); 
        myLi2.textContent = temple[cn].history[i];
        myDiv5.appendChild(myLi2);        
    }
    
    for (var i = 0; i < temple[cn].milestone.length; i++) {
        if (i == 0) {
            mySpanT6.textContent = 'Milestone';
            myDiv6.appendChild(mySpanT6);     
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
                myDiv8.appendChild(mySpanT8);     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].baptism[0].tuesday[i];
        myDiv8.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].baptism[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv9.appendChild(mySpanT9);     
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
                myDiv10.appendChild(mySpanT8);     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].initiatory[0].tuesday[i];
        myDiv10.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].initiatory[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv11.appendChild(mySpanT9);     
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
                myDiv12.appendChild(mySpanT8);     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].endowment[0].tuesday[i];
        myDiv12.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].endowment[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv13.appendChild(mySpanT9);     
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
                myDiv14.appendChild(mySpanT8);     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].ordinances[0].sealing[0].tuesday[i];
        myDiv14.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].sealing[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv15.appendChild(mySpanT9);     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].sealing[0].saturday[i];
        myDiv15.appendChild(myLi5);        
        }

    mySpanT13.textContent = 'Closure';
    
        for (var i = 0; i < temple[cn].closure.length; i++) {
            if (i == 0) {
                var mySpanT8 = document.createElement('span');
                mySpanT8.textContent = '2019';
                myDiv14.appendChild(mySpanT8);     
            }
        var myLi4 = document.createElement('li'); 
        myLi4.textContent = temple[cn].closure[0].y2019[i];
        myDiv14.appendChild(myLi4);        
        }
        for (var i = 0; i < temple[cn].ordinances[0].sealing[0].saturday.length; i++) {
            if (i == 0) {
                var mySpanT9 = document.createElement('span');
                mySpanT9.textContent = 'Saturday';
                myDiv15.appendChild(mySpanT9);     
            }
        var myLi5 = document.createElement('li'); 
        myLi5.textContent = temple[cn].ordinances[0].sealing[0].saturday[i];
        myDiv15.appendChild(myLi5);        
        }


 //   myDiv1.appendChild(mySpanT0);
 //   myDiv1.appendChild(myPara0).setAttribute('id' , "temp");
    myDiv1.appendChild(mySpanT1);
    myDiv1.appendChild(myPara1);
    myDiv2.appendChild(mySpanT2);
    myDiv2.appendChild(myPara2);
    myDiv3.appendChild(mySpanT3);
    myDiv3.appendChild(myPara3);
    
    myDivT1.appendChild(myDiv1).setAttribute('id' , "address");
    myDivT1.appendChild(myDiv2).setAttribute('id' , "telephone");
    myDivT1.appendChild(myDiv3).setAttribute('id' , "email");
    myDivT1.appendChild(myDiv4).setAttribute('id' , "services");
    myDivT1.appendChild(myDiv5).setAttribute('id' , "history");
    myDivT1.appendChild(myDiv6).setAttribute('id' , "milestone");
    myDivT2.appendChild(myImg).setAttribute('id' , "pi");
    myDivS1.appendChild(myDivT1);
    myDivS1.appendChild(myDivT2);
    myDivS2.appendChild(myH3);
    myDivT3.appendChild(mySpanT7);    
    myDivT3.appendChild(myDiv8);
    myDivT3.appendChild(myDiv9);
    myDivT4.appendChild(mySpanT10);
    myDivT4.appendChild(myDiv10);
    myDivT4.appendChild(myDiv11);
    myDivT5.appendChild(mySpanT11);
    myDivT5.appendChild(myDiv12);
    myDivT5.appendChild(myDiv13);
    myDivT6.appendChild(mySpanT12);
    myDivT6.appendChild(myDiv14);
    myDivT6.appendChild(myDiv15);
    myDivS2.appendChild(myDivT3);
    myDivS2.appendChild(myDivT4);
    myDivS2.appendChild(myDivT5);
    myDivS2.appendChild(myDivT6);
    myDivC1.appendChild(myDivS1);
    myDivC1.appendChild(myDivS2);
    myDiv.appendChild(myDivC1);
    myArticle.appendChild(myDiv).setAttribute('id' , "divi");

    section.appendChild(myArticle).setAttribute('id' , "arti");
         
}

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=5155b328d398b92be7cd1e1112e8e8da';

weatherRequest.open('Get' , apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var t = Math.round(weatherData.main.temp);
    var s = Math.round(weatherData.wind.speed*10)/10;

    document.getElementById('temp').innerHTML = t;
    
}