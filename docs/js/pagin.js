$(document).ready(function () {
    var startTime = new Date();
    
    var count = 0;
    var parts = ['overview_part', 'part_a', 'part_b', 'part_c', 'portfolio_part'];
    setInterval(upClick, 7000);
    function hideAllBut(num) {
        console.log("hiding all but: " + num);
        $('#' + parts[count]).fadeOut(300);
        count = num;
        $('#' + parts[count]).fadeIn(900).css('display', 'inline-flex');
        if (num < count) {        }
        if (num > count) {        }
    }
    $(".move").on("click", "#move-next", upClick);

    function upClick(){
        console.log("click");
        if( (count+1) > parts.length-1 ){
            hideAllBut(0);
        }else{
            hideAllBut(count + 1);
        }
    }

    $(".move").on("click", "#move-prev", function () {
        console.log("click");
        if( (count-1) < 0) {
            hideAllBut(parts.length-1);
        }else{
            hideAllBut(count - 1);
        }
    });
});
