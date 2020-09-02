/*According to combinations calculator, there are 55 combinations
to log for the options listed with repeat. This block takes input
value, translates it thorugh function and displays the calculation
in the results field*/
//```````````````````````````````````````````````````````````````````````````````
//This block works with correspondence of sections in response to their value
$(document).ready(function () {
  $("#convert").click(function () {
    var value = $("#value_inline").val();
    // console.log(value);---used this to track registration of input
    var value2 = test(value);
    $("#value_inline2").val(value2);
    //tracking selection of options
    console.log($(".selector1").val());
    console.log($(".selector2").val());
  });

  var x = $(".selector1").val();
  var y = $(".selector2").val();
  var test = function (k) {
    //Funciton combinations go here. This is a demo.
    if (x > y) {
      return k / 3;
    } else { return k / 2; }
  }

  /*This portion will enable recognition between unit pairings (i.e. tsp--> tbsp != tbsp--> tbsp)
  The idea is to stringify the combinations using JSON stringify.
  <p id="demo"></p>
  
  <script>
  var z = "01";
  var x = "01";
  var y = "10";
  switch (z) {
    case y:
      text = "Off";
      break;
    case x:
      text = "On";
      break;
    default:
      text = "No value found";
  }
  document.getElementById("demo").innerHTML = text;
  </script>
  */

  //reset button
  $("#reset").click(function () {
    $("#value_inline").val("");
    $("#value_inline2").val("");
    $(".selector1").val("");
    $(".selector2").val("");

  });
});
//````````````````````````````````````````````````````````````````````````````

var apiId = "83268794"
var apiKey = "d627b0da7ed52c774f684c8f9a89210a";
var mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
var cuisineType = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"]

$("#search-btn").on("click", function (cuisineType) {
  var queryURL = `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}&from=0&to=3&calories=591-722&health=alcohol-free&mealType=${mealType}&cuisineType=${cuisineType}`

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);

  })
})


