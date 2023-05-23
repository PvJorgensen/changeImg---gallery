const myImages = ['assets/images/Product/Chili-01.jpg', 'assets/images/Product/Chili-02.jpg', 'assets/images/Product/Chili-03.jpg', 'assets/images/Product/Chili-04.jpg', 'assets/images/Product/Chili-05.jpg', 'assets/images/Product/Chili-06.jpg']; // til array opgaven, byg dit array af billed urlér her.
const myApp = document.getElementById("app")

window.addEventListener("load", generateGrid);

function generateGrid() {
    clearApp();
    
    myImages.map((imageUrl)=>{

        createCard(imageUrl);
    });
}

function createCard(myUrl) {

    let myArticleTag = document.createElement('article');
    myArticleTag.classList.add("gallery");
    let myImageTag=document.createElement('img');
    myImageTag.src=myUrl;
    myImageTag.addEventListener('click', clickSmall);

    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);
    

}

function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    buildBig(myUrl);

}

function buildBig(myUrl) {
    clearApp();
    console.log('build big');
    let myArticleTag=document.createElement('article');
    myArticleTag.classList.add("detailView");
    let myImageTag=document.createElement('img');
    myImageTag.src=myUrl;
    myImageTag.addEventListener('click', generateGrid);

    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);


}

function clearApp() {
    myApp.innerHTML = "";
}