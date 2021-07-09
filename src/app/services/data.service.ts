import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { };

    customers = [
        { "id": 1, "name": "Bob" },
        { "id": 2, "name": "Bob" },
        { "id": 3, "name": "Bob" },
        { "id": 3, "name": "Bob" },
        { "id": 3, "name": "Bob" },
    ]

    Doloign() {

    }

    getData() {
        return of(this.customers).pipe(catchError((errr) => errr
        ))
    }


    getEmployees() {
        return this.http.get('assets/data.json');
    }


    postEmployees() {
        return this.http.post('assets/data.json', this.customers);


    }


}

function tap(): import("rxjs").OperatorFunction<{ id: number; name: string; }[], unknown> {
    throw new Error("Function not implemented.");
}
