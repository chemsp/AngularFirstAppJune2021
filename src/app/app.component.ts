import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  title = 'Angular Project!';
  todaydate = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


  counterinParent = 5000
  flag = true;

  @ViewChild('myVar', { static: true }) myref;

  @ViewChild('a', { static: true }) myeleRef;

  @ViewChild(TestComponent, { static: true }) MyRefToHomeComponent: TestComponent;


  increment() {
    this.counterinParent = 5000;
  }
  decrement() {
    this.counterinParent--;
  }

  eventHandler(val) {
    this.counterinParent = val;
  }

  ngOnInit() {

    let abc = this.MyRefToHomeComponent;

    let xyz = this.myeleRef
  }

  toggle() {
    this.flag = !this.flag;
  }

  navigateMethod() {

    // we make call to backend and do login
    this.router.navigate(['testdetails', this.counterinParent++, 'Paul'], { queryParams: { 'country': 'USA' } });
  }

  login() {
    this.authservice.login();
  }
  logout() {
    this.authservice.logout();
  }
}
