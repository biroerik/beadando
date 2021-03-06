import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-rent-item',
  templateUrl: './rent-item.component.html',
  styleUrls: ['./rent-item.component.css']
})
export class RentItemComponent implements OnInit {

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

}
