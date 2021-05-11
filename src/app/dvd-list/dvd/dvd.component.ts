import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  @Input()
  dvd!: Dvd;
  late:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
     
    let today=new Date();
    let newdate=new Date(this.dvd.date);
    if (newdate>today) {
      this.late=true;
    }
    console.log(this.late);

  }

  navigateToDvdForm(id) {
    this.router.navigate([ '/dvd-form' ], {
      queryParams: {
        id: id
      }
    });
  }

}
