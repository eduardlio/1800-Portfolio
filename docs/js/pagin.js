$(document).ready(function () {
    var startTime = new Date();
    
    var count = 0;
    var parts = ['overview_part', 'part_a', 'part_b', 'part_c', 'portfolio_part'];
    var colors = ['rgba(228, 253, 255, 1)', 'rgba(84, 113, 129, 1)', 'rgba(254, 203, 212, 1)', 'rgba(136, 157, 170, 1)', 'rgba(200, 204, 234, 1)'];
    // setInterval(upClick, 3000);
    function hideAllBut(num) {
        console.log("hiding all but: " + num);        
        // fadeIn(1000).css('display', 'inline-flex');
        var thisNum = '#' + parts[count];
        var nextNum = '#' + parts[num];
        // $(thisNum).fadeOut(400);
        $(nextNum).fadeIn(1000).css('display', 'inline-flex');
        $(thisNum).hide();
        // $(nextNum).removeClass('fadeInFromLeft fadeOutToRight fadeOutToLeft fadeInFromRight');
        // $(thisNum).removeClass('fadeInFromLeft fadeOutToRight fadeOutToLeft fadeInFromRight');
        // if (num < count) {
        //     console.log('count larger');
        //     $(thisNum).addClass('animated fadeOutToRight');
        //     $(nextNum).addClass('animated fadeInFromLeft').css('display', 'inline-flex');
        // }
        // else if (num > count) {    
        //     console.log('num larger');
        //     $(thisNum).addClass('animated fadeOutToLeft');
        //     $(nextNum).addClass('animated fadeInFromRight').css('display', 'inline-flex');
        // }
        count = num;
    }
    function removeAnimationClasses(counted, num){
        for (var i = 0; i < parts.length; i++) {
            if(parts[i]!=counted && parts[i]!=num){
                $('#'+parts[i]).removeClass('fadeInFromLeft fadeOutToRight fadeOutToLeft fadeInFromRight');
            }
        }
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
