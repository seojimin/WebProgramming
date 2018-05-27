// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function ()
{
    var videocon = document.querySelector("#video"); 
    var videoString = ""; 
    for(var i=0;i<video.source.length;i++)
    {
        videoString += '<p><video controls ="' + video.controls + '">';
        videoString += "<source src='" + video.source[i].src + "'" + " type='" + video.source[i].type + "'>"+ "</video></p>";
    }
    videocon.innerHTML = videoString; 
}; 