$(document).ready(function (){

    //slider
    //con este if se hace una condicion para la pagina de inicio y que se cargue solo alli
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
        
    });

    //pots
    

    var posts = [
        {
            title: "Prueba de titulo 1",
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            title: "Prueba de titulo 2",
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            title: "Prueba de titulo 3",
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            title: "Prueba de titulo 4",
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            title: "Prueba de titulo 5",
            date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
    ];
        posts.forEach((item, index) => {
            var post = `            
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p> ${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>`;
            
            $("#posts").append(post);
        })
    
    }

    // selector de theme
        var theme = $("#theme")

        $("#to-green").click(function(){
            theme.attr("href","css/green.css")
        });

        $("#to-red").click(function(){
            theme.attr("href","css/red.css")
        });

        $("#to-blue").click(function(){
            theme.attr("href","css/blue.css")
        });

        //Scroll hacia arriba 
        $('.subir').click(function(e){
            e.preventDefault();

            $(`html, body`).animate({
                scrollTop: 0
            },500);

            return false;
        });

    // Login false
    $("#login form").submit(function(){
            var form_name = $("#form_name").val();
            localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

    about_parrafo.html("<strong>bienvenido, "+ form_name);
    about_parrafo.append("<a href='#' id='logout'>  Cerrar sesion</a>");    
    
    $(`#login`).hide();
    
    $(`#logout`).click(function(){
        localStorage.clear();
        location.reload();
    });
    }
    //pagina (Quienes somos?) acordeon
    if(window.location.href.indexOf('about') > -1){
        
        $("#acordeon").accordion();

    }
    
    //reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){ 
            var reloj = moment().format("hh:mm:ss");
        
            $('#reloj').html(reloj);

        }, 1000);

    }
    
    
    //validation
    if(window.location.href.indexOf('contac') > -1){
        
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang: 'es',
            erroMessagePosition: 'top',
            scrollToTopOnError: true
        });


    }


});