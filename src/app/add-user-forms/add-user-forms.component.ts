import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomEmailValidator } from '../email-validator';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user-forms',
  templateUrl: './add-user-forms.component.html',
  styleUrls: ['./add-user-forms.component.css']
})
export class AddUserFormsComponent {

  userForms: FormGroup;
  users!: string[]

  constructor(private fb: FormBuilder,
    private userService: UserService
  ) {

    this.userForms = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], [new CustomEmailValidator(this.userService).existingEmailValidator('')]],
      date: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  submitForm(user: FormGroup) {
    this.userService.addUser(user.value)
      .subscribe(user => console.log(user)
      );
  }

  getUsers() {
     this.userService.getUsers()
  }

  get emailControl() {
    return this.userForms.get('email')
  }

  get firstnameControl() {
    return this.userForms.get('firstname')
  }

  get lastnameControl() {
    return this.userForms.get('lastname')
  }
  
  get typeControl() {
    return this.userForms.get('type')
  }
}