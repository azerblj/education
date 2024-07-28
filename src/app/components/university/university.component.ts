import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  @Input() universityobj:any;

  constructor() { }

  ngOnInit(): void {
  }

}
