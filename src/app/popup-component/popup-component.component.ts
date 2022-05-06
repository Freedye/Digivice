import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss']
})

export class PopupComponentComponent implements OnInit {

  @Input() popupData:any = [];
  @Input() showPopup:boolean = false;
  @Output() closePopupEvent = new EventEmitter<boolean>();

  constructor() {  }

  ngOnInit(): void {
  }

  closePopup() {
    this.showPopup = ! this.showPopup;
    this.closePopupEventFunction(this.showPopup);
  }

  closePopupEventFunction(value: boolean) {
    this.closePopupEvent.emit(value);
  }
}