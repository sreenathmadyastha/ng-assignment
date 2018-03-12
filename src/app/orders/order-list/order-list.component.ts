import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ImageGeneratorService } from '../../image-generator.service';
import { ImageItem } from '../../image-item';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  providers: [ImageGeneratorService],
  styleUrls: ['./order-list.component.css'],
  animations: [
    trigger('imageState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        cursor: 'pointer',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})
export class OrderListComponent implements OnInit {
  msg = '';
  imgExpanded = 'imgExpanded';
  items: ImageItem[] = [];
  index: number = 0;

  constructor(private dragula: DragulaService, private imageGenService: ImageGeneratorService) {
    this.items = imageGenService.getImages();
    this.dragula.setOptions('bag-items', {
      revertOnSpill: true
    });
  }
  getImageId() {
    return this.index++;
  }
  ngOnInit() {

    this.dragula
      .drag
      .subscribe(value => {

        this.msg = `Dragging the ${value[1].src}!`;
      });

    this.dragula
      .drop
      .subscribe(value => {
        value[1].width = 300
        value[1].height = 300
        this.msg = `Dropped the ${value[1]}!`;

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