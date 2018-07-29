import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-total-count-display',
    template: `
        <div class="alert alert-info">    
           Total count : <span class="badge badge-warning">{{value}}</span>
        </div>
    `,
    styles: []
})
export class TotalCountDisplay {
    @Input() value: number = 0; // input
}  