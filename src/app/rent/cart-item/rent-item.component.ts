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

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

}
