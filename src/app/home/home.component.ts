import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, OnDestroy } from "@angular/core";
import { DataService } from "../services/data.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './homestyle.component.css'],
  providers: [DataService]

})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, OnDestroy {


  constructor(private dataservice: DataService) { }


  @Input()
  counter = 0;



  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit() {

    console.log(this.dataservice.customers)
  }

  ngDoCheck() {


  }

  ngAfterContentInit() {

  }

  ngOnDestroy() {

  }

  @Output() counterchanged: EventEmitter<any> = new EventEmitter<any>();

  increment() {
    this.counter++;
    this.counterchanged.emit(this.counter);
  }
  decrement() {
    this.counter--;
    this.counterchanged.emit(this.counter);
  }
}
