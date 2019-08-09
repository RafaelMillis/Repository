import { Component, OnInit } from '@angular/core';
import { RepositSearch } from '../_interfaces/RepositSearch';
import { RepositoryService } from '../_services/repository.service';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  bookmarks: RepositSearch[];
  constructor(private repositService: RepositoryService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this.repositService.getBookmarks().subscribe((result) => {
      this.bookmarks = result;
    }, error => console.error(error));
  }
}
