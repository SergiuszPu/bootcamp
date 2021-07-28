import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { map } from "rxjs/operators";
import { UsersAPIService } from "./user-api.service";

@Injectable()
export class UsersExistGuard implements CanActivate {
    constructor(private userService: UsersAPIService) { }

    canActivate() {
        return this.userService.getUsers().pipe(
            map(users => {
                if (users.length > 0) {
                    return true
                } else  return false
            }
            )
        )
    }
}