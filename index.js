const container = document.querySelector('.container');

// let startingTileAmount = prompt('How many tiles do you want?', 5);
let startingTileAmount = 64;

container.style.cssText = `grid-template-rows: repeat(${startingTileAmount}, 1fr); grid-template-columns: repeat(${startingTileAmount}, 1fr);`

function divMaker(num) {
  for(let i = 1; i <= (num * num); i++) {
    let tile = document.createElement('div');
    tile.classList = 'tile'; //className vs classList?
    // tile.className = 'tile';
    container.appendChild(tile)
  }
}

divMaker(startingTileAmount);//placement of this matters, remember to ask matt?

const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
      tile.classList.add('moused');
    })
  });