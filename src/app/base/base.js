/**
 * @file  Base JavaScript needed independent of the project
 */

/**
 * Fix viewport issues with IE 10.
 * @see {@link http://getbootstrap.com/getting-started/#support-ie10-width}
 */
export function ieViewportFix() {
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		const msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
		document.querySelector('head').appendChild(msViewportStyle);
	}
}

/**
 * Avoid `console` errors in browsers that lack a console.
 * @see {@link https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js}
 */
export function consoleErrorFix() {
	let method;
	const noOp = function () {
	};
	const methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	let length = methods.length;
	const console = window.console || {};

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noOp;
		}
	}
}

import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

export function fullPageInstance() {
	fullpage('.fullpage-scroll-mobile', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		menu: '.menu',
		navigation: true,
		slideSelector: '.fullpage-scroll',
		sectionSelector: '.section',
		lazyLoading: true,
		continuousVertical: true,
		dragAndMove: true,
		dragAndMoveKey: 'a2FtZXJ0b24uaG91c2VfMDRNWTI5dWRHbHVkVzkxYzBodmNtbDZiMjUwWVd3PVVsYg=='
	});
}

export function formatTime(time) {
	let m = Math.floor(time / 60);
	if (m < 10) {
		m = '0' + m;
	}
	let s = Math.floor(time % 60);
	if (s < 10) {
		s = '0' + s;
	}
	return m + ':' + s;
}

window.slick = require('slick-carousel');
export function slickqweqwe() {
	$('.info-board-left .init-wrap,.info-board-right .init-wrap, .home-footer__wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// Arrows: true,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	});
}

export function lngth(selector) {
	if ($(selector.length === 1)) {
		$(selector).each(function () {
			const lnth = '/' + $(this).children().length;
			$(this).append('<p class="dots-lenth">' + lnth + '</p>');
		});
	}
}

window.zPath = require('zpath/zpath');
export function zPath() {
	$('#' + $(this).data('href')).siblings().find('.icon').stop().zPath({
		action: 'destroy'
	});
}
export function zPath1() {
	$('#' + $(this).data('href')).addClass('active').find('.icon').stop().zPath({
		action: 'start',
		draw: 'all',
		shuffle: false,
		delay: 0,
		drawTime: 3000
	});
}
export function zPath2() {
	$(this).data('id', 1).zPath({
		draw: 'all',
		shuffle: false,
		delay: 0,
		drawTime: 4500
	});
}
export function zPath3() {
	$(this).data('id', 1).zPath({
		draw: 'all',
		shuffle: false,
		delay: 0,
		drawTime: 3000
	});
}
export function zPath4() {
	const ind = $('.plan-img__item.active').index();
	$('.plan-img__pic').eq(ind).addClass('active').find('.icon').zPath({
		draw: 'all',
		shuffle: false,
		delay: 0,
		drawTime: 3000
	});
}
window.dataTable = require('datatables.net');
export function dataTable11() {
	$('#example').dataTable({
		ajax: 'data/simple.json'
	});
}

/**
 * Needed to perform a dummy import until this webpack 4 error with dynamic imports is fixed:
 * https://github.com/webpack/webpack/issues/6587
 */
/**
 * Thanks to tree shaking this won’t land in the production build 🌳
 */
export function testTreeshaking() {
	window.theTreeIsShaked = 'shakedy-shake';
}
