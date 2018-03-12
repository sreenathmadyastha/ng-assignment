import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    DragulaModule,
    NgbModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/