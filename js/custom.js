$(document).ready(function() {
    $(".read-more").on("click", function() {
        if ($(this).text() == "Read More") {
            $(this).text('Read Less');
            $('.read-more-text').css('max-height', '1000px');
        } else {
            $(this).text('Read More');
            $('.read-more-text').css('max-height', '0');
        }
    });

    $('.twitter-number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(commaSeparateNumber(Math.ceil(now)));
            }
        });
    });
    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return val;
    }


});