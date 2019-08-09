import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RepositComponent } from './reposit/reposit.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { UserComponent } from './user/user.component';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      RepositComponent,
      BookmarkComponent,
      UserComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         { path: '', component: RepositComponent, pathMatch: 'full' },
         { path: 'repository', component: RepositComponent },
         { path: 'bookmark', component: BookmarkComponent }
       ])
     ],
      providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
