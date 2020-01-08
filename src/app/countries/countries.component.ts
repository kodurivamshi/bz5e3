import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  con={};
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d=>{
      this.con=d;
      console.log();
    })
  }

}
