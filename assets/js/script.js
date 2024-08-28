$(document).mousemove(function (e) {
  $('.circle').css({
    left: e.pageX - 125,
    top: e.pageY - 125,
  });
});
