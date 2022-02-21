AOS.init();

$header=$(".navbar");
$header.hide();

window.onload = function() {
 setTimeout(function(){
    $header.slideDown(750)
 }, 500);
}
