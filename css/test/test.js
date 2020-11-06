$(function () {
    console.log("test")
    $('#left_menu_pusher_button').on('click', function () {
        $('#left_menu')
            .sidebar({
                context: '.wrap'
            })
            .sidebar('toggle')
    });
});

