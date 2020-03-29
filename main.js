'use strict';

let counter = 1;

let editable_title = $('.editable_title');

let container_content = $('#note_container').html();

editable_title[0].focus();

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

function auto_grow(element) {
    element.style.height = '5px';
    element.style.height = `${element.scrollHeight}px`;
}



function close_box(el) {
    $(`#${el.id}C`).css('animation', 'disappear .4s ease-in-out');

    if ($('.close_icon').length == 1)
        $('#advice').css('display', 'block');

    setTimeout(() => {
        $(`#${el.id}C`).remove();
    }, 300);
}

$('#clear').click(() => {
    if ($('.close_icon').length == 0)
        alert(`there's nothing to clear`)
    else {

        $('#clear_confirmation').removeClass('none');

        $('.confirmation_box').css('animation', 'width .4s ease-in-out');
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

$('#clear_no').click(() => {

    $('#clear_confirmation').addClass('none');

})