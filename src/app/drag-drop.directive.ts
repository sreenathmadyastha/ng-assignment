import { Directive, Output, HostListener, EventEmitter, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @Output() dropHandler: EventEmitter<any> = new EventEmitter<any>();
  public dragging: boolean;
  public loaded: boolean;
  public imageLoaded: boolean;
  public imageSrc: string;
  public invalidFlag: boolean;

  @HostListener('dragover') onDragOver() {
    this.dragging = true;
    return false;
  }
  @HostListener('mouseover') onMousehOver() {
    this.color = 'cornflowerblue';
    this.borderColor = 'goldenrod';
   
  }
  @HostListener('mouseout') onMousehOut() {
    this.color = '';
    this.borderColor = '';
   
  }
  @HostListener('ondrag') ondrag() {
    this.color = 'red';
    this.borderColor = 'red';
   
  }


  @HostListener('dragenter') handleDragEnter() {
    this.dragging = true;
  }
  @HostListener('dragleave') handleDragLeave() {
    this.dragging = false;
  }
  @HostListener('drop', ['$event']) handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  OnInit() {
    console.log("initialized");
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : 'null';

    this.invalidFlag = false;
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      this.invalidFlag = true;
      alert('invalid format');
      return this.dropHandler.emit({ event: e, invalidFlag: this.invalidFlag });
    }

    this.loaded = false;
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
    this.dropHandler.emit({ event: e, invalidFlag: this.invalidFlag });
  }

}
