import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {

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