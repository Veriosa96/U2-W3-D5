const listTrack = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark",
      { method: "GET" }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let card = document.getElementById("content");
      for (let i = 0; i < 4; i++) {
        const artist = data.data[i];
        card.innerHTML += `<div class="card mx-2" style="width: 18rem;">
          <img src="${artist.album.cover_big}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${artist.title}</h5>
            <p class="card-text">Album: ${artist.album.title}</p>
          </div>
        </div>`;
    }
    
}
} catch (error) {
    console.log(error);
}
};
listTrack();


const listTrack1 =  async function() {
    try{
        let res1 = await fetch (
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark",
            { method: "GET" }
          ); 
          if(res1.ok){
            let data1 = await res1.json()
            console.log(data1)
    let card2 = document.getElementById("secondRow")
        card2.innerHTML += 
        `<div class="card text-bg-dark">
      <img src="${artist[3].album.cover_big}" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">${artist[3].title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>`;
          }
        } catch (error) {
            console.log(error)
    }
}

