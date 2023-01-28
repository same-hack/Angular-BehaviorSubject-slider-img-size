import { Component } from '@angular/core';
import { ImageSizeService } from '../service/image-size.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  // HTMLから直接参照したいのでpublicとすること
  constructor(public service: ImageSizeService) {}
}
