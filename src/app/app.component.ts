import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digivice';

  public data:any = [];
  public dataBackup:any = [];
  public searchedData:any = [];
  public searchValue = '';

  constructor(private http: HttpClient) {
    this.getData();
  }
  
  getData(){
    const url ='https://digimon-api.vercel.app/api/digimon'
    this.http.get(url).subscribe((res)=>{
      this.data = res;
    })
  }

  searchDigimon(value: any) {
    if(this.dataBackup.length > 0) {
      this.data = this.dataBackup;
    } else {
      this.dataBackup = this.data;
    }
    let digimonList = this.data;
    let searchedDigimonList:any = [];
    
    for(let i = 0; i < digimonList.length; i++) {
      if(digimonList[i].name.includes(value)) {
        searchedDigimonList.push(digimonList[i]);
      }
    }
    
    if(searchedDigimonList) {
      this.data = searchedDigimonList;
    } else {
      this.data = '';
    }
  }
}