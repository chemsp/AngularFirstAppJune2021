import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { MyobservableComponent } from "./myobservable/myobservable.component";
import { AuthGaurdService } from "./services/auth-gaurd.service";
import { DeactivateGaurdService } from "./services/deactivate-guard.service";
import { TestDetailsComponent } from "./test-details/test-details.component";
import { TestComponent } from "./test/test.component";



const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    {
        path: 'myobservable',
        children: [
            { path: 'main', component: MyobservableComponent, pathMatch: 'full' },
            { path: 'error', component: ErrorComponent }
        ]
    },
    { path: 'test', component: TestComponent, canActivate: [AuthGaurdService], canDeactivate: [DeactivateGaurdService] },
    { path: 'testdetails/:id/:name', component: TestDetailsComponent, data: [], canActivate: [AuthGaurdService] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }