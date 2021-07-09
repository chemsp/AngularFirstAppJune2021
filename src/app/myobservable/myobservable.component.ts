import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-myobservable',
  templateUrl: './myobservable.component.html',
  styleUrls: ['./myobservable.component.css']
})
export class MyobservableComponent implements OnInit {

  customObservable: Observable<any>;
  counter = 0
  customers;
  constructor(private dtaservice: DataService) { }

  ngOnInit() {


    this.customObservable = new Observable((obsever) => {
      setInterval(() => {
        if (this.counter < 8) {
          obsever.next(this.counter++);
        }
        if (this.counter >= 5) {
          obsever.complete();
        }

        if (this.counter >= 8) {
          obsever.error("Somthing went wrong");
        }

      }, 1000)

    });

    this.customObservable.subscribe((data) => {
      console.log(data);
    }, (errr) => {
      console.log(errr);
    }, () => {
      console.log("No more data from source anymore. its is completed");
    });

  }

  myEventHandler() {
    //   this.dtaservice.getData().subscribe((data) => {
    //     this.customers = data;
    //   }, () => { }, () => {
    //     console.log("Completed fetching data");
    //   });

    this.customers = this.dtaservice.getEmployees().subscribe((emp) => {
      this.customers = emp[0]
    }, (err) => {
      console.log(err);
    });
  }

}
