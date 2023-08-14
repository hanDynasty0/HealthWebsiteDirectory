/*
  Facts from:
  https://www.today.com/health/how-much-exercise-do-you-need-daily-today-t202991
  https://www.mayoclinic.org/healthy-lifestyle/adult-health/expert-answers/how-many-hours-of-sleep-are-enough/faq-20057898
  https://www.health.harvard.edu/blog/home-cooking-good-for-your-health-2018081514449
  https://www.webmd.com/mental-health/how-music-affects-mental-health
  https://www.medicalnewstoday.com/articles/blood-donation-facts#uses
  https://globalnews.ca/news/5155947/how-to-cook-at-home-more/
  https://www.verywellmind.com/why-you-should-take-care-of-your-body-and-your-health-3145077
  https://thewelcomingtable.com/how-to-learn-to-cook-for-beginners/
  https://sharpens.org/knowledge/benefits-listening-music
  https://www.verywellmind.com/mental-health-benefits-of-cooking-your-own-food-5248624
*/

const facts = [
  "150-300 minutes of weekly exercise is recommended by the WHO.",
  "Teens should get 8-10 hours of sleep, and adults should get 7+ hours of sleep.",
  "Cooking healthy meals at home is effective for weight loss and preventing type 2 diabetes.",
  "Listening to music can improve your mood, reduce stress and improve sleep quality.",
  "A single donation of blood can save up to three lives, being useful for treating serious injuries, anemia, blood disorders and cancer, and is also crucial during surgeries and childbirth.",
  "Most of the time, people don't cook at home because it is simply inconvenient, even though cooking food at home is often healther than takeout food.",
  "Taking care of your health is important because poor health increases stress on your body and mind and thus interferes with your daily life.",
  "There are many places where you can learn to cook, including cooking classes, cooking shows and food blogs.",
  "Listening to music can enhance memory, improves exercise performance, and even academic performance.",
  "Cooking with friends can increase social connection, and mastering a dish or recipe can boost self-esteem."
]

var i = Math.floor(Math.random()*facts.length);

document.getElementById("info").innerHTML = facts[i];
  
const sites = [
  "https://musclewiki.com/",
  "https://sleepopolis.com/calculators/sleep/",
  "https://myfridgefood.com/",
  "https://www.rainymood.com/",
  "https://educationalgames.nobelprize.org/educational/medicine/bloodtypinggame/index.php",
  "https://therealfoodrds.com/",
  "https://www.healthline.com/",
  "https://www.thekitchn.com/collection/cooking-school",
  "https://mapsofthemind.com/2019/10/30/6-music-playlists-psilocybin-journeys/",
  "https://basicswithbabish.co/episodes"
]
document.getElementById("button").onclick = function(){
  var site = sites[i];
  window.location.href = site;
}
document.querySelectorAll("#fact").onclick = function(){
  var i = Math.floor(Math.random()*facts.length);
  document.getElementById("info").innerHTML = facts[i];
}
