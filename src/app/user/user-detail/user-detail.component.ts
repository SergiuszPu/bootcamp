import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UsersAPIService } from '../../user-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User

  constructor(private userService: UsersAPIService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user)
  }

  goBack(): void {
    this.location.back()
  }
}
