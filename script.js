$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("What a loser go to the Doge House");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("So much Wow enter the Combie");
    $("#outputDiv").toggle();
  });
});