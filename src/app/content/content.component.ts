import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  u={};
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getContent().subscribe(d=>{
      console.log(d);
      this.u=d;
    })
  }

}
