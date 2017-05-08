$(document).ready(function (){
    documentHeight();
});

const documentHeight = () => {
    $('body,html').css("min-height", $(window).height());
}