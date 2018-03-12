import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from './table-row/table-row.component';
import { ImagesOrderComponent } from './images-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule, NgModule, BrowserModule, BrowserAnimationsModule
  ],
  declarations: [TableRowComponent, ImagesOrderComponent]
})
export class ImagesOrderModule { }
