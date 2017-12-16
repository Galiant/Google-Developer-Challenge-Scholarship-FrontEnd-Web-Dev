// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!

  const submit = $("#submit");

  // Get number of grid's height end width
  var gridHeight = $("input_height").val();
  var gridWidth = $("#input_width").val();

  // Get canvas
  var canvas = $("pixel_canvas");

  // Reset to empty canvas
  canvas.children().remove();

  // Create grid's height
  for (var i = 0; i < gridHeight; i++) {
    canvas.append("<tr></tr>");
    // Create grid's width
    for (var j = 0; j < gridWidth; j++) {
      canvas
        .children()
        .last()
        .append("<td></td>");
    }
  }
  // Default background color of canvas
  $("td").css("backgroundColor", "#FFF");
}

// Event listeners
$(submit).click(function() {
  makeGrid();
});
