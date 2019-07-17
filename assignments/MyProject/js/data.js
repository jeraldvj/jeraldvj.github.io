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
      var temple = jsonObj['temples'];     

      for (var i = 0; i < temple.length; i++) {
        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myImg = document.createElement('img');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var mybut = document.createElement('button');

        myH2.textContent = temples[i].name;
        myPara1.textContent = temples[i].address;
        myPara2.textContent = 'Telephone: ' + temples[i].telephone;

        var attr = document.createAttribute("src");
        attr.value = "images/img" + i + ".jpg";
        var h = document.getElementsByTagName("img")[0];
        myImg.setAttributeNode(attr);


        myDiv.appendChild(myImg).setAttribute('id' , "pi");
        myDiv.appendChild(myH2).setAttribute('id' , "hd");
        myDiv.appendChild(myPara1).setAttribute('id' , "p1d");
        myDiv.appendChild(myPara2).setAttribute('id' , "p2d");
        myDiv.appendChild(mybut).setAttribute('id' , "but") + "Reserve Here!";
        myArticle.appendChild(myDiv).setAttribute('id' , "divi");

        section.appendChild(myArticle).setAttribute('id' , "arti");
        }      
    }