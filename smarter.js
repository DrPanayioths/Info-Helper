// Remember The Creator Cookie

document.cookie = "Visited DrPanayioths Site,value=true; path=/";

// Vote System


function psifosep() {
  var votecheckare = localStorage.getItem("vote")
  if (votecheckare === "true") {
    alert("You Have Already Vote A Operating System! But Wait Until The Next Vote!");
  } else {
    const inpa = prompt("Write Your Favourite Operating System:");
    alert("Perfect! Your Favourite Operating System Is: " + inpa);
    localStorage.setItem("vote", "true");
    localStorage.setItem("Vote_Value", inpa)
    }
  }



 // Function to check if the user is on a mobile device
function isMobileDevice() {
 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function redirectIfMobile() {
 if (isMobileDevice()) {
 window.location.href = 'https://drpanayioths.github.io/helper/Mobile/notavailable.html';
  }
}
window.onload = redirectIfMobile; 



























