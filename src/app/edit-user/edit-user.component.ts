import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Observable } from 'rxjs';

//Bootstrap
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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

  constructor(private userService: UserService,
              private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.users$
  }

  removeUserClick(id: number) {
    this.users = this.users.filter(user => user.id !== id)
    this.userService.deleteUser(id).subscribe()
    this.modalRef.hide();
  }

  detailUser(id: number) {
    this.userService.getUser(id).subscribe()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
