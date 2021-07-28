import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CatsService } from "../store/cats/cats.service";

@Component({
    selector: 'cats-edit',
    templateUrl: './cats-edit.component.html',
})

export class CatsEditComponent implements OnInit {

    cats$: Observable<string[]> | null = null

    constructor(private catsService: CatsService) { }

    ngOnInit(): void {
        this.catsService.loadCats()
        this.cats$ = this.catsService.getCats()
    }
}