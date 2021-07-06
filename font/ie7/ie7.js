/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'how-to\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-a': '&#xec41;',
		'icon-b': '&#xf413;',
		'icon-c': '&#xea51;',
		'icon-d': '&#xf0b5;',
		'icon-e': '&#xe900;',
		'icon-f': '&#xe901;',
		'icon-g': '&#xe904;',
		'icon-h': '&#xe906;',
		'icon-i': '&#xe907;',
		'icon-j': '&#xe908;',
		'icon-k': '&#xec5f;',
		'icon-l': '&#xea48;',
		'icon-m': '&#xea4b;',
		'icon-n': '&#xea5f;',
		'icon-flecha-atras': '&#xf0a8;',
		'icon-flecha-siguiente': '&#xf0a9;',
		'icon-lavarse-las-manos': '&#xf0c1;',
		'icon-enjabonarse-las-manos': '&#xf09c;',
		'icon-secarse-las-manos': '&#xf45a;',
		'icon-touch_app': '&#xf56b;',
		'icon-copiar': '&#xf093;',
		'icon-guardar': '&#xf0b2;',
		'icon-menu-puntos': '&#xf3ac;',
		'icon-menu': '&#xf3ab;',
		'icon-home': '&#xf0b3;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
