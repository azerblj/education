import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.css']
})
export class SearchcourseComponent implements OnInit {
  SearchForm!:FormGroup;
  sea:any={};
  search()
  {
    console.log("this is searchForm",this.sea);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
