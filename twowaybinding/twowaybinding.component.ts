import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {

  @Input() counter!: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  handlebutton(operation:string){
    operation === 'INC' ? this.counter ++ : this.counter--;
    this.counterChange.emit(this.counter);
  }
}
