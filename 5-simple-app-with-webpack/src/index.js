
console.log('-index.js-');

import './css/style.css';
import './css/theme.css';
import 'bootstrap/dist/css/bootstrap.css';

// common-js modules
require('./pack1/module-1');
require('./pack1/module-2');

// es modules
import { item } from './hotel/veg-menu';
console.log('yummy ' + item.name);


let v = 100;
if (true) {
    let v = 200;
}
console.log(v);

let arrowFunc = () => {
    console.log('im arrow..');
}
arrowFunc();