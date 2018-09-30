/**
 * @file  JavaScript entry point of the project
 */

// Or import only what you need to keep your vendor bundle small
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// Import polyfills
import {applyPolyfills} from './base/polyfills';

// Import methods from the base module
import {consoleErrorFix, ieViewportFix, fullPageInstance, formatTime, slickqweqwe, lngth, zPath, zPath1, zPath2, zPath3, zPath4, dataTable11} from './base/base';

// Import our Sass entrypoint to create the CSS app bundle
import 'normalize.css';
import 'fullpage.js/dist/fullpage.css';
import 'nouislider/distribute/nouislider.css';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'pickadate/lib/themes/default.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import '../assets/scss/index.scss';

$(async () => {
	// Wait with further execution until needed polyfills are loaded.
	await applyPolyfills();
	consoleErrorFix();
	ieViewportFix();
	fullPageInstance();
	formatTime();
	window.scrollSpy = require('scrollspy/scrollspy');
	console.log('YaY, ASAHI with ES6-Module !!!!');

$('.menu-trigger').on('click', (e) => {
    e.preventDefault();
    toggleMenu();
});

$(document).on('click', (e) => {
	if ($(e.target).hasClass('body--menu_is_open')) {
        e.preventDefault();
        toggleMenu();
	}
});

function toggleMenu() {
    $('.menu-trigger').toggleClass('menu-trigger--is_active');
    $('.menu').toggleClass('menu--is_hidden').toggleClass('menu--is_visible');
    $('.page').toggleClass('body--menu_is_open');
}

$('.menu__animation').each(function (i) {
	const orderClass = String('menu__animation--order_' + (i + 1));
    $(this).addClass(orderClass);
});

$(document).ready(() => {
	dataTable11();
	slickqweqwe();
	$('.info-board .slick-prev,.info-board .slick-next').html('<svg viewBox="0 0 22 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '<title>arrow</title>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
        '<g id="Kamerton_Home_Pop_Up" transform="translate(-1259.000000, -1919.000000)">' +
        '<g id="arrow" transform="translate(1258.000000, 1914.000000)">' +
        '<path d="M22,11.5 L2,11.5" id="Stroke-60" stroke="#121222" stroke-width="1.33333333" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '<path d="M2.0834,11.5463618 L7.5964,17.0000971" id="Stroke-62" stroke="#121222" stroke-width="1.33333333" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '<path d="M2,6 L7.513,11.4537353" id="Stroke-62" stroke="#121222" stroke-width="1.33333333" stroke-linecap="round" stroke-linejoin="round" transform="translate(4.756500, 8.726868) scale(1, -1) translate(-4.756500, -8.726868) "></path>' +
        '<rect id="Rectangle-8" x="0" y="0" width="24" height="24"></rect>' +
        '</g>' +
        '</g>' +
        '</g>' +
		'</svg>');
	lngth('.info-board-left .slick-dots');
	lngth('.info-board-right .slick-dots');
	// Lngth('.info-board-center .slick-dots');
	lngth('.home-footer__wrap .slick-dots');
	$('.info-board .button').on('click', function () {
		if (!$(this).parents('.info-board').hasClass('info-board-center--js')) {
            $(this).closest('.info-board').find('.board-desc').addClass('active');

            $(this).closest('.info-board__wrap').find('.advantages').slideDown();

            if ($(document).width() < 767) {
                $('body').css('overflow', 'hidden');
            }
		}
	});
    $('.advantages__close').on('click', function () {
        // $(this).closest('.board-desc').removeClass('active');
        $(this).closest('.advantages').slideUp().closest('.board-desc').removeClass('active');
        if ($(document).width() < 767) {
            $('body').css('overflow', 'visible');
        }
    });

	$(document).on('click', '.plan-img__item:not(.active)', function (e) {
		e.preventDefault();
        $('.plan-img__pic, .plan-img__item').removeClass('active');
		zPath();
		$(this).addClass('active');
		zPath1();
	});

    $('.btn-top').on('click', (event) => {
        event.preventDefault();
        $('body,html').stop().animate({scrollTop: 0}, 1500);
    });

	$('.anim-svg').on('scrollSpy:enter', function () {
		if ($(this).is('#k')) {
            zPath2();
		} else {
           zPath3();
		}
	});

    $('.anim-svg').on('scrollSpy:exit', function () {
        $(this).data('id', 1).children().attr('style', '');
    });

    $('.plan-img__list').one('scrollSpy:enter', () => {
        // Console.log(ind, $('.plan-img__pic').eq(ind));
        zPath4();
    });

    $('.image-container').each(function () {
        $(this).one('scrollSpy:enter', function () {
            $(this).addClass('is-visible');
        });
    });

    $('.anim-svg,.plan-img__list,.image-container').scrollSpy();

    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    // Const scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

});

});
