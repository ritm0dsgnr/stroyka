$("body").on("click", ".info__gallery__media__img", function () {
  $("#main__link").attr("href", $(this).attr("src"));
   $("#main").attr("src", $(this).attr("src"));
});


$(".m_link").hover(function(event) {
    $(".m__block").toggleClass('active');
});

$(".menu__link").hover(function(event) {
    $(".m__block").toggleClass('active');
});


$(".arrow.category").click(function(event) {
    $(this).toggleClass('active');
    $(".filter__point.category").toggleClass('active');
});
$(".arrow.lot").click(function(event) {
    $(this).toggleClass('active');
    $(".filter__point.lot").toggleClass('active');
});
$(".arrow.price").click(function(event) {
    $(this).toggleClass('active');
    $(".filter__point.price").toggleClass('active');
});


$(".spoiler__title").click(function(event) {
  if($('.spoiler').hasClass('one')){
    $('.spoiler__title').not($(this)).removeClass('active');
    $('.spoiler__text').not($(this).next()).slideUp(300);
  }
    $(this).toggleClass('active').next().slideToggle(300);
});

$(".radio.room").click(function(event) {
    $(".form__def").addClass('none');
    $(".form__def").removeClass('block');
    $(".form__house").addClass('none');
    $(".form__house").removeClass('block');
    $(".form__land_plot").addClass('none');
    $(".form__land_plot").removeClass('block');
    $(".form__business").addClass('none');
    $(".form__business").removeClass('block');
    $(".form__room").addClass('block');
});


$(".radio.house").click(function(event) {
    $(".form__def").addClass('none');
    $(".form__def").removeClass('block');
    $(".form__room").addClass('none');
    $(".form__room").removeClass('block');
    $(".form__land_plot").addClass('none');
    $(".form__land_plot").removeClass('block');
    $(".form__business").addClass('none');
    $(".form__business").removeClass('block');
    $(".form__house").addClass('block');
});

$(".radio.land_plot").click(function(event) {
    $(".form__def").addClass('none');
    $(".form__def").removeClass('block');
    $(".form__room").addClass('none');
    $(".form__room").removeClass('block');
    $(".form__house").addClass('none');
    $(".form__house").removeClass('block');
    $(".form__business").addClass('none');
    $(".form__business").removeClass('block');
    $(".form__land_plot").addClass('block');
});

$(".radio.business").click(function(event) {
    $(".form__def").addClass('none');
    $(".form__def").removeClass('block');
    $(".form__room").addClass('none');
    $(".form__room").removeClass('block');
    $(".form__house").addClass('none');
    $(".form__house").removeClass('block');
    $(".form__land_plot").addClass('none');
    $(".form__land_plot").removeClass('block');
    $(".form__business").addClass('block');
});