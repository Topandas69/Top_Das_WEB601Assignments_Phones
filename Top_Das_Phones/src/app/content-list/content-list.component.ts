import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  public contentList:Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;


  searchByTitle(){
    this.titleFound = this.contentList.some(content => content.title === this.searchTitle);
  }

  constructor(private PhonesService: PhonesService){}
  ngOnInit(){
    this.PhonesService.getContent().subscribe(contentList => this.contentList = contentList);
  }

}
