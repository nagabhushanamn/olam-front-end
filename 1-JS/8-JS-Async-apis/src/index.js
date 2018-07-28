console.log('-index.js-');


import { fromEvent } from 'rxjs';
import { of, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

// ui module
//--------------------------------------------------------------
let searchField = document.getElementById('search');
let searchEventStream = fromEvent(searchField, 'keyup')
//--------------------------------------------------------------


// search-service-module
//--------------------------------------------------------------
searchEventStream
    .pipe(debounce(() => timer(3000)))
    .subscribe(e => {
        console.log('seraching...' + e.target.value);
    })
//--------------------------------------------------------------



