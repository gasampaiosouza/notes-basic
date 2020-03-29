'use strict';

let counter = 1;

let editable_title = $('.editable_title');
let container_content = $('#note_container').html();

editable_title[0].focus();

// create new note
function newNote() {
    $('#advice').css('display', 'none');
    $('#note_container').append(container_content);

    setTimeout(() => {
        let editable_title = $('.editable_title');

        $('.note_box')[$('.note_box').length - 1].id = `${counter}C`;
        $('.close_icon')[$('.close_icon').length - 1].id = counter;

        counter++;

        editable_title[editable_title.length - 1].innerHTML = 'New note!';

        editable_title[editable_title.length - 1].focus();
    }, 0);
}

// grow textarea
function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = `${element.scrollHeight}px`;
}


// close selected box
function close_box(el) {
    $(`#${el.id}C`).css('animation', 'disappear .4s ease-in-out');

    if ($('.close_icon').length == 1)
        $('#advice').css('display', 'block');

    setTimeout(() => {
        $(`#${el.id}C`).remove();
    }, 300);
}

// open confirmation box
$('#clear').click(() => {
    if ($('.close_icon').length == 0)
        toggleAlert();

    else {

        window.addEventListener('keyup', (e) => {
            if (e.key == 'Escape')
                backToHome();
        });


        $('#clear_confirmation').removeClass('none');

        $('.confirmation_box').css('animation', 'opacity .4s ease-in-out');

        $('.confirmation_content').css('animation', 'slide-left .8s ease-in-out');

        $('.overlay').css('animation', 'opacity 1s ease-in-out');

    }
});

$('#clear_yes').click(() => {

    $('#clear_confirmation').addClass('none');

    $('.note_box').css('animation', 'disappear .4s ease-in-out');

    setTimeout(() => {
        $('.note_box').remove();
    }, 300);

    $('#advice').css('display', 'block');

})

$('#clear_no').click(backToHome);
$('.overlay').click(backToHome);

function backToHome() {
    $('#clear_confirmation').addClass('none');
}

let message_timeout;

// toggle alert message
function toggleAlert() {
    let message = $('#alert')

    clearTimeout(message_timeout);

    message.addClass('show');

    message_timeout = setTimeout(() => {
        message.removeClass('show');
    }, 3000);
}