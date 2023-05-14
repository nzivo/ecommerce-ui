(function () {
  // Get the light and dark icon spans
  const lightIcon = document.getElementById("lightIcon");
  const darkIcon = document.getElementById("darkIcon");

  // Add click event listener to the icons
  lightIcon.addEventListener("click", (event) => {
    event.preventDefault();
    document.documentElement.classList.remove("dark");
    lightIcon.classList.add("bg-darkLuminousGreen");
    darkIcon.classList.remove("bg-darkLuminousGreen");
  });

  darkIcon.addEventListener("click", (event) => {
    event.preventDefault();
    darkIcon.classList.add("bg-darkLuminousGreen");
    lightIcon.classList.remove("bg-darkLuminousGreen");
    document.documentElement.classList.add("dark");
  });
})();
