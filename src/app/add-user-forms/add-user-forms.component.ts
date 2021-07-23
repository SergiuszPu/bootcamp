import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomEmailValidator } from '../email-validator';

import { UserService } from '../user-service.service';

@Component({
  selector: 'app-add-user-forms',
  templateUrl: './add-user-forms.component.html',
  styleUrls: ['./add-user-forms.component.css']
})
export class AddUserFormsComponent implements OnInit {

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

  ngOnInit(): void {
  }

  submitForm(user: FormGroup) {
    this.userService.addUser(user.value)
      .subscribe(user => console.log(user)
      );
  }

  getUser() {
    return this.userService.getUsers()
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


  emailValidator(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log(control.value);

        if (control.value === 'w@w') {
          resolve(true)
        } else {
          reject(null)
        }
      }, 3500)
    })
    return promise
  }
}

// export class MenuRolesValidator {
//   static createValidator(
//   ): AsyncValidatorFn {
//     return (control: AbstractControl): Observable<ValidationErrors> => {
//       const roles = getRoles();
//       const menuGroupId = getMenuGroupId();
//       if (!roles || !control.value || !control.touched) return of(null);
//       return menuGroupService.checkIfRolesExistInActiveMenuGroup(roles, menuGroupId).pipe(
//         tap((result: UserRole[]) => {
//           if (result.length > 0) {
//             let roles = result
//               .map((r) => r.name)
//               .reduce((previous, next) => {
//                 return `${previous}, ${next}`;
//               }, '');
//             roles = roles.slice(1, roles.length);
//             notificationService.showNotification({
//               type: E1InlineNotificationTypes.WARNING,
//               title: 'Warning',
//               subtitle: 'There are role(s) which belongs to another active menu: ' + roles,
//               autoCloseAfterSeconds: 0,
//             });
//             control.setValue(false);
//           }
//         }),
//         map((result: UserRole[]) => {
//           return result.length ? { error: true } : null;
//         })
//       );
//     };
//   }
// }

// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { E1InlineNotificationService, E1InlineNotificationTypes } from 'edge-one-common';
// export class ChooseRoleOrDefaultMenuValidator {
//   static createValidator(
//     getRoles: () => string[],
//     getDefaultFlag: () => boolean,
//     notificationService: E1InlineNotificationService
//   ): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors => {
//       const hasValidationError = control.value && getRoles()?.length === 0 && !getDefaultFlag();
//       if (hasValidationError) {
//         notificationService.showNotification({
//           title: 'Warning',
//           subtitle: 'This menu has no roles being set up and neither is defined as a default menu',
//           type: E1InlineNotificationTypes.WARNING,
//         });
//       }
//       return hasValidationError ? { error: true } : null;
//     };
//   }
// }