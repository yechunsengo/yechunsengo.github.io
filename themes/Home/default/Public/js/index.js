$(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100){
            $(".zHeader , .zHeader_clear").addClass("on_zHeader");
        }else{
            $(".zHeader , .zHeader_clear").removeClass("on_zHeader");
        }
    });
    $(".link_btn li").hover(function(){
        $(this).find(".link_weixin_ewm").stop(false,true).slideDown();
    },function(){
        $(this).find(".link_weixin_ewm").stop(false,true).slideUp();
    });
    $(".float_qq li.hover").hover(function(){
        $(this).find(".con").stop(false,true).animate({"width":60+$(this).find("a").width()})
        $(this).find(".m_con").stop(false,true).fadeIn();
    },function(){
        $(this).find(".con").stop(false,true).animate({"width":"60"})
        $(this).find(".m_con").stop(false,true).fadeOut();
    });
    function all_ewm(){
        $(".float_qq li.click").click(function(){
            $("html,body").css({"overflow-y":"hidden"});
            $(".all_ewmBox ").stop(false,true).fadeIn();
        });
        $(".all_ewmBox").click(function(){
            $("html,body").css({"overflow-y":"auto"});
            $(this).stop(false,true).fadeOut();
        });
        $(".all_ewmCon").click(function(){
            stopEvent()
        });
    }
    all_ewm();
    var colorList =
        [
        "0076db",
        "520d10",
        "fcbf00",
        "00bcc3",
        "007fcd",
        "f88589",
        "b1e8ab",
        "ed5d64",
        "d26b6b",
        "6ec89b",
        "2c1f88",
        "2097d4",
        "e50112",
        "63bdab",
        "bd963a",
        "e67817",
        "e42512",
        "0070b8",
        "4c78b8",
        "ba9667",
        "57bbe4",
        "c7000a",
        "bd9a74",
        "910b26",
        "005d9a",
        "e5c78b",
        "f6bebf",
        "f06431",
        "98012e",
        "d74b56",
        "f97191",
        "007fcd"
        ];
    $(".caseList,.caseListA").delegate("li","mouseover",function(){
        var colcrBg ="#"+colorList[Math.floor(Math.random() * colorList.length)]
        $(this).find(".txt").css({"background-color":colcrBg});
    });
    $(".caseList,.caseListA").delegate("li","mouseleave",function(){
        $(this).find(".txt").css({"background-color":"#fff"});
    });
});
jQuery.fn.scrollTo = function(speed) {
    var targetOffset = $(this).offset().top;
    $('html,body').stop().animate({scrollTop: targetOffset}, speed);
    return this;
};
