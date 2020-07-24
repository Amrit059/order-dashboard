import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnersComponent } from './spinners/spinners.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SpinnersComponent],
  exports: [SpinnersComponent]
})
export class UtillModule { }
