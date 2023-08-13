const sites = [
  "https://musclewiki.com/",
  "https://sleepopolis.com/calculators/sleep/",
  "https://myfridgefood.com/",
  "https://www.rainymood.com/",
  "https://educationalgames.nobelprize.org/educational/medicine/bloodtypinggame/index.php",
  "https://therealfoodrds.com/"
]
document.getElementById("button").onclick = function(){
  var i = Math.floor(Math.random()*sites.length);
  var site = sites[i];
  while(site == LocalStorage.prev){
    i = Math.floor(Math.random()*sites.length);
    site = sites[i];
  }
  LocalStorage.prev = site;
  window.location.href = site;
}
