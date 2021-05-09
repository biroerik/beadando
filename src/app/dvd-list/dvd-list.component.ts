import { Component, Input, OnInit } from '@angular/core';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {

  dvds: Dvd[] = [];

  searchQuery: string;

  constructor(private dvdService: DvdService) { }

  async ngOnInit() {
    this.dvds = await this.dvdService.loadDvds();
  }

  async search() {
    this.dvds = await this.dvdService.filterDvds(this.searchQuery);
  }

}
