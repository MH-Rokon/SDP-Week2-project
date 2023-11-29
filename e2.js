
const clearContent = () => {
    const videocontainer = document.getElementById("videocontainer");
    videocontainer.innerHTML = "";
    const oop = document.getElementById("oop");
    oop.innerHTML = "";
    var all = document.getElementById("all").style.backgroundColor = "";
    var all = document.getElementById("music").style.backgroundColor = "";
    var all = document.getElementById("comedy").style.backgroundColor = "";
    var all = document.getElementById("drawing").style.backgroundColor = "";

};
clearContent();
    var all = document.getElementById("all").style.backgroundColor = "rgb(155, 247, 6)";
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then((res) => res.json())
        .then((data) => displayData(data.data));
    
const loadAll = () => {
    clearContent();
    var all = document.getElementById("all").style.backgroundColor = "rgb(155, 247, 6)";
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then((res) => res.json())
        .then((data) => displayData(data.data));
};


const loadMusic = () => {
    clearContent();
    var music = document.getElementById("music").style.backgroundColor = "rgb(155, 247, 6)";
    fetch("https://openapi.programming-hero.com/api/videos/category/1001")
        .then((res) => res.json())
        .then((data) => displayData(data.data));
};



const sortbyview = () => {
    clearContent();
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then((res) => res.json())
        .then((data) => {
           
            data.data.sort((a, b) => a.others.views - b.others.views);
            displayData(data.data);
        });
};



const loadComedy = () => {
    clearContent();
    var comedy = document.getElementById("comedy").style.backgroundColor = "rgb(155, 247, 6)";
    fetch("https://openapi.programming-hero.com/api/videos/category/1003")
        .then((res) => res.json())
        .then((data) => displayData(data.data));
};

const loadDrawing = () => {
    clearContent();
    var drawing = document.getElementById("drawing").style.backgroundColor = "rgb(155, 247, 6)";
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
        .then((res) => res.json())
        .then((data) => displayData(data.data));
};

const displayData = (data) => {
    
    
       
            if (data.length == 0) {
                console.log("Empty Data set");
                const oop = document.getElementById("oop");
                const d = document.createElement("div");
                d.classList.add("boo");
            
                
                const thumbnailSrc = ""; 
            
                d.innerHTML = `
                    <img class="ima" src="icon.png" alt="">
                    <p  class="pa">Oop!! Sorry, There is no <br>content here</p>
                `;
            
                oop.appendChild(d);
            }
            
        


    console.log(data);
    

    const videocontainer = document.getElementById("videocontainer");

    data.forEach((video) => {

        const doc = document.createElement("div");
        doc.classList.add("box");

        doc.innerHTML = `
        <img class="img" src="${video.thumbnail}" alt="">
        <div class="de ">
            <span  class="sp">
                <img class="im" src="${video.authors[0].profile_picture}" alt="Author's Profile Picture">
            </span>
            <div class="cm">
                <h2>${video.title}</h2>
                <h4>${video.authors[0].profile_name}</h4>
                <p>${video.others.views}</p>
            </div>
        </div>
        `;

        videocontainer.appendChild(doc);
    });
};

function open() {
    
    var url = "http://project.html";

    window.open(url, "_blank");
  }