var count = 0;

$(".move-next").on("click", function(){
    var tran_percent = ++count * 100;
    $(".item-list").css("transform", "translate(-"+tran_percent+"%, 0%)")
})