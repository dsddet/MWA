import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-comp1 [counterValue]="componentCounterValue" (counterChange)="log($event)"></app-comp1>
  <br><br>
  ComponentCounterValue is {{componentCounterValue}}
  `,

  styles: ['h1{color:red}'],

})
export class AppComponent {
  componentCounterValue: number;

  constructor() {
    this.componentCounterValue = 0;
  }

  log(e: string) {
    this.componentCounterValue = parseInt(`${e}`);
    console.log(this.componentCounterValue);
  }
}
