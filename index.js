var rgb, rgbValue;

// helper - format element of color
function formatDec(t, x) {
    return parseFloat(t * x, 1).toFixed(1);
}

// credit: based on https://gist.github.com/mnpenner/6513318
function rgb2hsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var d, h, s, v = max;

    d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0;
    } else {
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
        }

        h /= 6;
    }

    return [ formatDec(h, 360), formatDec(s, 100), formatDec(v, 100) ];
}

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-rgbtohsv', function () {
    return function (css, result) {
        css.walkDecls(decl => {
            rgbValue = decl.value.replace(/[rgb()]/g, '');
            rgb = postcss.list.comma(rgbValue);
            result = rgb2hsv(rgb[0], rgb[1], rgb[2]);
            decl.value = 'hsv(' + result.join(', ') + ')';
        });
    };
});
