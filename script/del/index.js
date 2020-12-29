//menu
loadjs('https://cdn.jsdelivr.net/npm/superfish@1.7.10/dist/js/superfish.min.js', function() {
    jQuery(document).ready(function() {
        jQuery('ul.sf-menu').superfish({
          cssArrows: false,
          delay: 0,
        });
      });
});

//menu fixed top
loadjs("https://xuedesign.github.io/ihp.2020/script/lib/fixed.js");

//banner
loadjs('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js', function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: 'true',
        autoPlay: '2000',
        pauseAutoPlayOnHover: 'false',
        accessibility: 'true',
        draggable: 'true',
        wrapAround: 'true'
        });
});


//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//wow
loadjs('https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js', function() {
    new WOW().init();
});  