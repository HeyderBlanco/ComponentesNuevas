import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersComponent } from './git-users/git-users.component';
import { GitSearchComponent } from './git-search/git-search.component';


const routes: Routes = [ { path: 'search', redirectTo: '/search/angular', pathMatch: 'full' },
  { path: 'search/:query', component: GitSearchComponent, data:{
    title: 'Page'
  }},
  { path: 'search/:query/:page', component: GitSearchComponent, data:{
    title: 'Page'
  }},
  { path: 'users', redirectTo: '/users/pedro', pathMatch: 'full' },
  { path: 'users/:query', component: GitUsersComponent, data:{
    title: 'Page'
  } },
  { path: 'users/:query/:page', component: GitUsersComponent, data:{
    title: 'Page'
  } },
  { path: '**', component: GitSearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }