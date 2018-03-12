import { Injectable } from '@angular/core';
import { ImageItem } from './image-item';
import { IMAGES } from './mock-image-item';

@Injectable()
export class ImageGeneratorService {

  constructor() { }
  images : ImageItem[] = [];

  getImages() :ImageItem[] {
  
    // this.images.push(new ImageItem (1, '../../assets/Dock.jpg', 'active') );
    // this.images.push(new ImageItem (2, '../../assets/Forest.jpg', 'inactive') );
    // this.images.push(new ImageItem (3, '../../assets/Tree.jpg', 'inactive') );
    // this.images.push(new ImageItem (4, '../../assets/Waterfall.jpg', 'inactive') );
    this.images.push(new ImageItem (1, '../../assets/image001.JPG', 'active') );
    this.images.push(new ImageItem (2, '../../assets/image002.JPG', 'inactive') );
    this.images.push(new ImageItem (3, '../../assets/image003.JPG', 'inactive') );
    this.images.push(new ImageItem (4, '../../assets/image004.JPG', 'inactive') );
    this.images.push(new ImageItem (5, '../../assets/image005.JPG', 'inactive') );
    this.images.push(new ImageItem (6, '../../assets/image006.JPG', 'inactive') );
    this.images.push(new ImageItem (7, '../../assets/image007.JPG', 'inactive') );
    this.images.push(new ImageItem (8, '../../assets/image008.JPG', 'inactive') );
    this.images.push(new ImageItem (9, '../../assets/image009.JPG', 'inactive') );
    this.images.push(new ImageItem (10, '../../assets/image010.JPG', 'inactive') );
    this.images.push(new ImageItem (11, '../../assets/image011.JPG', 'inactive') );
    this.images.push(new ImageItem (12, '../../assets/image012.JPG', 'inactive') );
    this.images.push(new ImageItem (13, '../../assets/image013.JPG', 'inactive') );
    this.images.push(new ImageItem (14, '../../assets/image014.JPG', 'inactive') );
    this.images.push(new ImageItem (15, '../../assets/image015.JPG', 'inactive') );
    this.images.push(new ImageItem (16, '../../assets/image016.JPG', 'inactive') );
    this.images.push(new ImageItem (17, '../../assets/image017.JPG', 'inactive') );
    this.images.push(new ImageItem (18, '../../assets/image018.JPG', 'inactive') );


    return this.images;
  }

}
