// Toggles the favorite button on different recipes
function favorite() {
    var icon = event.target;
  
    if (icon.style.color === "red") {
      icon.style.color = "#aaa";
    } else {
      icon.style.color = "red";
    }
  }
