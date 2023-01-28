import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageSizeService } from '../service/image-size.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  constructor(private service: ImageSizeService) {}

  // 購読設定停止用
  private subscriptions = new Subscription();

  ngOnInit() {
    this.subscriptions.add(
      this.service.imageSize$.subscribe((res) => {
        // serviceファイルのimageSize$を購読し、
        // 更新されるとresizeを実行
        this.resize(res);
      })
    );
  }

  ngOnDestroy() {
    // 購読の停止
    this.subscriptions.unsubscribe();
  }

  resize(size: number) {
    // クラス名がmy-imageの要素を取得し、HTMLCollectionOfにキャストする
    const list = Array.from(
      document.getElementsByClassName(
        'my-image'
      ) as HTMLCollectionOf<HTMLElement>
    );

    // 取得した要素の高さ・幅を設定
    list.forEach((element) => {
      element.style.height = size + 'px';
      element.style.width = size + 'px';
    });
  }
}
