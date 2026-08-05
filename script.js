function setup() {
  const episodes = getAllEpisodes();
  makePageForEpisodes(episodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";

  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.className = "episode-card";

    const code = `S${String(episode.season).padStart(2, "0")}E${String(episode.number).padStart(2, "0")}`;

    card.innerHTML = `
      <h2>${episode.name} - ${code}</h2>
      <img src="${episode.image.medium}" alt="${episode.name}" />
      <p>${episode.summary}</p>
    `;

    rootElem.appendChild(card);
  });

  const credit = document.createElement("p");
  credit.innerHTML = 'Data originally from <a href="https://www.tvmaze.com/">TVMaze.com</a>';
  rootElem.appendChild(credit);
}

window.onload = setup;