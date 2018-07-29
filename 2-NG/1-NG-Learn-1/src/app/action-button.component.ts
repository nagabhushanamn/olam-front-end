import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-action-button',
    template: `
        <div class="action-button">    
            <div class="card">
                <div class="card-body">
                    <button [ngClass]="{btn:true,'btn-success':value>0,'btn-danger':value<0}" 
                            (click)="handleBtnClick($event)">
                        {{value}}
                    </button>
                    &nbsp;<span class="badge badge-danger">{{count}}</span>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
        .action-button{
            width:200px;
            float:left;
            margin:5px;
        }

        `
    ]
})
export class ActionButton {

    @Input() value: number = 0; // input
    count: number = 0;   // state
    @Output() hit: EventEmitter<any> = new EventEmitter(); // output i.e custom-event

    handleBtnClick(e) {
        this.count++;
        let event = { value: (this.value * this.count) };
        this.hit.emit(event)
    }
}  