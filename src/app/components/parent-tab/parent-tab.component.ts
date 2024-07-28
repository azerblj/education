import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tab',
  templateUrl: './parent-tab.component.html',
  styleUrls: ['./parent-tab.component.css']
})
export class ParentTabComponent implements OnInit {
  T:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
