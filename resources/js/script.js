

// var images = ["https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350", "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426", "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"]

// var imgState = 0;

// var imgTag = document.getElementById("imgClickAndChange");

// imgTag.addEventListener("click", function (event) {
//   imgState = (++imgState % images.length);
//   event.target.src = images[imgState];
// });

var myComic = [
    "../images/comics/39.BadGrief.jpg", 
    "../images/comics/38.Jellyfish.jpg", 
    "../images/comics/37.MotherNatureMarathon.jpg",
    "../images/comics/36.TheGrunch.jpg",
    "../images/comics/35.TeamTrees.jpg",
    "../images/comics/34.FurryLittleWingman.jpg",
    "../images/comics/33.CanadaVotes.jpg",
    "../images/comics/32.System32.jpg",
    "../images/comics/31.Aliens.jpg",
    "../images/comics/30.SaveOfHisLife.jpg",
    "../images/comics/28.DamnKirby.jpg",
    "../images/comics/27.NoneofYourBeeswax.jpg",
    "../images/comics/26.Roboball.jpg",
    "../images/comics/25.ShitJoke.jpg",
    "../images/comics/24.X.jpg",
    "../images/comics/23.BeautifulDay.jpg",
    "../images/comics/22.DatingDante.jpg",
    "../images/comics/21.Wolf.jpg",
    "../images/comics/20.SkateOrDie.jpg",
    "../images/comics/19.BePositive.jpg",
    "../images/comics/17.Canoodling.jpg",
    "../images/comics/14.GrandmasCookies.jpg",
    "../images/comics/13.DontNotJump.jpg",
    "../images/comics/12.BigfootsBriefAppearance.jpg",
    "../images/comics/11.CheckersandBoggs.jpg",
    "../images/comics/9.BiggerThanJesus.jpg",
    "../images/comics/8.NiceFish.jpg",
    "../images/comics/7.ICreamofGenie.jpg",
    "../images/comics/6.Witchcrap.jpg",
    "../images/comics/5.Intervention.jpg",
    "../images/comics/4.TooHotFull.jpg",
    "../images/comics/3.GreenwithIrony.jpg",
    "../images/comics/2.OatyBears.jpg",
    "../images/comics/1.FunCity.jpg",
];

var clickComic = document.getElementById("randomComic");

// onclick = choosePic;

// clickComic.addEventListener(onclick, 

function choosePic() {
    var randomComic = Math.floor(Math.random() * myComic.length);
    document.getElementById("randomComic").src = myComic[randomComic]; 
};

