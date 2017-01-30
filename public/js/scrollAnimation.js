// ===== Page Loading =====
var initailLoading = new TimelineMax({});

initailLoading.from("#home-page, #category-page", 1.2, {y: 100, opacity: 0, ease: Power2.easeInOut}, 0);





// ===== ScrollMagic & TweenMax =====
// init controller
var controller = new ScrollMagic.Controller();

// ===== Home Page =====
var learnMore_1_show = TweenMax.from("#learnMore_1_Show", 1, {y: 100, opacity: 0, ease: Power2.easeInOut});
var learnMore_2_show = TweenMax.from("#learnMore_2_Show", 1, {y: 100, opacity: 0, ease: Power2.easeInOut});

var scene = new ScrollMagic.Scene({
          triggerElement: ".full-width-tile",
          offset: -200,
          reverse:false
        })
        .setTween(learnMore_1_show)
        // .addIndicators({name: "1_Show"}) // add indicators (requires plugin)
        .addTo(controller);

var scene = new ScrollMagic.Scene({
          triggerElement: ".full-width-tile",
          offset: 200,
          reverse:false
        })
        .setTween(learnMore_2_show)
        // .addIndicators({name: "2_Show"}) // add indicators (requires plugin)
        .addTo(controller);

var moreProducts = TweenMax.from("#moreProducts", 0.8,  {y: 100, opacity: 0, ease: Power2.easeInOut});

var scene = new ScrollMagic.Scene({
          triggerElement: "#moreProducts",
          offset: -200,
          reverse:false
        })
        .setTween(moreProducts)
        // .addIndicators({name: "More-products_Show"}) // add indicators (requires plugin)
        .addTo(controller);


// ===== Category Page =====
var shopByIndustry_show = TweenMax.from('#shopByIndustry_show', 1, {y: 100, opacity: 0, ease: Power2.easeInOut});
var productPricing_show = TweenMax.from('#productPricing_show', 1, {y: 100, opacity: 0, ease: Power2.easeInOut});
// var category_moreProducts_show = TweenMax.from('#category_moreProducts_show', 1, {y: 100, opacity: 0, ease: Power2.easeInOut});

var scene = new ScrollMagic.Scene({
          triggerElement: "#shopByIndustry_show",
          offset: -300,
          reverse:false
        })
        .setTween(shopByIndustry_show)
        // .addIndicators({name: "#shopByIndusctry_show"}) // add indicators (requires plugin)
        .addTo(controller);


var scene = new ScrollMagic.Scene({
          triggerElement: "#productPricing_show",
          offset: -300,
          reverse:false
        })
        .setTween(productPricing_show)
        // .addIndicators({name: "#productPricing_show"}) // add indicators (requires plugin)
        .addTo(controller);
