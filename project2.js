var Key = [85, 85, 72, 85, 72, 85, 74, 75, 85, 71];
var LightUp = ["dotB", "dotB1","dotA","dotB2","dotA1", "dotB3","dotB4","dotC","dotB5","dotG"];
var count = 0;
window.addEventListener('keydown', event => {
    if (event.keyCode == 65) {
        setBackgroundColor('green', 'white1');
        playAudio('c3.mp3');
        
      }
      if (event.keyCode == 87) {
        setBackgroundColor('green', 'black1');
        playAudio('c-3.mp3');
      }
      if (event.keyCode == 83) {
        setBackgroundColor('green', 'white2');
        playAudio('d3.mp3');
      }
      if (event.keyCode == 69) {
        setBackgroundColor('green', 'black2');
        playAudio('d-3.mp3');
      }
      if (event.keyCode == 68) {
        setBackgroundColor('green', 'white3');
        playAudio('e3.mp3');
      }
      if (event.keyCode == 70) {
        setBackgroundColor('green', 'white4');
        playAudio('f3.mp3');
      }
      if (event.keyCode == 71) {
        setBackgroundColor('green', 'white5');
        playAudio('g3.mp3');
      }
      if (event.keyCode == 72) {
        setBackgroundColor('green', 'white6');
        playAudio('a4.mp3');
      }
      if (event.keyCode == 74) {
        setBackgroundColor('green', 'white7');
        playAudio('b4.mp3');
      }
      if (event.keyCode == 75) {
        setBackgroundColor('green', 'white8');
        playAudio('c4.mp3');
      }
      if (event.keyCode == 84) {
        setBackgroundColor('green', 'black3');
        playAudio('f-3.mp3');
      }
      if (event.keyCode == 89) {
        setBackgroundColor('green', 'black4');
        playAudio('g-3.mp3');
      }
      if (event.keyCode == 85) {
        setBackgroundColor('green', 'black5');
        //setBackgroundColor('green', 'dotB');
        //wsetBackgroundColor('green', 'dotB1');
        playAudio('a-4.mp3');
      }
      if (event.keyCode == Key[count]){
        setBackgroundColor('green', LightUp[count]);
        count++;
        if (count == LightUp.length){
          for(let i = 0;i < LightUp.length;i++){
            setBackgroundColor('yellow', LightUp[i]);
            playAudio('war-hymn.mp3');
            
        }
        document.getElementById("rev").style.visibility = "visible";
      }
    }
      else{
        count = 0;
        for(let i = 0;i < LightUp.length;i++){
          setBackgroundColor('turquoise', LightUp[i]);
        }
      }
});

window.addEventListener('keyup', event => {
 setBackgroundColor('white', 'white1');
 setBackgroundColor('black', 'black1');
 setBackgroundColor('white', 'white2');
 setBackgroundColor('white', 'white3');
 setBackgroundColor('black', 'black2');
 setBackgroundColor('black', 'black3');
 setBackgroundColor('black', 'black4');
 setBackgroundColor('black', 'black5');
 setBackgroundColor('white', 'white4');
 setBackgroundColor('white', 'white5');
 setBackgroundColor('white', 'white6');
 setBackgroundColor('white', 'white7');
 setBackgroundColor('white', 'white8');

});

function setBackgroundColor(color, pianoKey) {
 document
   .querySelector(pianoKey)
   .style
   .backgroundColor = color;
}
function playAudio(fileName){
 var audio = new Audio(fileName);
 audio.play();
}

function playVideo(fileName){
    var vid = document.getElementById(fileName);
    vid.play();
}