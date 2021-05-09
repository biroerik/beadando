import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  dvd!: Dvd;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

}
