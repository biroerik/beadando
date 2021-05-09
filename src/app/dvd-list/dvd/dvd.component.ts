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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDvdForm(id) {
    this.router.navigate([ '/dvd-form' ], {
      queryParams: {
        id: id
      }
    });
  }

}
