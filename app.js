
$(document).ready(function() {
    // Getting the button element using its id
    var button = $("#clicked");
    
    button.on("click", function() {
        $("#main").html("Showing preferences... Please wait");
     // Change the background color of the button to green
     $("#main").css({"background-color": "green",
                      "height": "200px"
                      });
     // Add a spinner loading animation to the button
     $("#main").append("<br><br><i style='font-size:50px' class='fa fa-spinner fa-spin'></i>");
    });

});
