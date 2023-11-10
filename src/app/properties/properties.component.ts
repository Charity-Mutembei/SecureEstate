import { Component, OnInit } from '@angular/core';
import { ZillowService } from '../zillow.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit{
  myZillow: any;
  constructor(private zillowService: ZillowService){ }

  ngOnInit(): void {
    this.zillowService.fetchData().subscribe((data) => {
      this.myZillow = data;
      console.log(data)
    }); 
  }
}
