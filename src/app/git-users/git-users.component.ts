import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  searchUsers: UserInterface;
  searchQueryUsers: string;
  displayUsers: string;
  

  constructor(private GitSearchService: GitSearchService) {
    
   }

  ngOnInit() {
    this.searchQueryUsers = 'pedro';
    this.displayUsers = this.searchQueryUsers;
    this.gitUsuarios();
  }

  gitUsuarios =()=>{
    this.GitSearchService.gitUser(this.searchQueryUsers).then((response)=>{
      this.searchUsers = response;
      this.displayUsers= this.searchQueryUsers;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}