import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  apiUrl = "https://sheets.googleapis.com/v4/spreadsheets/"
          +environment.sheetId
          +"/values/"+environment.cellRange
          +"?key="+environment.apiKey;

  public data:any = []

  getData(){
    this.http.get(this.apiUrl).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

}

