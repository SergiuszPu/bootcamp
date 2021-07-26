import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service.service';
import { SearchParams } from '../interface/search-params.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup;
  isCollapsed = true;
  filter: string =''

  constructor(private fb: FormBuilder,
              private userService: UserService,
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
    // this.searchForm.get('filter')?.valueChanges.pipe(
    //   debounceTime(500)
    // ).subscribe(data => this.filter = data)
  }

  findUsers() {
    this.userService.getUserByParams(this.searchForm.value)
  }

}
