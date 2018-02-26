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
    imgGallery();

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


var userDataKeys = ["id", "dead", "name", "alias", "portrait", "picture", "bio", "organization", "house"];

var tableContainer = document.getElementById('tablecontainer_1');
var pictureGallery = document.createElement('pictureGallery');
var pictureHeader = document.createElement('pictureHeader');
var headerTr = document.createElement('headerTr');
var pictureGalleryBody = document.createElement('pictureGalleryBody');


pictureGallery.appendChild(pictureHeader);
pictureHeader.border = 1;
pictureHeader.appendChild(headerTr);
pictureGallery.appendChild(pictureGalleryBody);

table.appendChild(tbody);

var appear = function () {
    for (var i = 0; i < headerNamesArray.length; i++) {
        var headerName = headerNamesArray[i]
        var th = document.createElement("th");
        th.innerText = headerName;
        headerTr.appendChild(th);
    }
}

var appearTableBody = function (usersArray) {
        for (var i = 0; i < usersArray.length; i++) {
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
        }