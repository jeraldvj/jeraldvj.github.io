    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'https://jeraldvj.github.io/assignments/myproject/temple.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var templeInn = request.response;
      showTemple(templeInn);
    }
    

    function showTemple(jsonObj) {
      var town = jsonObj['towns'];        
      for (var i = 0; i < town.length; i++) {
        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myImg = document.createElement('img');
        var mybut = document.createElement('button');

        myH2.textContent = temple[i].name;
        myPara1.textContent = temple[i].address;
        myPara2.textContent = 'Telephone: ' + temple[i].telephone;

        var attr = document.createAttribute("src");
        attr.value = "images/img" + i + ".jpg";
        var h = document.getElementsByTagName("img")[0];
        myImg.setAttributeNode(attr);

        
        myDiv.appendChild(myH2).setAttribute('id' , "hd");
        myDiv.appendChild(myPara1).setAttribute('id' , "p1d");
        myDiv.appendChild(myPara2).setAttribute('id' , "p2d");
        myDiv.appendChild(mybut).setAttribute('id' , "but") + "Reserve Here!";
        myDiv.appendChild(myImg).setAttribute('id' , "pi");
        myArticle.appendChild(myDiv).setAttribute('id' , "divi");

        section.appendChild(myArticle).setAttribute('id' , "arti");
        }      
    }