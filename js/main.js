const search = document.getElementById("nikthesearch");
const matchList = document.getElementById("match-list");

const searchState = async searchterm => {
  const res = await fetch("./data/states.json");
  const states = await res.json();

  let matchArray = states.filter(state => {
    const regex = new RegExp(`^${searchterm}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (matchArray.length === 0) {
    matchArray = [];
    matchList.innerHTML = " ";
  }

  outputHtml(matchArray);
};

const outputHtml = matcharr => {
  if (matcharr.length > 0) {
    const html = matcharr
      .map(
        matchele => `
    <div class="card card-body mb-1">
      <h2>${matchele.name}(${matchele.abbr})
        <span class="text-primary">
        ${matchele.capital}
        </span>
      </h2>
      <small>Lat: ${matchele.lat}/ Long: ${matchele.long}</small>
    </div>
    `
      )
      .join("");
    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchState(search.value));
