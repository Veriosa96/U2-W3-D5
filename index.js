const listTrack = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark",
      { method: "GET" }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(res)
      let card = document.getElementById("content");
      for (let i = 0; i < 4; i++) {
        const artist = data.data[i];
        card.innerHTML += `<div class="card mx-2 py-2" style="width: 18rem;">
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


const listTrack1 = async function() {
    try {
    let res1 = await fetch (
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark",
        { method: "GET" }
      );
      if(res1.ok){
      let data1 = await res1.json()
      let ins = document.getElementById("secondRow")
      let element = data1.data[1]
        ins.innerHTML += 
        `<div class="card text-bg-dark">
      <img src="${element.album.cover_big}" class="card-img"  alt="albumPic">
      <div class="card-img-overlay">
        <h5 class="card-title">${element.title}</h5>
      </div>
    </div>`;           
      }
     
    }
    
catch(error){
   console.log(error)    
} 
}
listTrack1()


const favouriteAlbum = async function() {
    try{
        let res2 = await fetch (
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=sum41",
            { method: "GET" }
          );
          if(res2.ok){
            let data2 = await res2.json()
            for(let i=0; i<1; i++) {
                let carousel = data2.data[i]
                album.innerHTML += 
                `<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ">
                  <div class="carousel-item active ">
                    <img src="${carousel.album.cover_big}" class="d-flex " alt="album pic">
                    <h2>${carousel.title}</h2>
                  </div>
                  <div class="carousel-item ">
                  <img src="${carousel.album.cover_big}" class="d-flex " alt="...">
                  <h2>${carousel.title}</h2>
                </div>
              </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>`
            }
          }
    }
    catch(error){
        console.log(error)
    }
}
favouriteAlbum()

