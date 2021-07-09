import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from '../test/test.component';
import { ErrorComponent } from '../error/error.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [TestComponent, ErrorComponent]
})
export class MyFirstModule { }
