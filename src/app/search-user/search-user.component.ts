import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { SearchParams } from '../interface/searchParams';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup;
  isCollapsed = true;
 

  constructor(private fb: FormBuilder,
              private userService: UserService,
    ) { 

    this.searchForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      type: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  findUsers() {
    this.userService.getUserByParams(this.searchForm.value)
  }

}
