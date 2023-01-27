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


const listTrack1 = async function() {
    try {
    let res1 = await fetch (
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark",
        { method: "GET" }
      );
      if(res1.ok){
      let data = await res1.json()
      let ins = document.getElementById("secondRow")
      let element = data.data[3]
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

