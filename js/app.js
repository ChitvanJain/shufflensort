// The method which is called on both the Shuffle and Sort Button Clicks
const render = (shuffle) => {
    let container = document.querySelector(".tiles");

    // Convert the Node list returned to an actual array
    let tiles = Array.prototype.slice.call(document.querySelectorAll('.tile'));

    tiles.forEach(tile => {
        container.removeChild(tile);
    })

    // Shuffle Button Clicked
    if (shuffle) {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
    }

    // Sort Button Clicked
    else {
        tiles.sort((a, b) => a.innerText - b.innerText);
    }

    tiles.forEach(tile => {
        container.appendChild(tile);
    })

    document.getElementById("btnSort").disabled = !shuffle;
}