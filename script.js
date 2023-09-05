function signinPage() {
    window.location.href = "/signIn/signIn.html";
}

//

var favChannels = [
    {img_url: "/images/LionsgatePlay.jpg"},
    {img_url: "/images/Discovery.jpg"},
    {img_url: "/images/erosnow.jpg"},
    {img_url: "/images/MANORAMAMAX.jpg"},
    {img_url: "/images/hoichoi.jpg"},
    {img_url: "/images/Vrott.png"},
    {img_url: "/images/Amc.png"},
    {img_url: "/images/Docubay.jpg"},
    {img_url: "/images/Mubi.jpg"},
    {img_url: "/images/iWonder.png"},
    {img_url: "/images/Stingray.png"},
    {img_url: "/images/CuriosityStream.png"},
];

favChannels.map(function(e){
    var div = document.createElement('div');
    div.setAttribute("class", "channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src",e.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));