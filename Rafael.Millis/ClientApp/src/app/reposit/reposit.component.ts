import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../_services/repository.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RepositSearch } from '../_interfaces/RepositSearch';

@Component({
  selector: 'app-reposit',
  templateUrl: './reposit.component.html',
  styleUrls: ['./reposit.component.css']
})
export class RepositComponent implements OnInit {
  public searches: RepositSearch[];
  textSearch: string;
  constructor(private repositService: RepositoryService,
    private http: HttpClient) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.repositService.search(this.textSearch).subscribe(result => {
      this.searches = result;
    }, error => console.error(error));
   }

  addToBookmark(item: RepositSearch){
      this.repositService.addToBookmark(item);
  }
}
