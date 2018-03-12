import { TestBed, inject } from '@angular/core/testing';

import { ImageGeneratorService } from './image-generator.service';

describe('ImageGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageGeneratorService]
    });
  });

  it('should be created', inject([ImageGeneratorService], (service: ImageGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
