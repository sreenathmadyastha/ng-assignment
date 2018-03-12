export class ImageItem 
{

   constructor(public Id: number, public Source:string,  public state = 'inactive') { }
   public toggleState() 
    {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

}