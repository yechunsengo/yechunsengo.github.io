jQuery(document).ready(function($){
    $("http://www.7datong.cn/themes/Home/default/Public/js/.qqkefu .top").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 300);
    });

    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop;
        var y = $('.top').offset().top;
        if (scrollTop > 900 || y > 900) {
            $(".top").css({ "opacity": "0.9", "filter": "alpha(opacity=90)" });
        } else {
            $(".top").css({ "opacity": "0", "filter": "alpha(opacity=0)" });
        }
    });
    $(".qq_cza").hover(function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ "width": "120px", "left": "-85px" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "120px" }, 300);
        }
    }, function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ "width": "53px", "left": "0" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "53px" }, 300);
        }
    });
    $(".qq_czb").hover(function () {
        $(".qq_czb .erweima").show(50);
    }, function () {
        $(".qq_czb .erweima").hide(50);
    });
    $(".kf-tel").hover(function () {
        $(".kf-tel .erweima").show(50);
    }, function () {
        $(".kf-tel .erweima").hide(50);
    });

});