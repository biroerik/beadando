import { Component, OnInit } from '@angular/core';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  dvds: Dvd[] = [];


  constructor(private dvdService: DvdService) { }

  async ngOnInit() {
    this.dvds = await this.dvdService.loadDvds();
  }


}
