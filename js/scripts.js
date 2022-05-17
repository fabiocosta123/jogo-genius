const _data = {
  gameOn: false,
  timeout: undefined,
  sounds: [],

  strict: false,
  playerCanPlay: false,
  score: 0,
  gameSequence: [],
  playerSequence: [],
};

const _gui = {
  counter: document.querySelector(".gui_counter"),
  switch: document.querySelector(".gui_btn--switch"),
  led: document.querySelector(".gui_led"),
  strict: document.querySelector(".gui_btn--strict"),
  start: document.querySelector(".gui_btn--start"),
  pads: document.querySelectorAll(".game_pad"),
};

const _soundUrls = [
  "audio/simonSound1.mp3",
  "audio/simonSound2.mp3",
  "audio/simonSound3.mp3",
  "audio/simonSound4.mp3",
];

_soundUrls.forEach((sndPath) => {
  const audio = new Audio(sndPath);
  _data.sounds.push(audio);
});

_gui.switch.addEventListener("click", () => {
  _data.gameOn = _gui.switch.classList.toggle("gui_btn--switch--on");
  _gui.counter.classList.toggle("gui_counter--on");
  _gui.counter.innerHTML = "--";

  _data.strict = false;
  _data.playerCanPlay = false;
  _data.score = 0;
  _data.gameSequence = [];
  _data.playerSequence = [];

  disablePads();

  _gui.led.classList.remove("gui_led--active");
});

_gui.strict.addEventListener("click", () => {
  if (!_data.gameOn) return;
  _data.strict = _gui.led.classList.toggle("gui_led--active");
  console.log(_data.strict);
});

_gui.start.addEventListener("click", () => {
  startGame();
});

const padListener = (e) => {};

_gui.pads.forEach((pad) => {
  pad.addEventListener("click", padListener);
});

const startGame = () => {
  blink("--", () => {
    newColor();
  });
};

const setScore = () => {};

const newColor = () => {
  Math.floor(Math.random() * 4);
};

const playSequence = () => {};

const blink = (text, callback) => {
  let counter = 0;
  on = true;
  _gui.counter.innerHTML = text;
  const interval = setInterval(() => {
    if (on) {
      _gui.counter.classList.remove("gui_counter--on");
    } else {
      _gui.counter.classList.add("gui_counter--on");
      if (++counter === 3) {
        clearInterval(interval);
        callback();
      }
      on = !on;
    }
  }, 250);
};

const waitForPlayerClick = () => {};

const resetOrPlayAgain = () => {};

const changePadCursor = (cursorType) => {};

const disablePads = () => {
  _gui.pads.forEach((pad) => {
    pad.classList.remove("game_pad--active");
  });
};
