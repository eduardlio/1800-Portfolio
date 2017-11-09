var currentPage = 0;
var pages = ['nav_about', 'overview_part', 'part_a', 'part_b', 'part_c', 'portfolio_part'];
var content = ['about_content', 'overview_content', 'a_content', 'b_content', 'c_content', 'portfolio_content'];
$(document).on("click", ".part", function(){
    console.log(this.id);
    hideHome();
    showPage(pages.indexOf(this.id));
})
function hideHome(){
    $(".home-wrap").hide();
}
function showPage(num){
    for (var i = 0; i < content.length; i++) {
        if(i!=num){
            $("#"+content[i]).hide();        
        }
    }
    $("#"+content[num]).show();
    $('.content').show();
    currentPage = num;
}
$(document).on("click",".prevpage", function(){
    console.log("prevclick");
    if(currentPage - 1 < 0){
        showPage(content.length-1);
    }else{
        showPage(currentPage -1);
    }
    showPage(currentPage);
});
$(document).on("click", ".nextpage", function(){
    console.log("nextclick");
    if(currentPage + 1 > content.length-1){
        showPage(0);
    }else{
        showPage(currentPage+1);
    }
});




