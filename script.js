function playtha(key){

switch (key){
      case "b":
          var audio = new Audio('not/b3.mp3');
          audio.play();
    break;
    case "as":
        var audio = new Audio('not/a-4.mp3');
        audio.play();
break;
  case "a":
    var audio = new Audio('not/a4.mp3');
    audio.play();
break;
case "gs":
    var audio = new Audio('not/g-3.mp3');
    audio.play();
break;
case "g":
    var audio = new Audio('not/g3.mp3');
    audio.play();
break;
case "fs":
    var audio = new Audio('not/f-3.mp3');
    audio.play();
break;
case "f":
    var audio = new Audio('not/f3.mp3');
    audio.play();
break;
case "e":
    var audio = new Audio('not/e3.mp3');
    audio.play();
break;
case "ds":
    var audio = new Audio('not/d-3.mp3');
    audio.play();
break;
case "d":
    var audio = new Audio('not/d3.mp3');
    audio.play();
break;
case "cs":
    var audio = new Audio('not/c-3.mp3');
    audio.play();
break;
case "c":
    var audio = new Audio('not/c3.mp3');
    audio.play();
break;
 default:
     alert("ERROR")




  }
}
document.onkeydown = (keyDownEvent) => {   
    pressedkey = keyDownEvent.key
    switch (pressedkey){
        case "b":
            var audio = new Audio('not/b3.mp3');
            audio.play();
      break;
      case "w":
          var audio = new Audio('not/a-4.mp3');
          audio.play();
  break;
    case "a":
      var audio = new Audio('not/a4.mp3');
      audio.play();
  break;
  case "t":
      var audio = new Audio('not/g-3.mp3');
      audio.play();
  break;
  case "g":
      var audio = new Audio('not/g3.mp3');
      audio.play();
  break;
  case "r":
      var audio = new Audio('not/f-3.mp3');
      audio.play();
  break;
  case "f":
      var audio = new Audio('not/f3.mp3');
      audio.play();
  break;
  case "e":
      var audio = new Audio('not/e3.mp3');
      audio.play();
  break;
  case "x":
      var audio = new Audio('not/d-3.mp3');
      audio.play();
  break;
  case "d":
      var audio = new Audio('not/d3.mp3');
      audio.play();
  break;
  case "v":
      var audio = new Audio('not/c-3.mp3');
      audio.play();
  break;
  case "c":
      var audio = new Audio('not/c3.mp3');
      audio.play();
  break;
    }

}

