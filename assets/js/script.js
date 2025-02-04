$(function(){

    const disableScroll = function(){
        var $body = $(document.body);
        var oldWidth = $body.innerWidth();
        $body.css("overflow", "hidden");
        $body.width(oldWidth);
    }

    const enableScroll = function(){
        var $body = $(document.body);
        $body.css("overflow", "auto");
        $body.width("auto");
    }

    $('#menu-phone')
    .click(function(){
        $('#popup-container').fadeIn(500, disableScroll);
    });

    $('#popup-container')
    .click(function(event){
        if(event.target == this){
            $(this).fadeOut(500, enableScroll);
        }
    });

    $('#close-popup').click(function(event){
        $('#popup-container').fadeOut(500, enableScroll);
    });
    
});