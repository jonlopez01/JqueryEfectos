$(document).ready(function(){
    var asd = $('#pEsconder').text()
    $('#esconder').click(function(){
        $('#pEsconder').hide();
    });

    $('#mostrar').click(function(){
        $('#pEsconder').fadeIn(1000);
    });

    $('#setterStyle').click(function(){
        $('#pEsconder').addClass('pStyle');
    });

    $('#removeStyle').click(function(){
        $('#pEsconder').removeClass('pStyle')
    });

    $('#fout').click(function(){
        $('#pEsconder').fadeOut("slow");
    });

    $('#changeHtml').click(function(){
        
        $('#pEsconder').html("El parrafo ha sido cambiado");
        
    });

    $('#originHtml').click(function(){
        $('#pEsconder').html(asd);
    });

    // $('#color').click(function(){
    //     alert('asd'):
    // });



    

    
    








}); //fin .ready