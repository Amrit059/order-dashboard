import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatTableModule,
  MatStepperModule,
  MatSnackBarModule,
  MatRadioModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatStepperModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatStepperModule,
    MatSnackBarModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    
  ]
})
export class SharedModule { }
