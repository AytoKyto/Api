//random boring solution
fetch("http://www.boredapi.com/api/activity/")
  .then((response) => response.json())
  .then((response) => {
    let pone = document.getElementById("activity");
    pone.innerText = response.activity;

    let ptwo = document.getElementById("price");
    ptwo.innerText = response.price;

    let ptype = document.getElementById("type");
    ptype.innerText = response.type;
  })
  .catch((error) => alert("Erreur : " + error));

//type functionF
function typeFunction() {
  document.getElementById("wrapper-display").style.display = "block";
  let type = document.getElementById("chosetype").value;
  console.log("http://www.boredapi.com/api/activity?type=" + type);
  fetch("http://www.boredapi.com/api/activity?type=" + type)
    .then((response) => response.json())
    .then((response) => {
      let poned = document.getElementById("activityd");
      poned.innerText = response.activity;

      let ptwod = document.getElementById("priced");
      ptwod.innerText = response.price;

      let ptyped = document.getElementById("typed");
      ptyped.innerText = response.type;
    })
    .catch((error) => alert("Erreur : " + error));

  //section fot svg display:none or block
  if (type === "charity") {
    document.getElementById("charity").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("cooking").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("recreational").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
  } else if (type === "education") {
    document.getElementById("education").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("cooking").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("recreational").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
    document.getElementById("charity").style.display = "none";
  } else if (type === "social") {
    document.getElementById("social").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("cooking").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("recreational").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
    document.getElementById("charity").style.display = "none";
    document.getElementById("education").style.display = "none";
  } else if (type === "cooking") {
    document.getElementById("cooking").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("recreational").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
    document.getElementById("charity").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("social").style.display = "none";
  } else if (type === "music") {
    document.getElementById("music").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("recreational").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
    document.getElementById("charity").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("cooking").style.display = "none";
  } else if (type === "recreational") {
    document.getElementById("recreational").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("relaxation").style.display = "none";
    document.getElementById("charity").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("cooking").style.display = "none";
    document.getElementById("music").style.display = "none";
  } else if (type === "relaxation") {
    document.getElementById("relaxation").style.display = "block";
    document.getElementById("standar").style.display = "none";
    document.getElementById("charity").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("cooking").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("recreational").style.display = "none";
  } else {
  }
}

//nbr function
function nbrFunction() {
  document.getElementById("wrapper-displayt").style.display = "block";
  let nbr = document.getElementById("chosetypet").value;
  console.log("http://www.boredapi.com/api/activity?participants=" + nbr);
  fetch("http://www.boredapi.com/api/activity?participants=" + nbr)
    .then((response) => response.json())
    .then((response) => {
      //result function nbr
      let ponedt = document.getElementById("activitydt");
      ponedt.innerText = response.activity;

      let ptwodt = document.getElementById("pricedt");
      ptwodt.innerText = response.price;

      let ptypedt = document.getElementById("typedt");
      ptypedt.innerText = response.participants;
    })
    .catch((error) => alert("Erreur : " + error));
}
//music function
function music() {
  //display: none svg
  document.getElementById("education").style.display = "none";
  document.getElementById("standar").style.display = "none";
  document.getElementById("social").style.display = "none";
  document.getElementById("cooking").style.display = "none";
  document.getElementById("music").style.display = "none";
  document.getElementById("recreational").style.display = "none";
  document.getElementById("relaxation").style.display = "none";
  document.getElementById("charity").style.display = "none";
  let mus = document.getElementById("input").value;
  console.log("https://searchly.asuarez.dev/api/v1/song/search?query=" + mus);
  fetch("https://searchly.asuarez.dev/api/v1/song/search?query=" + mus)
    .then((response) => response.json())
    .then((response) => {
      //result api music
      let namemusic = document.getElementById("name-music");
      namemusic.innerText = mus;
      document.getElementById("p").style.display = "block";
      let musique = document.getElementById("musdes");
      for (let result of response.response.results) {
        let nameid = document.createElement("a");
        nameid.className = "nameid";
        //YouTube search
        nameid.href =
          "https://www.youtube.com/results?search_query=" + result.name;
        nameid.innerText = result.name;
        musique.appendChild(nameid);
      }
    })
    .catch((error) => alert("Erreur : " + error));
}
