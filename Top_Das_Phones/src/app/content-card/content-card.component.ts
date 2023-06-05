import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: any;
  defaultPhoneImage: string = '/assets/img/mobile-phone.png';

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
  
}
