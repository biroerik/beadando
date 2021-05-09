import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { DvdService } from '../services/dvd.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.css']
})
export class DvdFormComponent implements OnInit {

  dvdForm: FormGroup = this.formBuilder.group({
    id: [],
    title: [''],
    date: [''],
    price: [0, Validators.min(1)],
    imgUrl: [ 'https://matchory.com/assets/corals/images/default_dvd_image.png', Validators.pattern(/^http/) ],
    status: [''],
    renter: [],
    categories: [[]]
  });

  users: User[];

  categories: Category[];

  constructor(
    private dvdService: DvdService,
    private userService: UserService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get id() {
    return this.dvdForm.get('id');
  }

  get price() {
    return this.dvdForm.get('price');
  }

  get imgUrl() {
    return this.dvdForm.get('imgUrl');
  }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.categories = await this.categoryService.getAll();

    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const dvd = await this.dvdService.getDvdById(id);
      this.dvdForm.setValue(dvd);
    }
  }

  addDvd() {
    const dvd = this.dvdForm.value;
    this.dvdService.addDvd(dvd);
    this.router.navigateByUrl('/');
  }

  compareUsers(user1: User, user2: User): boolean {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(category1: Category, category2: Category): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

}
