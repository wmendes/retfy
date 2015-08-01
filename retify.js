function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  },

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [
new Gosling("horizontal", "http://i.imgur.com/iqCMuFE.jpg"),
new Gosling("horizontal", "http://i.imgur.com/3gFp8w8.jpg"),
new Gosling("horizontal", "http://i.imgur.com/v1bqZJP.jpg"),
new Gosling("horizontal", "http://i.imgur.com/sVqAO8W.gif"),
new Gosling("horizontal", "http://i.imgur.com/kqx1r3g.gif"),

  new Gosling("vertical", "http://i.imgur.com/P3m7NjS.jpg"),
new Gosling("vertical", "http://i.imgur.com/Ymg4gii.jpg"),
new Gosling("vertical", "http://i.imgur.com/MsX5qou.jpg"),
new Gosling("vertical", "http://i.imgur.com/La5DJQc.jpg"),
new Gosling("vertical", "http://i.imgur.com/mcKkcvx.jpg"),
new Gosling("vertical", "http://i.imgur.com/q2v5bAj.gif"),
new Gosling("vertical", "http://i.imgur.com/42iPC4C.gif"),
new Gosling("vertical", "http://i.imgur.com/rhBUSlB.gif"),
new Gosling("square", "http://i.imgur.com/2FvjmZX.jpg"),
new Gosling("square", "http://i.imgur.com/QAfgwnq.jpg"),
new Gosling("square", "http://i.imgur.com/dvM4NBO.jpg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}

(function (document) {

  getGosling.init(myGosling);
  var images = document.getElementsByTagName('img'), length = images.length

  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getGosling[ratio]());
    var img = getGosling[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
