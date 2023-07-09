jQuery(function () {
    $('p').click(function () {
        console.log('you clicked on p',this);
        $(this).hide();
    })
})
