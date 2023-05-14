import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  public contentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: "IPhone 14",
      description: "The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).",
      creator: "Apple",
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026579503",
      type: "I-OS"
    });
    this.contentList.add({
      id: 2,
      title: "I Phone 14 pro",
      description: "The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and a Face ID Dynamic Island that allows Apple to utilize an always-on display feature, which dims the lock screen similarly to an Apple Watch.",
      creator: "Apple",
      imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896",
      type: "I-OS"
    });
    this.contentList.add({
      id: 3,
      title: "Galaxy S23 Ultra",
      description: "The Galaxy S23 Ultra packs a hefty 5,000mAh battery, as well as 45W wired charging and 15W wireless charging. While the battery and charging are the same as the Galaxy S22 Ultra, the base model Galaxy S23 Ultra doubles the storage from 128GB to 256GB, backed by 8GB of RAM.",
      creator: "Samsung",
      imgURL: "https://images.samsung.com/vn/smartphones/galaxy-s23-ultra/buy/kv_group_PC_v2.jpg",
      type: "Android"
    });
  }
}
