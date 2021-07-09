import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MySecondModule } from './my-second/my-second.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { LogDirective } from './log.directive';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { MyobservableComponent } from './myobservable/myobservable.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { TestDetailsComponent } from './test-details/test-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutofocusDirective,
    LogDirective,
    MyobservableComponent,
    TestComponent,
    ErrorComponent,
    TestDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
