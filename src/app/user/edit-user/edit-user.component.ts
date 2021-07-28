import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../../user'
import { Observable } from 'rxjs';

//Bootstrap
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UsersService } from '../store/users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  headers: string[] = ["id", "email", "type", "firstname", "lastname"];
  users: any[] = []
  users$: Observable<User[]> | null = null
 
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService,
              private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.usersService.loadUser()
    this.users$ = this.usersService.getUsers()
  }

  removeUserClick(id: number) {
    this.usersService.removeUser(id)
    // this.users = this.users.filter(user => user.id !== id)
    // this.userApiService.deleteUser(id).subscribe()
    this.modalRef.hide();
  }

  // detailUser(id: number) {
  //   this.userApiService.getUser(id).subscribe()
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
