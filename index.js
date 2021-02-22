const container = document.querySelector('.container');

let startingTileAmount = 10;

container.style.cssText = `grid-template-rows: repeat(${startingTileAmount}, 1fr); grid-template-columns: repeat(${startingTileAmount}, 1fr);`

function divMaker(num) {
  for(let i = 1; i <= (num * num); i++) {
    let tile = document.createElement('div');
    tile.classList = 'tile'; //className vs classList?
    // tile.className = 'tile';
    tile.style.background = 'rgb(255,255,255)';
    container.appendChild(tile)
  }
}

divMaker(startingTileAmount);//placement of this matters, remember to ask matt? also when to push origin master

let tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      // tile.classList.add('moused');//adds css class
      // tile.style.cssText = `background: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;// tile random RGB value
      // tile.style.cssText = `background: rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
      tile.style.background = blacker(tile.style.background);
    })
  });

const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  startingTileAmount = parseInt(prompt('What size grid?', 10));
  while(startingTileAmount > 64) {
    startingTileAmount = parseInt(prompt('Please choose a number between 1 and 64'), 10);
  }
  container.querySelectorAll('.tile').forEach(tile => tile.remove());
  container.style.cssText = `grid-template-rows: repeat(${startingTileAmount}, 1fr); grid-template-columns: repeat(${startingTileAmount}, 1fr);`;
  divMaker(startingTileAmount);
  tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      // tile.classList.add('moused');//adds css class
      // tile.style.cssText = `background: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; //random RGB value
      // tile.style.cssText = `background: rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
      tile.style.background = blacker(tile.style.background);
    });
  });
});

refresh.style.cssText = `background: rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`;

function blacker (style) {
  let start = style.indexOf('(') + 1;
  let end = style.indexOf(',');
  let value = style.slice(start, end);
  let newValue = value - 28.34;
  return `rgb(${newValue},${newValue},${newValue})`
}