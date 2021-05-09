import { Component, OnInit } from '@angular/core';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  dvds: Dvd[] = [];


  constructor(private dvdService: DvdService) { }

  async ngOnInit() {
    this.dvds = await this.dvdService.loadDvds();
  }


}
