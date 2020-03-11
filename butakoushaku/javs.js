$(function() {
    $("#p-caption-hide").click(function() {
        $(".hidden-area").css("display", "none");

        $("#p-caption-hide").css("display", "none");

        $("#p-caption-display").css("display", "block");
    });

    $("#p-caption-display").click(function() {
        $(".hidden-area").css("display", "block");

        $("#p-caption-hide").css("display", "block");

        $("#p-caption-display").css("display", "none");
    });
});