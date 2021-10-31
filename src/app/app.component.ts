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
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData(){
    const url ='https://digimon-api.vercel.app/api/digimon'
    this.http.get(url).subscribe((res)=>{
      this.data = res
    })
  }

}