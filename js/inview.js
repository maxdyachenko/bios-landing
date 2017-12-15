$(document).ready(function(){

    if ($('body').width() > 1100 && ie_ver() == 0){
        $(window).scroll(function(){
         if (isElementInViewport(document.getElementsByClassName('block')[0])){
            document.getElementsByClassName('block')[0].classList.add('animated','fadeInLeft');
        }
        if (isElementInViewport(document.getElementsByClassName('block')[1])){
            document.getElementsByClassName('block')[1].classList.add('animated','fadeInRight');
        }
        if (isElementInViewport(document.getElementsByClassName('block')[2])){
            document.getElementsByClassName('block')[2].classList.add('animated','fadeInLeft');
        }


        if (isElementInViewport(document.getElementsByClassName('items-wrapper')[0])){
            document.getElementsByClassName('items-wrapper')[0].classList.add('animated','fadeInUp');
        }


    });
    }
    if (ie_ver() > 0 || $('body').width() < 1100){
        $('.block').css('opacity','1');
        $('.items-wrapper').css('opacity','1');
        $('.section-photo').removeClass("parallax-window");
        //$('body').css('overflow-x','hidden');
    }
    if (ie_ver() > 0 && $('body').width() < 1360){
        $('.header-man').css('display','none');
        $('.header-text').css('max-width','100%');
        $('.header-text').css('display','flex');
        $('.header-text').css('justify-content','center');
        $('.header-text').css('flex-wrap','wrap');
        $('.header-text').css('align-items','center');
        $('.btn').css('margin','40px 0 0 0');
        $('.main-text').css('text-align','center');
        $('.btn-form').css('margin','40px 0 20% 0');

        
        $('.img-bg').css('display','none');
        $('.items-wrapper').css('width','100%');

        $('body').css('width','100%');
        $('body').css('overflow-x','hidden');
        $('.content').css('display','flex');
         $('.content').css('flex-wrap','wrap');
         $('.content').css('justify-content','space-around');
        $('li').css('width','100%');
        $('.pros-icons').css('display','flex');
        $('.items-wrapper').css('position','static');
    }

});

function ie_ver(){  
    var iev=0;
    var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
    var trident = !!navigator.userAgent.match(/Trident\/7.0/);
    var rv=navigator.userAgent.indexOf("rv:11.0");

    if (ieold) iev=new Number(RegExp.$1);
    if (navigator.appVersion.indexOf("MSIE 10") != -1) iev=10;
    if (trident&&rv!=-1) iev=11;

    return iev;         
}

function isElementInViewport (el) {

    if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);

}

function isFully(el){
   if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
}

var rect = el.getBoundingClientRect();

return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

