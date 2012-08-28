
$("#stop").click(function(){
    Methods.log("custom.js", "clicked stop");
    jsPro.stop();     
});

$("#start").click(function(){
    Methods.log("custom.js", "clicked start");
    jsPro.run();     
});
