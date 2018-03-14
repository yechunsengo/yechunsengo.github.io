function num_fun(num){
    var a=1;
    var num_each = $("#zDecade").find(".num").each(function(){
    });
    $(window).scroll(function(){
        var scroll_Top = $(window).scrollTop();
        var offset_Top = $("#zDecade").offset().top-800;
        var num1 =0;
        var num2 =0;
        var num3 =0;
        var num4 =0;
        var num5 =0;
        var box;

        if (scroll_Top >offset_Top && a==1){
            a=0
            var time1 = setInterval (function() {
                 num1++
                box=$("#zDecade").find(".num").eq(0);
                box.find("span").text(num1);
                if (box.attr("num")<=num1){
                    clearInterval(time1);
                }
            }, 30);

            var time2= setInterval(function() {
                 num2++
                box=$("#zDecade").find(".num").eq(1);
                box.find("span").text(num2);
                if (box.attr("num")<=num2){
                    clearInterval(time2);
                }
            }, 30);

            var time3 = setInterval(function() {
                 num3=num3+10
                box=$("#zDecade").find(".num").eq(2);
                box.find("span").text(num3);
                if (box.attr("num")<=num3){
                    clearInterval(time3);
                }
            }, 30);

            var time4 = setInterval(function() {
                 num4++
                box=$("#zDecade").find(".num").eq(3);
                box.find("span").text(num4);
                if (box.attr("num")<=num4){
                    clearInterval(time4);
                }
            }, 30);

            var time5 = setInterval(function() {
                 num5++
                box=$("#zDecade").find(".num").eq(4);
                box.find("span").text(num5);
                if (box.attr("num")<=num5){
                    clearInterval(time5);
                }
            }, 30);
        }
    });
}
$(window).load(function(){
    num_fun();
})