import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-pages.component.html',
  styles: ``
})
export class CounterPagesComponent {

  public counter = signal(10);
  public squareCounter = computed( ()=> this.counter()* this.counter() );   // es solo lectura.


  increasedBy(value: number){
    this.counter.update( current => current +  value);
  }

  decreasedBy(value: number){
    if(this.counter() > 0){
      this.counter.update( current => current - value);
    }
  }

}
