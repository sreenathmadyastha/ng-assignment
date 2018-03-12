import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageGeneratorService } from '../image-generator.service';
import { ImageItem } from '../image-item';
import { RowImageItem } from '../row-image-item';


@Component({
  selector: 'app-images-order',
  templateUrl: './images-order.component.html',
  styleUrls: ['./images-order.component.css']
 
})
export class ImagesOrderComponent implements OnInit {
  images: RowImageItem[];
  columns: number[] = [];
  constructor(private imageGenService: ImageGeneratorService) { }
  ngOnInit() {
    this.images = this.imageGenService.getImages();
    this.columns.push(0);
  }
}
