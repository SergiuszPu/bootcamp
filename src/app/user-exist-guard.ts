import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { map } from "rxjs/operators";
import { UserService } from "./user.service";

@Injectable()
export class UsersExistGuard implements CanActivate {
    constructor(private userService: UserService) { }

    canActivate() {
        return this.userService.getUsers().pipe(
            map(users => {
                if (users.length > 0) {
                    return true
                } else return false
            }
            )
        )
    }
}