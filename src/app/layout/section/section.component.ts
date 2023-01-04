import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sheetId ="[YOUR GOOGLE SHEET ID]";
  cellRange="Product!A2%3AE4"; //must match the correct range on your product table
  apiKey = "[YOUR GOOGLE API KEY]";

  apiUrl = "https://sheets.googleapis.com/v4/spreadsheets/"
          +this.sheetId
          +"/values/"+this.cellRange
          +"?key="+this.apiKey;

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

