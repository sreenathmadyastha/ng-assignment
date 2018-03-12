import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    msg = '';
    imgExpanded = 'imgExpanded';
  public items = [
    '../../assets/Dock.jpg',
    '../../assets/Forest.jpg',
    '../../assets/Tree.jpg',
    '../../assets/Waterfall.jpg'
  ];
  constructor(private dragula: DragulaService) 
  {
    this.dragula.setOptions('bag-items', {
      revertOnSpill: true
    });

  }

  ngOnInit() {

    this.dragula
    .drag
    .subscribe(value => {
      
      this.msg = `Dragging the ${ value[1].src }!`;
    });

  this.dragula
    .drop
    .subscribe(value => {
      value[1].width=300
      value[1].height=300
      this.msg = `Dropped the ${ value[1]}!`;
      
      this.items.forEach(element => {

        
      });



      setTimeout(() => {
        this.msg = '';
      }, 1000);
    });
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/