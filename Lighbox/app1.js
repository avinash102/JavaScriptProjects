

var $overlay = $('<div id="overlay"></div>');
var $img = $("<img/>");
var $caption = $("<p></p>")



$("body").append($overlay);
$overlay.append($img);
$overlay.append($caption);


$(".imageGallery a ").click(function(e){
    e.preventDefault();
    $overlay.show();
    var Location = $(this).attr("href");
    $img.attr("src",Location);
    var caption = $(this).children("img").attr("src");
    $caption.text(caption).css("text-transform","uppercase");  
})

$overlay.click(function(){
    $(this).hide();
})