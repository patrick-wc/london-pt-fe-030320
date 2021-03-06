const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

/* <div class="timer timer_1">
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
</div> */

const createTimerEl = (number) => {
  const div = document.createElement("div");
  div.classList.add("timer");
  div.classList.add(`timer_${number}`);
  div.innerHTML = `
    <div class="remove"></div>
    <h3>0 <span>00</span></h3>
    <div class="btn">
      <button class="reset">Reset</button>
      <button class="stop">Stop</button>
    </div>`;
  return div;
};

addCounterEl.addEventListener("click", (event) => {
  //   console.log("test");
  if (timersCount < 5) {
    timersCount++;
    // if user has clicked addTimer < 5 times, then...
    const timer = createTimerEl(timersCount);
    timersContainerEl.appendChild(timer);
    startTheTimer(timersCount);
  }
});

const startTheTimer = (number) => {
  const thisTimer = document.querySelector(`.timer_${number}`);
  let time = 0;
  const h3El = thisTimer.querySelector("h3");
  let interval;
  interval = setInterval(() => {
    time++;
    const seconds = Math.floor(time / 100);
    const milliseconds = time % 100;
    h3El.innerHTML = `${seconds} <span>${milliseconds}</span>`;
  }, 10);

  // reset timer
  let resetBtn = thisTimer.querySelector(`.reset`);
  resetBtn.addEventListener("click", (event) => {
    console.log(`clicked .reset`);

    clearInterval(interval);
    let time = 0;
    interval = setInterval(() => {
      time++;
      const seconds = Math.floor(time / 100);
      const milliseconds = time % 100;
      h3El.innerHTML = `${seconds} <span>${milliseconds}</span>`;
    }, 10);
  });

  // stop timer
  let stopBtn = thisTimer.querySelector(`.stop`);
  stopBtn.addEventListener("click", (event) => {
    clearInterval(interval);
  });

  // remove timer
  let removeBtn = thisTimer.querySelector(".remove");
  removeBtn.addEventListener("click", (event) => {
    thisTimer.parentNode.removeChild(thisTimer);
  });
};
