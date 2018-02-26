function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas[0].data);
    pictureHeader();

    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('json/got.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */


/*var tomb = function () {
    var nev = prompt('hol a kép?')
    var iconGallery = [];
    for (var i = 0; i < iconGallery.length; i++) {
        var element = iconGallery.length[i];
    }
    return
}*/

/*
var userDataKeys = ["id", "dead", "name", "alias", "portrait", "picture", "bio", "organization", "house"];

var tableContainer = document.getElementById('img src="assets/jon.png"');

var pictureGallery = document.createElement('img');
var pictureHeader = document.createElement('');
var headerTr = document.createElement('');
var pictureGalleryBody = document.createElement(');



pictureGallery.appendChild(pictureHeader);
pictureHeader.border = 1;
pictureHeader.appendChild(headerTr);
pictureGallery.appendChild(pictureGalleryBody);


var pictureHeader = function () {
    for (var i = 0; i < userDataKeys.length; i++) {
        var pictureHeader = userDataKeys[i]
        var egykep = document.createElement("egykep");
        egykep.innerText = pictureHeader;
        headerTr.appendChild(th);
    }
}

/*
var pictureGalleryBody = function (userDataKeys) {
        for (var i = 0; i < userDataKeys.length; i++) {
            var userObject = usersArray[i]

            var tr = document.createElement('tr');
            tbody.appendChild(tr);


            for (var j = 0; j < userDataKeys.length; j++) {
                var key = userDataKeys[j]; // pl. "city"
                var attribute = userObject[key];
                var td = document.createElement("td");
                td.innerText = attribute;
                tr.appendChild(td);
            }
        }*/

        var name = document.getElementById()