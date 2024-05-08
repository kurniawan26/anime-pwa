const cardWrapper = document.querySelector(".explore-anime");

const getAllAnime = async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await response.json();


  return data.data
}

getAllAnime().then((data) => {
  const card = data.map((anime) => {
    console.log(anime)
    return `      
    <div class="card">
    <div class="card-image">
      <img
        src="${anime.images.jpg['large_image_url']}"
        alt="${anime.title}"
      />
    </div>
    <div class="card-content">
    <h3 class="card-label">${anime.rank}</h3>
      <h2 class="card-title">
        <a href="#">
          <span>${anime.title}</span>
        </a>
      </h2>
      <p class="card-text">${anime?.synopsis?.substring(0, 150)}</p>
      </p>
    </div>
  </div>`;
  });

  cardWrapper.insertAdjacentHTML("beforeend", card);
});