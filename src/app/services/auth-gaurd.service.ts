import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
    constructor(private authservice: AuthService) { }

    canActivate() {
        debugger;
        let token = localStorage.getItem('token');
        debugger
        if (token)
            return true
        else
            return false
    }
}
