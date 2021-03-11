$(document).ready(function() {
    $(".inputTextarea").keyup(function() {
        $(".resultTextarea").val($(".inputTextarea").val());
        $("#charCount").val($(".inputTextarea").val().length);
        var words = $(".inputTextarea").val().split(' ');
        $("#wordCount").val(words.length);
        $(".resultTextarea").css({
            "text-transform": "capitalize",
            "text-align": "justify"
        });
    });
    // clear input textarea btn
    $(".clsBtn").click(function() {
        $(".inputTextarea").val("");
    });
    // clear all btn
    $(".allClsBtn").click(function() {
        $(".inputTextarea").val("");
        $(".resultTextarea").val("");
    });
    // copy btn
    $(".cpyBtn").click(function() {
        var copyText = document.getElementById("form-control-result");
        $(".resultTextarea").select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied To Clipboard");
    });
});