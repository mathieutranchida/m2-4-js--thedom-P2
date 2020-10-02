// Preset values
const FROGS = 3;

for (let count = 1; count <= FROGS; count++) {
  let lane = document.createElement("li");
  lane.id = "lane-" + count;
  let number = document.createElement("span");
  number.innerHTML = count;
  lane.appendChild(number);
  track.appendChild(lane);
}

let racers = [];
for (let frog = 0; frog < FROGS; frog++) {
  racers.push(frogstable[frog]);
}

console.log(racers);

racers.forEach((racer, index) => {
  let frog = document.createElement("span");
  frog.innerText = racer.number;
  frog.classList.add("frog");
  frog.id = "frogRacer-" + racer.number;
  frog.style.backgroundColor = racer.color;
  document.getElementById("lane-" + (index + 1)).appendChild(frog);
  let frogName = document.createElement("span");
  frogName.classList.add("frog-name");
  frogName.innerText = racer.name;
  document.getElementById("lane-" + (index + 1)).appendChild(frogName);
  racer.progress = 0;
  racer.id = "frogRacer-" + racer.number;
});

console.log(racers);

function racingFrog(racer) {
  const trackWidth = track.offsetWidth;
  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;
    console.log(racer.name + " = " + racer.progress);
    if (racer.progress >= 100) {
      clearInterval(hop);
      console.log(racer.name + " " + "has finished the race!");
    }
  }, 1000);
}

racers.forEach((racer) => {
  racingFrog(racer);
});
