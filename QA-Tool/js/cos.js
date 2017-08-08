$(function() {



    /* VARIABLES */
    var cosArray = "";
    var cmsArray = "";

    var arrayLength = "";
    var counter = "0";
    var nextPage = parseFloat(counter) + 1;

    var note = "";
    var noteEncoded= "";

    var cosWindowSize = 'height=1360,width=1280,top=200,left=1280,toolbar=no,scrollbars=yes'; 
    var cmsWindowSize = 'height=1360,width=1280,top=200,left=0,toolbar=no,scrollbars=yes';      
    var cmsName = "cmsWindow";
    var cosName = "cosWindow";
    var cmsWindow = "";
    var cosWindow = "";
    var frameHeight

    var saved = "";

    


    /* FUNCTIONS */

    function frameHeight(){
        /* Set Frames Height */
        frameHeight= $(window).height() - 55;
        $('.frames > div').css('height',frameHeight);
    }

    function openWindows(){
        $("#CMSFrame").attr("src", cmsArray[counter]);
        $("#COSFrame").attr("src", cosArray[counter]);
    }

    function closeWindows(){
        $('.frames').remove();
        $('#QA-results').slideToggle();
        $(this).toggleClass('open');
    }

    function rickRoll(){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'RickRoll', 'height=450,width=638,top=200,left=1280,toolbar=no,scrollbars=no');
    }

    function complete(){
        window.open('http://www.colbyschneider.com/QA/Complete.gif', 'Complete', 'height=381,width=400,top=200,left=1280,toolbar=no,scrollbars=no');
    }

    function thumbsUp(){
        if(nextPage < arrayLength){
            note = $('.note').val();
            noteEncoded = $('<div/>').text(note).html();
            
            $('#goodUrls table').append('<tr><td class="cosURL"><a href="' + cosArray[counter] + '" target="_blank">' + cosArray[counter] + '</a></td><td class="cmsURL"><a href="' + cmsArray[counter] + '" target="_blank">' + cmsArray[counter] + '</a></td><td><pre>' + noteEncoded + '</pre> <a class="editBtn noExport" href=""><i class="fa fa-edit"></i></a></td><td class="noExport"><a class="editUp" href="#"><i class="fa fa-chevron-up"></i></a></td></tr>');

            counter = nextPage;
            nextPage = parseFloat(counter) + 1;

            $('.urlNum').text(nextPage);
            $('.thumbsUp').attr('href', cosArray[nextPage]);
            $('.thumbsDn').attr('href', cosArray[nextPage]);
            $('.note').val('');
            $('.frames > div').css('width','49%');

            openWindows();
        }
        else if(nextPage == arrayLength){
            note = $('.note').val();
            noteEncoded = $('<div/>').text(note).html();
            closeWindows();
            
            $('#goodUrls table').append('<tr><td class="cosURL"><a href="' + cosArray[counter] + '" target="_blank">' + cosArray[counter] + '</a></td><td class="cmsURL"><a href="' + cmsArray[counter] + '" target="_blank">' + cmsArray[counter] + '</a></td><td><pre>' + noteEncoded + '</pre> <a class="editBtn noExport" href=""><i class="fa fa-edit"></i></a></td><td class="noExport" class="noExport"><a class="editUp" href="#"><i class="fa fa-chevron-up"></i></a></td></tr>');

            counter = nextPage;
            nextPage = parseFloat(counter) + 1;
            $('input.checkbox').prop('checked', false);

            $('.review').hide();
        }
        else{
            return false;
        }
    }

    function thumbsDn(){
        if(nextPage < arrayLength){
            note = $('.note').val();
            noteEncoded = $('<div/>').text(note).html();

            $('#badUrls table').append('<tr><td class="cosURL"><a href="' + cosArray[counter] + '" target="_blank">' + cosArray[counter] + '</a></td><td class="cmsURL"><a href="' + cmsArray[counter] + '" target="_blank">' + cmsArray[counter] + '</a></td><td><pre>' + noteEncoded + '</pre> <a class="editBtn noExport" href=""><i class="fa fa-edit"></i></a></td><td class="noExport"><a class="editDn" href="#"><i class="fa fa-chevron-down"></i></a></td></tr>');

            counter = nextPage;
            nextPage = parseFloat(counter) + 1;

            $('.urlNum').text(nextPage);
            $('.thumbsUp').attr('href', cosArray[nextPage]);
            $('.thumbsDn').attr('href', cosArray[nextPage]);
            $('.note').val('');
            $('.frames > div').css('width','49%');

            openWindows();
        }
        else if(nextPage == arrayLength){
            note = $('.note').val();
            noteEncoded = $('<div/>').text(note).html();
            closeWindows();

            $('#badUrls table').append('<tr><td class="cosURL"><a href="' + cosArray[counter] + '" target="_blank">' + cosArray[counter] + '</a></td><td class="cmsURL"><a href="' + cmsArray[counter] + '" target="_blank">' + cmsArray[counter] + '</a></td><td><pre>' + noteEncoded + '</pre> <a class="editBtn noExport" href=""><i class="fa fa-edit"></i></a></td><td class="noExport"><a class="editDn" href="#"><i class="fa fa-chevron-down"></i></a></td></tr>');

            counter = nextPage;
            nextPage = parseFloat(counter) + 1;
            $('input.checkbox').prop('checked', false);

            $('.review').hide();
        }
        else{
            return false;
        }
    }


    function emailTech(){
        var saved = $('#badUrls').html();
        $('#badUrls').find('.noExport').remove();
        $('#badUrls').find('td').removeAttr('class');
        $('#badUrls table').attr('border', '1px');
        $('#badUrls table').attr('cellspacing', '0px');
        $('#badUrls table').attr('cellpadding', '2px');
        var emailTable = $('#badUrls').html();
        $('#badUrls').empty().append(saved);

        var email = 'Migration Feedback: ' + $('.ssb').val() + ' - ' + $('.custy').val() + '<br /><br />';
            email += 'Hi ' + $('.tech').val() + ',<br /><br />';
            email += 'I need some edits made to the following migration.<br /><br />';
            email += $('.ssb').val() + '<br />';
            email += $('.ssburl').val() + '<br /><br />';
            email += emailTable + '<br /><br />';
            email += 'Let me know if you have any questions.<br /><br />';
            email += 'Thank you,<br />';
            email += $('.name').val();

        $('.emailContent').prepend(email);

        $('.emailInfo').hide();
        $('.email').fadeIn();

       /* var emailWindow = window.open('', 'Email', 'height=600,width=980,top=200,left=1280,toolbar=no,scrollbars=yes');
        $(emailWindow.document.body).html(email);*/
    }


    function tvPromo(){
        setTimeout(function(){
            $('.promo_team').css('bottom', '0px');
        }, 2000);

        setTimeout(function(){
            $('.promo_title').fadeIn(400);
        }, 3000);
        setTimeout(function(){
            $('.promo_title').fadeOut(100);
            $('.promo_channel').fadeIn(400);
        }, 7000);

        setTimeout(function(){
            $('.promo_title').fadeOut(100);
            $('.promo_channel').fadeOut(100);
            $('.promo_team').css('bottom', '-220px');
        }, 11000);
    }

    tvPromo();





    /* BUTTON METHODS */
    $('form').submit(function() {
        $('.start').hide();
        $('#QA-tool').hide();
        $('.review').show();
        $('.frames').show();

        frameHeight();

        cosArray = $('.cosInput').val().split(/\n/);
        cmsArray = $('.cmsInput').val().split(/\n/);

        arrayLength = cosArray.length;

        /* Set page count and button URLS */
        $('.urlNum').text(nextPage);
        $('.urlTotal').text(arrayLength);
        $('.thumbsUp').attr('href', cosArray[nextPage]);
        $('.thumbsDn').attr('href', cosArray[nextPage]);

        /* Launch Review Windows */
        openWindows();
        return false;
    });

    $('.thumbsUp').click(function() {
        thumbsUp();
        return false;
    });

    $('.thumbsDn').click(function() {
        thumbsDn();
        return false;
    });

    $(document).keydown(function(e){
        if ($('input.checkbox').is(':checked')){
            switch(e.which)
            {                                    
                // user presses Up arrow
                case 38:    thumbsUp();
                            break;

                // user presses Down arrow
                case 40:    thumbsDn();
                            break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        }
    });

    $('.emailBtn').click(function() {
        $('#overlay').fadeIn();
        $('.emailInfo').fadeIn();
        return false;
    });

    $('.emailSubmit').click(function() {
        emailTech();
        return false;
    });

    $('.close').click(function() {
        $('#overlay').fadeOut();
        $('.emailInfo').fadeOut();
        $('.email').fadeOut();
        $('.emailContent').empty();
        return false;
    });

    $('.expand').click(function() {
        $('#QA-results').slideToggle();
        $(this).toggleClass('open');
        return false;
    });

    $('.desktop').click(function() {
        $('.frames > div').css('width','49%');
        return false;
    });

    $('.tablet').click(function() {
        $('.frames > div').css('width','767px');
        return false;
    });

    $('.phone').click(function() {
        $('.frames > div').css('width','479px');
        return false;
    });

    $('.leftFrame a.reload').click(function() {
        $("#CMSFrame").attr("src", cmsArray[counter]);
        return false;
    });

    $('.rightFrame a.reload').click(function() {
        $("#COSFrame").attr("src", cosArray[counter]);
        return false;
    });

    $('.rick').click(function() {
        rickRoll();
        return false;
    });

    $(window).on("resize", frameHeight);


    $(document).on('click','.editUp',function() {
        $(this).addClass('editDn');
        $(this).removeClass('editUp');
        $(this).children('i').addClass('fa-chevron-down');
        $(this).children('i').removeClass('fa-chevron-up');
        var row = $(this).closest('tr').remove();
        row.appendTo('#badUrls table');
        return false;
    });

    $(document).on('click','.editDn',function() {
        $(this).addClass('editUp');
        $(this).removeClass('editDn');
        $(this).children('i').addClass('fa-chevron-up');
        $(this).children('i').removeClass('fa-chevron-down');
        var row = $(this).closest('tr').remove();
        row.appendTo('#goodUrls table');
        return false;
    });

    $(document).on('click','.editBtn',function() {
        $(this).siblings('pre').wrapInner('<textarea></textarea>');
        $(this).siblings('pre').contents().unwrap()
        $(this).replaceWith('<input type="button" class="submitEdit" value="submit">');
        return false;
    });

     $(document).on('click','.submitEdit',function() {
        var newNote = $(this).siblings('textarea').val();
        newNote = newNote.replace(/<br>/g,"\n");
        noteEncoded = $('<div/>').text(newNote).html();
        $(this).closest('td').empty().append('<pre>' + noteEncoded + '</pre> <a class="editBtn noExport" href=""><i class="fa fa-edit"></i></a>');
        return false;
    });

});

window.onbeforeunload = function() {
    return "Hey Dummy...";
}