$(document).ready(function () {
    var count = 0;
    var parts = ['overview_part', 'part_a', 'part_b', 'part_c', 'portfolio_part'];

    function hideAllBut(num) {
        console.log("hiding all but: " + num);
        $('#' + parts[count]).fadeOut(150);
        count = num;
        $('#' + parts[count]).fadeIn(200).css('display', 'inline-flex');
        if (num < count) {
            // animate curren to go right
            // animate next come in from left to right
            // set curent = num
        }
        if (num > count) {
            // animate current go screenLeft
            // animate next come in form right to left
            // set current = num
        }
    }
    $(".move").on("click", "#move-next", function () {
        console.log("click");
        if( (count+1) > parts.length-1 ){
            hideAllBut(0);
        }else{
            hideAllBut(count + 1);
        }
    });
    $(".move").on("click", "#move-prev", function () {
        console.log("click");
        if( (count-1) < 0) {
            hideAllBut(parts.length-1);
        }else{
            hideAllBut(count - 1);
        }
    });
});
