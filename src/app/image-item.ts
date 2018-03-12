export class ImageItem 
{
    // Id:number;
    // Source:string;
    // state : string;
    constructor(public Id: number, public Source:string,  public state = 'inactive') { }
   public toggleState() 
    {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

}