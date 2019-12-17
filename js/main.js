$(function(){
    $('.depth1 > li').mouseover(function(){
        $('.depth2').addClass('show');
    });
    $('.depth1 > li').mouseout(function(){
        $('.depth2').removeClass('show');
    });
});


$(function(){
    var count = 1;
    setInterval(function(){
    if(count > 2) count = 0;
    $('.slider img').removeClass('show');
    $('.slider img')
        .eq(count)
        .addClass('show');
    $('.indicator > a').removeClass('show');
    $('.indicator > a')
        .eq(count)
        .addClass('show');
    count++;
    }, 5000);
});

$(function(){
    $('.popup').addClass('show');
    $('#btn_close').click(function(){
      $('.popup').removeClass('show');
    });
  });