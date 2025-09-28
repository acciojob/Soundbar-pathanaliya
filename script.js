//your JS code here. If required.
// Array of sound names (same as file names inside sounds/ folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

// Create buttons dynamically
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds(); // stop any playing sound
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsContainer.appendChild(btn);

  // Create hidden audio element for each sound
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`; // ensure your sounds folder has these files
  document.body.appendChild(audio);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
  stopSounds();
});

buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0; // reset audio
  });
}
