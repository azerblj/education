import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
 @Input() courobj:any;
 path:any;

  constructor(private route:Router) { }

  ngOnInit(): void {


  }
  isAll()
  {
    this.path=this.route.url;
    console.log(this.path);

    return this.path=='/coursInfo/:id';

  }

}
