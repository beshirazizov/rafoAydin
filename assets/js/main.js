introcon();
$(window).scroll(function(event) {
    introcon();
});

function introcon() {
    if ($(window).scrollTop() > 1) {
        $("#intro-contacts").addClass("animated fadeOutDown");
        $("nav").addClass("scrolled");
    } else {
        $("#intro-contacts").removeClass("fadeOutDown");
        $("#intro-contacts").addClass("fadeInUp");
        $("nav").removeClass("scrolled");
    }
}

$('.social-icon i').each(function() {
    var width = $(this).width();
    $(this).css("line-height", width + "px");
});


$('.youtube iframe').each(function() {
    var width = $(this).width();
    $(this).css("height", width / 1.777);
});
$(".sendmailbtn").click(function(e) {
    e.preventDefault();
    subject = $("#subjin").val();
    body = $("#msjin").val() + " - " + $("#namein").val() + " / " + $("#cinfoin").val();
    window.open('mailto:info@rafoaydin.com?subject=' + subject + '&body=' + body + '');
})