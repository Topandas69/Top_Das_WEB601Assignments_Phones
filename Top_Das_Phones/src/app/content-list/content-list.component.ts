import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  public contentList:Content[];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  errTxt: boolean = false;


  searchByTitle(){
    this.titleFound = this.contentList.some(content => content.title === this.searchTitle);
  }
  addContent(newContent: Content){
    const AddPromise = new Promise((resolve, reject) => {
      this.contentList.push(newContent);
      this.contentList = [...this.contentList];
      resolve(newContent.title);
    });

    AddPromise.then(data => {
      console.log(`Content Added successfully with title: ${data}`);
      this.errTxt = false;
    }).catch(err => {
      this.errTxt = true;
    });
    
  }

  constructor(){

    this.contentList = [
      {
        id: 1,
        title: "IPhone 14",
        description: "The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).",
        creator: "Apple",
        imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026579503",
        type: "I-OS"
      },
      {
        id: 2,
        title: "I Phone 14 pro",
        description: "The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and a Face ID Dynamic Island that allows Apple to utilize an always-on display feature, which dims the lock screen similarly to an Apple Watch.",
        creator: "Apple",
        imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896",
        type: "I-OS"
      },
      {
        id: 3,
        title: "Galaxy S23 Ultra",
        description: "The Galaxy S23 Ultra packs a hefty 5,000mAh battery, as well as 45W wired charging and 15W wireless charging. While the battery and charging are the same as the Galaxy S22 Ultra, the base model Galaxy S23 Ultra doubles the storage from 128GB to 256GB, backed by 8GB of RAM.",
        creator: "Samsung",
        imgURL: "https://images.samsung.com/vn/smartphones/galaxy-s23-ultra/buy/kv_group_PC_v2.jpg",
        type: "Android"
      },
      {
        id: 4,
        title: "Galaxy S23 Plus",
        description: "the Galaxy S23+ use faster UFS 4.0 storage, which enables faster file transfer speeds. With one caveat: UFS 4.0 is not supported by the base 128GB Galaxy S23 variant.",
        creator: "Samsung",
        imgURL: "https://images.samsung.com/ca/smartphones/galaxy-s23/buy/product_color_phantom_black_plus.png?imwidth=480",
        type: "Android",
        tags: ['samsung', 'phone', 'S series']
      },
      {
        id: 5,
        title: "I Phone 14",
        description: "Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging. The iPhone 14 models come in blue, purple, midnight, starlight, and (PRODUCT)RED, plus Apple added a new yellow color in March.",
        creator: "Apple",
        type: "I-OS"
      },
      {
        id: 6,
        title: "Nokia Asha 305",
        description: "The Nokia Asha 305 was announced at Bangkok by Nokia, and the announcement offered global availability from 3Q of 2012. The phone's suggested price was €63 subject to taxes and subsidies.",
        creator: "Nokia",
        imgURL: "https://cdn.dotpe.in/longtail/store-items/7994766/9kXeLNro.png",
        tags: ['Nokia', 'Old Phone', 'Java jar']
      }, 
      {
        id: 7,
        title: "I Phone SE",
        description: "The iPhone SE (2022) is the smallest and cheapest brand new iPhone you can buy. Despite its low price and cutely anachronistic size, the SE has the same processor inside as the much more expensive iPhone 13 and iPhone 13 Pro, making it a temptation for anyone wanting to save money but not compromise on performance.",
        creator: "Apple",
        imgURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263296",
        type: "I-OS"
      }, 
      
    ];
  }

}
