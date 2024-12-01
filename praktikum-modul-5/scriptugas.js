$(document).ready(function(){
    $('body').css({
        "font-family": "Arial",
        "margin": "0",
        "padding": "0",
    });

    $('header').css({
        "background-size": "cover",
        "background-position": "center",
        "min-height": "300px",
        "color": "#fff",
        "text-align": "center",
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
        "padding": "20px",
    });

    $('.container').css({
        "max-width": "800px",
        "matgin": "0 auto",
        "padding": "20px",
        "text-align": "center",
    });

    $('h1').css({
        "font-size": "2em",
        "margin-bottom": "10px",
    });

    $('p').css({
        "font-size": "small",
        "line-height": "1.6",
    });

    $('.featured').css({
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "center",
    });

    $('.img-featured').css({
        "width": "100px",
        "margin": "10px",
        "text-align": "center",
    });

    $('img').css({
        "width": "100%",
        "height": "fit-content",
    });

    // efek fadeIn untuk gambar
    $('img').each(function(index) {
        $(this).delay(index * 300).fadeTo(500, 1);
    });

    //Event handling untuk galeri foto
    $('.featured img').on('click', function(){
        var src=$(this).attr('src');
        $('#modalimage').attr('src', src);
        $('#myModal').fadeIn();
    });

    $('.modal .close').on('click', function(){
        $('#myModal').fadeOut();
    });

    $(window).on('click', function(event){
        if($(event.target).is('#myModal')){
            $('#myModal').fadeOut();
        }
    });
});