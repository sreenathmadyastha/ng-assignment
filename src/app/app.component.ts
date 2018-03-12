import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sort Images';
  public imageSrc = 'https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg'
  public imageSrc2 = 'https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg'

  onDropHandler(object){
    console.log("event "+ JSON.stringify(object));
    this.imageSrc = object.event.target.result;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/