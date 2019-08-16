$(document).ready(function(){

    $(".arrow").hide();

    $(".icon").click(function(){
        $(".main").toggleClass("mainScale")
        $(this).toggleClass("cross");
        $(".sub").toggleClass("subRotate");
        $(".arrow").toggle(800);
    });
    $(".arrow").click(function(){
        $(".sub").toggleClass("arrowSubRotate");
    });
});