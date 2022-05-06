import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-digimon-cards',
  templateUrl: './digimon-cards.component.html',
  styleUrls: ['./digimon-cards.component.scss']
})
export class DigimonCardsComponent implements OnInit {

  public popupData:any = [];
  public showPopup:boolean = false;

  @Input() data:any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadDigimonCard(digimonName: any) {
    const url ='https://digimon-api.herokuapp.com/api/digimon/name/' + digimonName;
    this.http.get(url).subscribe((res)=>{
      this.popupData = res;
      this.showPopup = ! this.showPopup;
    })
  }

  setShowPopupValue(value: boolean) {
    this.showPopup = value;
  }

}
