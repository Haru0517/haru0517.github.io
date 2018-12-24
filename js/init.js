(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options = [
        {selector: '#index-banner', offset: 0, callback: function(el) {
            Materialize.toast("ようこそ！", 4000);
        } }
    ];
    Materialize.scrollFire(options);

  });
})(jQuery);
