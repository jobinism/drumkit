import React from 'React'

function Home = () => {
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //each key on a keyboard has an id #
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`) //selects the actual "key" div 
    if(!audio) return
    audio.currentTime = 0; // restart the audio
    audio.play() // play the audio
    key.classList.add('playing');
    // console.log(key)
    // console.log(audio)
  });

  function removeTransition(e) {
    // console.log(e)
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing') //this = the "key" div
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))


  return (
    <body>
      <div class="keys">
        <div data-key="65" class="key">
          <kbd>A</kbd>
          <span class="sound">TOM</span>
        </div>
        <div data-key="83" class="key">
          <kbd>S</kbd>
          <span class="sound">CLAP</span>
        </div>
        <div data-key="68" class="key">
          <kbd>D</kbd>
          <span class="sound">CLOSEDHAT</span>
        </div>
        <div data-key="87" class="key">
          <kbd>W</kbd>
          <span class="sound">SNARE</span>
        </div>
        <div data-key="32" class="key">
          <kbd>SPACE</kbd>
          <span class="sound">KICK</span>
        </div>
        <div data-key="188" class="key">
          <kbd>,</kbd>
          <span class="sound">808</span>
        </div>
      </div>
      <audio data-key="65" src="sounds/tom.wav"></audio>
      <audio data-key="83" src="sounds/clap.wav"></audio>
      <audio data-key="68" src="sounds/closedhat.wav"></audio>
      <audio data-key="87" src="sounds/snare.wav"></audio>
      <audio data-key="32" src="sounds/kick.wav"></audio>
      <audio data-key="188" src="sounds/808.wav"></audio>
    </body>
  )
}