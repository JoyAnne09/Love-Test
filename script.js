document.addEventListener('DOMContentLoaded', function() {
  var clickMeButton = document.querySelector("#click-me");
  var loadingSpinner = document.querySelector("#loading");
  var gifImage = document.querySelector("img");
  var cherishText = document.querySelector("h1");

  clickMeButton.addEventListener("click", function () {
      // Hide the button
      clickMeButton.style.display = 'none';
      // Hide the GIF and text
      gifImage.style.display = 'none';
      cherishText.style.display = 'none';
  p
      // Simulate some loading time (for demonstration purposes)
      setTimeout(function() {
          // After some time, hide the loading spinner and show the button again
          loadingSpinner.style.display = 'none';
          clickMeButton.style.display = 'inline-block'; // or 'block' depending on your button's original display style
      }, 3000); // Adjust the time as needed
  });
});
document.getElementById("click-me").addEventListener("click", function() {
  // Show loading GIF
  document.getElementById("loading-gif").classList.remove("hidden");

  // Simulate some delay (e.g., fetching data or processing)
  setTimeout(function() {
      // Hide loading GIF after some delay (simulated)
      document.getElementById("loading-gif").classList.add("hidden");
  }, 2000); // Adjust the time as needed (2000 milliseconds = 2 seconds)
});
