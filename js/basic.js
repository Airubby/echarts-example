var picSize, picBox, listSize;

function emSize() {
    //仪表盘
    picSize = $(".bigshow_pic").height();
    picWidth = $(".bigshow_pic").width();
    $(".bigshow_pic_left").css({
        "width": picSize + "px"
    });
    $(".bigshow_pic_right").css({
        "width": picWidth - picSize - 15 + "px"
    });
    //小图标
    picBox = $(".bigshow_pic_box").height();

    listSize = $(".bigshow_text_con").find("em").eq(0).height();
    $(".bigshow_text_con").find("em").css({
        "width": listSize + "px",
        "line-height": listSize + "px"
    });
}
emSize()

var polar = polarChar("polarChar");
var pie = pieChar("pieChar");
var area = areaChar("areaChar");
var map = mapChar("mapChar");
var gauge = gaugeChar("gaugeChar");
var pic_img1 = drawWater("pic_img1", {
    value: 0.2,
    color: ["#dade0f", "#f8fb5f"]
});
var pic_img2 = drawWater("pic_img2", {
    value: 0.2,
    color: ["#02dde0", "#6ff9f9"]
});

var piemore = piemoreChar("piemoreChar");
var hChar=hbarChar("hbarChar");
var charWD=barCharWD("barCharWD");
var charSD=barCharSD("barCharSD");
console.log(piemore)
$(window).resize(function () {
    emSize()
    polar.resize();
    pie.resize();
    area.resize();
    map.resize();
    gauge.resize();
    pic_img1.resize();
    pic_img2.resize();
    piemore.resize();
    hChar.resize();
    charWD.resize();
    charSD.resize();
});


var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'slide',
    spaceBetween: 0,
    //loop:true,
    loopAdditionalSlides: 0,
    centeredSlides: true,
    //autoplay: 8000,
    autoplayDisableOnInteraction: false
});