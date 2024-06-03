// JavaScript can be used to interact with the video player, such as playing, pausing, or controlling playback

// Get the video element
const video = document.getElementById('brandVideo');

// Play the video
function playVideo() {
    video.play();
}

// Pause the video
function pauseVideo() {
    video.pause();
}

// Slideshow controls

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace("active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += "active";
}


// Show review popup
document.getElementById("openMap").addEventListener("click", function() {
  document.getElementById("mapOverlay").style.display = "block";
  document.getElementById("mapContainer").style.display = "block";
})
document.getElementById("closeMap").addEventListener("click", function() {
  document.getElementById("mapOverlay").style.display = "none";
  document.getElementById("mapContainer").style.display = "none";
})
document.getElementById("mapOverlay").addEventListener("click", function() {
  document.getElementById("mapOverlay").style.display = "none";
  document.getElementById("mapContainer").style.display = "none";
})


// Google map API
function GFG() {
  // Define locations
  const seattleLocation = new google.maps.LatLng(
    47.614288330078125, -122.32201385498047
  );
  const northSeattle = new google.maps.LatLng(
    47.699510, -122.333040
  );
  const capHill = new google.maps.LatLng(
    47.604462, -122.320747
  );
  const southSeattle = new google.maps.LatLng(
    47.547420, -122.351350
  );
  const tacoma = new google.maps.LatLng(
    47.218349, -122.467613
  );

  let CustomOp = {
      center: seattleLocation,
      zoom: 9,
      icon: 'https://i.postimg.cc/63KLTQ0g/marker.png',
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Map object
  let map = new google.maps.Map(
      document.getElementById("map"),
      CustomOp
  );

  // Markers
  const marker = new google.maps.Marker({
    position: northSeattle,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: capHill,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: southSeattle,
    map: map,
  });
  const marker4 = new google.maps.Marker({
    position: tacoma,
    map: map,
  });
}