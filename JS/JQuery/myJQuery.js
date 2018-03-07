$(".navbar").hide();
$("body").scroll(function(){
    if($("body").scrollTop() > 50){
        $(".navbar").fadeIn(500);
        $("#navbar-toggler").trigger('click');
    }else{
        $(".navbar").fadeOut(500);
    }
});

$("#botonScroll").click(function(){
    console.log("asd");
});