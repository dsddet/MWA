import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-comp1',
    template: `
    <button (click)="decrease()">-</button> {{counterValue}} <button (click)="increase()">+</button>
    `,
    styles:[]
})
export class CounterComponent{
    @Output() counterChange: EventEmitter<string>;
    @Input() counterValue: number;
    

    constructor() {
        this.counterValue = 0;
        this.counterChange = new EventEmitter();
    }

    increase():void {
        this.counterValue++;
       this.counterChange.emit(`${this.counterValue}`);
    }

    decrease():void {
        this.counterValue--;
       this.counterChange.emit(`${this.counterValue}`);
    }

 
    


}