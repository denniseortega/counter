var countTo;
var countBy;
var outPut = 0;

$(document).ready(function(){
  $(".btn").click(function(event){
    event.preventDefault();
    countTo=parseInt($("#countTo").val());
    console.log(countTo);
    countBy=parseInt($("#countBy").val());
    console.log(countBy);

    for ( var index = 0; outPut < countTo; index = countBy) {
      console.log("hello");
      outPut += index;
      console.log(outPut);
    }

  });

});
