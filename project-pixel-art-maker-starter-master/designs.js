$(function() {
  // When size is submitted by the user, call makeGrid()
  function makeGrid(gridHeight, gridWidth) {
    var table = $("#pixel_canvas");
    var color = $("#colorPicker");

    // Get number of grid's height end width
    var gridHeight = $("#input_height").val();
    var gridWidth = $("#input_width").val();

    // Create grid's height
    for (var i = 0; i < gridHeight; i++) {
      table.append("<tr></tr>");
      // Create grid's width
      for (var j = 0; j < gridWidth; j++) {
        $("tr")
          .last()
          .append("<td></td>");
      }
    }
  }
  // Event listeners
  $("#submit").click(function(event) {
    makeGrid();
    event.preventDefault();
  });
});
