import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import { DragDropDirective } from './drag-drop.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagesOrderComponent } from './images-order/images-order.component';
import { TableRowComponent } from './images-order/table-row/table-row.component';
import { ImageGeneratorService } from './image-generator.service';


@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    ImagesOrderComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DragulaModule,
    NgbModule.forRoot()
  ],
  providers: [ImageGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/