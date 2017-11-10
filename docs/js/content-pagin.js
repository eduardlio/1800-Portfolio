$(document).ready(function () {
    var moving = true;
    var currentPage = 0;
    var pages = ['nav_about', 'overview_part', 'part_a', 'part_b', 'part_c', 'portfolio_part'];
    var content = ['about_content', 'overview_content', 'a_content', 'b_content', 'c_content', 'portfolio_content'];
    var colors = ['#DDC3D0', '#e4fdff', '#B0D2E5', '#FECCD5', '#899DAA', '#DEDEF4'];
    $(document).on("click", ".item-background-container", function () {
        console.log(this.parentNode.parentNode.id);
        showPage(pages.indexOf(this.parentNode.parentNode.id));
    });
    $(document).on("click", "#nav_about", function () {
        showPage(0);
    })
    function hideHome() {
        $(".home-wrap").hide();
    }
    function showPage(num) {
        hideHome();
        for (var i = 0; i < content.length; i++) {
            if (i != num) {
                $("#" + content[i]).hide()
            }
        }
        // changePage(content, num);
        $("#" + content[num]).fadeIn(300);
        $('.whole-wrap').css('background-color', colors[num]);
        // num!=2
            $('.main').css('color', 'rgba(40, 40, 40, 1)');
            // : $('.main').css('color', 'rgba(250, 250, 250, 1)');
        $('.content').fadeIn(400);
        currentPage = num;
    }
    $(document).on("click", ".prevpage", function () {
        console.log("prevclick");
        if (currentPage - 1 < 0) {
            showPage(content.length - 1);
        } else {
            showPage(currentPage - 1);
        }
        showPage(currentPage);
    });
    $(document).on("click", ".nextpage", function () {
        console.log("nextclick");
        if (currentPage + 1 > content.length - 1) {
            showPage(0);
        } else {
            showPage(currentPage + 1);
        }
    });
    function changePage(arr, next) {
        moving = true;
        var cElem = arr[currentPage];
        var nElem = arr[next];
        $('#' + cElem).fadeOut(200);
        $('#' + nElem).fadeIn(700);
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        moving = false;
    }
    const tilt = $('.js-tilt').tilt({
        reset: true,
        maxTilt: 10,
        perspective: 200,
        speed: 200
    });
})
