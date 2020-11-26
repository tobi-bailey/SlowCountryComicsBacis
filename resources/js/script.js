

var clickComic = document.getElementById("randomComic");

window.onclick = choosePic;

var myComic = new Array("../images/comics/39.BadGrief.jpg", "../images/comics/38.Jellyfish.jpg", "../images/comics/37.MotherNatureMarathon.jpg",);

function choosePic() {
    var randomComic = Math.floor(Math.random() * myComic.length);
    document.getElementById("randomComic").src = myComic[randomComic]; 
}

