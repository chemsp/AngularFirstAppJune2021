import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit, OnDestroy {

  constructor(private activatedroute: ActivatedRoute) { }

  IdFromAppComp
  NmeFromAppComp
  country

  mySubs: Subscription

  ngOnInit() {

    // this.IdFromAppComp = this.activatedroute.snapshot.params['id'];

    // this.NmeFromAppComp = this.activatedroute.snapshot.params['name'];

    this.mySubs = this.activatedroute.params.subscribe((params) => {
      this.IdFromAppComp = params['id'];
      this.NmeFromAppComp = params['name'];
    });


    this.country = this.activatedroute.snapshot.queryParams['country'];
    // this.activatedroute.queryParams.subscribe((params) => {
    //   this.country = params['country'];

    // })
  }

  ngOnDestroy() {
    this.mySubs.unsubscribe();
  }

}
