import { Component } from '@angular/core';
import { PhonesService } from './services/phones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top_Das_Phones';
  contentId: number = 5;
  topContent: any = {};

  constructor(private PhonesService: PhonesService){}
  ngOnInit(){
    this.PhonesService.getContentById(this.contentId).subscribe(c => this.topContent = c);
  }
}
