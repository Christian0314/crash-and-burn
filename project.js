window.addEventListener('keydown', event => {
    if (event.keyCode == 65) {
        setBackgroundColor('green', 'white1');
        setBackgroundColor('green', 'dot1C');
        playAudio('c3.mp3');
        
    }
      if (event.keyCode == 87) {
        setBackgroundColor('green', 'black1');
        setBackgroundColor('green', 'dot1C');
        playAudio('c-3.mp3');
      }
      if (event.keyCode == 83) {
        setBackgroundColor('green', 'white2');
        setBackgroundColor('green', 'dot1D');
        playAudio('d3.mp3');
      }
      if (event.keyCode == 69) {
        setBackgroundColor('green', 'black2');
        setBackgroundColor('green', 'dot1D');
        playAudio('d-3.mp3');
      }
      if (event.keyCode == 68) {
        setBackgroundColor('green', 'white3');
        setBackgroundColor('green', 'dot1E');
        playAudio('e3.mp3');
      }
      if (event.keyCode == 70) {
        setBackgroundColor('green', 'white4');
        setBackgroundColor('green', 'dot1F');
        playAudio('f3.mp3');
      }
      if (event.keyCode == 71) {
        setBackgroundColor('green', 'white5');
        setBackgroundColor('green', 'dot1G');
        playAudio('g3.mp3');
      }
      if (event.keyCode == 72) {
        setBackgroundColor('green', 'white6');
        setBackgroundColor('green', 'dot1A');
        playAudio('a4.mp3');
      }
      if (event.keyCode == 74) {
        setBackgroundColor('green', 'white7');
        setBackgroundColor('green', 'dot1B');
        playAudio('b4.mp3');
      }
      if (event.keyCode == 75) {
        setBackgroundColor('green', 'white8');
        setBackgroundColor('green', 'dot12C');
        playAudio('c4.mp3');
      }
      if (event.keyCode == 84) {
        setBackgroundColor('green', 'black3');
        setBackgroundColor('green', 'dot1F');
        playAudio('f-3.mp3');
      }
      if (event.keyCode == 89) {
        setBackgroundColor('green', 'black4');
        setBackgroundColor('green', 'dot1G');
        playAudio('g-3.mp3');
      }
      if (event.keyCode == 85) {
        setBackgroundColor('green', 'black5');
        //setBackgroundColor('green', 'dotB');
        //wsetBackgroundColor('green', 'dotB1');
        setBackgroundColor('green', 'dot1A');
        playAudio('a-4.mp3');
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
 setBackgroundColor('turquoise', 'dot1C');
 setBackgroundColor('turquoise', 'dot1D');
 setBackgroundColor('turquoise', 'dot1E');
 setBackgroundColor('turquoise', 'dot1F');
 setBackgroundColor('turquoise', 'dot1G');
 setBackgroundColor('turquoise', 'dot1A');
 setBackgroundColor('turquoise', 'dot1B');
 setBackgroundColor('turquoise', 'dot12C');

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
