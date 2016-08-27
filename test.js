import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

var origColor = '#test {color: rgb(154, 57, 31);}';
var newColor = '#test {color: hsv(12.7, 79.9, 60.4);}';

test('convert rgb to hsv', t => {
    return run(t, origColor, newColor, { });
});

