import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter<Number>();

  constructor() { }


  ngOnInit(): void {
  }

  onClick(){
    console.log("Trigerred btnClick event");
    this.btnClick.emit(56);
  }

}