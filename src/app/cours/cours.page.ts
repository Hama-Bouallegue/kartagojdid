import { Component, OnInit } from '@angular/core';
import { CoursService } from './coursService/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {
  segment: "cours";
  cour : any ;
  constructor(public coursService : CoursService) { }

  ngOnInit() {
    this.cours();
  }
  cours(){
    this.coursService.getCours().subscribe(data=>{
      this.cour = data ; 
      console.log(this.cour)
    })
  }
}
