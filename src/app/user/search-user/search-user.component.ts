import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersAPIService } from '../../user-api.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup;
  isCollapsed = true;
  filter: string = '';

  constructor(private fb: FormBuilder,
              private userService: UsersAPIService,
    ) { 

    this.searchForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      type: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      filter: [''],
    })
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  findUsers() {
    this.userService.getUserByParams(this.searchForm.value);
  }

}
