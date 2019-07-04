    var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'https://jeraldvj.github.io/assignments/lesson-9/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var villageTown = request.response;
      showTown(villageTown);
    }
    

    function showTown(jsonObj) {
      var town = jsonObj['towns'];
        
      for (var i = 0; i < town.length; i++) {
          if (i==4 || i==5 || i==1){
        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImg = document.createElement('img');

        myH2.textContent = town[i].name;
        myPara1.textContent = town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Population:' + town[i].currentPopulation;
        myPara4.textContent = 'Annual Rain Fall: ' + town[i].averageRainfall;

        var attr = document.createAttribute("src");
        attr.value = "images/img" + i + ".jpg";
        var h = document.getElementsByTagName("img")[0];
        myImg.setAttributeNode(attr);

        
        myDiv.appendChild(myH2).setAttribute('id' , "hd");
        myDiv.appendChild(myPara1).setAttribute('id' , "p1d");
        myDiv.appendChild(myPara2).setAttribute('id' , "p2d");
        myDiv.appendChild(myPara3).setAttribute('id' , "p3d");
        myDiv.appendChild(myPara4).setAttribute('id' , "p4d");
        myDiv.appendChild(myImg).setAttribute('id' , "pi");
        myArticle.appendChild(myDiv).setAttribute('id' , "divi");

        section.appendChild(myArticle).setAttribute('id' , "arti");
        }
      }
    }