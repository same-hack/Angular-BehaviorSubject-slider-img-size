import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageSizeService {
  // スライダー初期値
  slider = {
    value: 250,
  };

  // 画像サイズ
  imageSize$ = new BehaviorSubject<number>(250);

  constructor() {}

  // 画像サイズの更新
  update(size: number) {
    this.imageSize$.next(size);
  }
}
