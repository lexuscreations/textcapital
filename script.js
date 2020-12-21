$(document).ready(function() {
    $(".input").keyup(function() {
        $(".result").val($(".input").val());
        $("#charCount").val($(".input").val().length);
        var words = $(".input").val().split(' ');
        $("#wordCount").val(words.length);
        $(".result").css({
            "text-transform": "capitalize",
            "text-align": "justify"
        });
    });
    $(".clsBtn").click(function() {
        $(".input").val("");
    });
    $(".allClsBtn").click(function() {
        $(".input").val("");
        $(".result").val("");
    });
    $(".cpyBtn").click(function() {
        var copyText = document.getElementById("form-control-result");
        $(".result").select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied To Clipboard");
    });
});