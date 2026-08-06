function setup() {
  const allepisodes = getAllEpisodes();
  makePageForEpisodes(allepisodes);
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
  credit.innerHTML =
    'Data originally from <a href="https://www.tvmaze.com/">TVMaze.com</a>';
  rootElem.appendChild(credit);
}

window.onload = setup;

// Your code uses innerHTML to create the episode cards, while mine uses createElement() and appends each element separately.
// I prefer my implementation because it is more structured, easier to modify, and avoids using innerHTML.
// I like that urs code is shorter and easier to read because it uses template strings with innerHTML.
// I learned another way to create HTML using innerHTML, and I saw a different approach to solving the same problem.
