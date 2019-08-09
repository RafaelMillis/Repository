import { Component, OnInit, Input } from '@angular/core';
import { RepositSearch } from '../_interfaces/RepositSearch';
import { RepositoryService } from '../_services/repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() showBookmarkBtn:boolean;
  @Input() user: RepositSearch;
  show;
  constructor(private repositService: RepositoryService) { }

  ngOnInit() {
    this.setBookmarkBtn();
  }

  setBookmarkBtn(){
    if ( this.showBookmarkBtn === false)  {
      this.show = ['nodisplay'];
    }
  }
 
  addToBookmark(item: RepositSearch){
    this.repositService.addToBookmark(item);
  }

}
