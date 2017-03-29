import { HomeService } from './../services/data/home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  states = [];
  stateCtrl: FormControl;
  filteredStates: any;

  constructor(private dataService: HomeService, private router: Router) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  ngOnInit() {
    this.getSchemas();
  }

  getSchemas() {
    this.states = this.dataService.getAll();
  }

  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }

  search(repo) {
    this.router.navigate(['/doc', this.stateCtrl.value.id]);
  }
}
