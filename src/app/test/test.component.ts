import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CanLeave } from '../services/deactivate-guard.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, CanLeave {

  constructor(private myservice: DataService) { }

  ngOnInit() {

    console.log(this.myservice.customers);
  }

  canDeactivate() {
    debugger
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
  }

}
