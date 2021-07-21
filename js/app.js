const render = (shuffle) => {
    let container = document.querySelector(".tiles");
    let tiles = Array.prototype.slice.call(document.querySelectorAll('.tile'));
    tiles.forEach(tile => {
        container.removeChild(tile);
    })
    if (shuffle) {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
    }
    else {
        tiles.sort((a, b) => a.innerText - b.innerText);
    }
    document.getElementById("btnSort").disabled = !shuffle;
    tiles.forEach(tile => {
        container.appendChild(tile);
    })
}