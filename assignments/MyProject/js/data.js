    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'https://jeraldvj.github.io/assignments/MyProject/temple.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
      let mdata = JSON.parse(request.responseText);
      console.log(mdata);

      var templeInn = request.response;
      showTemple(templeInn);
    }
    

    function showTemple(jsonObj) {
      var temple = jsonObj['temples'];     

      for (var i = 0; i < temple.length; i++) {
        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myDiv1 = document.createElement('div');
        var myDiv2 = document.createElement('div');
        var myImg = document.createElement('img');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var mybut = document.createElement('button');

        myH2.textContent = temple[i].name;
        myPara1.textContent = 'Address: ' + temple[i].address;
        myPara2.textContent = 'Telephone: ' + temple[i].telephone;
        mybut.textContent = "Reserve Here!";

        var attr = document.createAttribute("src");
        attr.value = "images/img" + i + ".jpg";
        myImg.setAttributeNode(attr);

        var cli = document.createAttribute("onclick");
        cli.value = "location.href='https://jeraldvj.github.io/'";
        mybut.setAttributeNode(cli);


        myDiv1.appendChild(myImg).setAttribute('id' , "pi");
        myDiv2.appendChild(myH2).setAttribute('id' , "hd");
        myDiv2.appendChild(myPara1).setAttribute('id' , "p1d");
        myDiv2.appendChild(myPara2).setAttribute('id' , "p2d");
        myDiv2.appendChild(mybut).setAttribute('id' , "but");
        myDiv.appendChild(myDiv1).setAttribute('class' , "boxleft");
        myDiv.appendChild(myDiv2).setAttribute('class' , "boxright");
        myArticle.appendChild(myDiv).setAttribute('id' , "divi");

        section.appendChild(myArticle).setAttribute('id' , "arti");
        }      
    }