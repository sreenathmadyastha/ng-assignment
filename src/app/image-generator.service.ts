import { Injectable } from '@angular/core';
import { ImageItem } from './image-item';
import { IMAGES } from './mock-image-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { RowImageItem } from './row-image-item';

@Injectable()
export class ImageGeneratorService {
  constructor() { }
  images: ImageItem[] = [];
  rowImages: RowImageItem[] = [];
  getImages(): RowImageItem[] {
    let imageIndex = 1;
    let totalImages = 19;
    let imagesPerRow = 5;

    for (let imageIndex = 1; imageIndex < totalImages; imageIndex++) 
    {
      for (let rowIndex = 0; rowIndex < imagesPerRow; rowIndex++) {
        this.images.push(new ImageItem(imageIndex, '../../assets/image' + imageIndex + '.JPG', 'inactive'));
        if (imageIndex < totalImages )
        imageIndex = imageIndex + 1;
      }
      if (this.rowImages.length == 0) {
        this.images[0].state = 'active';
      }
      this.rowImages.push(new RowImageItem(this.images));
      console.log(this.rowImages);
      this.images = [];
    }
    return this.rowImages;
  }

  getImagesOld(): ImageItem[] {

    this.images.push(new ImageItem(1, '../../assets/Dock.jpg', 'active'));
    this.images.push(new ImageItem(2, '../../assets/Forest.jpg', 'inactive'));
    this.images.push(new ImageItem(3, '../../assets/Tree.jpg', 'inactive'));
    this.images.push(new ImageItem(4, '../../assets/Waterfall.jpg', 'inactive'));
    return this.images;
  }

}
