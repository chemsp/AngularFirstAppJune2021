import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export interface CanLeave {
    canDeactivate: () => Observable<any> | Promise<any> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class DeactivateGaurdService implements CanDeactivate<CanLeave> {

    canDeactivate(component: CanLeave) {
        debugger;
        if (component.canDeactivate) {
            debugger
            return component.canDeactivate();
        }
        return true;
    }
}
