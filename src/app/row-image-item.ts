import { ImageItem } from "./image-item";

export class RowImageItem 
{
    constructor(public Images: ImageItem[] =[]){}
    AddImage(image: ImageItem )
    {
        this.Images.push(image);
    }
    
}
