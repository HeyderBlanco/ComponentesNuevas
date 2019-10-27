import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  searchResults: UserInterface;
  searchQuery: string;
  displayResults: string;
  

  constructor(private GitSearchService: GitSearchService) {
    
   }

  ngOnInit() {
    this.searchQuery = 'pedro';
    this.displayResults = this.searchQuery;
    this.gitUsuarios();
  }

  gitUsuarios =()=>{
    this.GitSearchService.gitUser(this.searchQuery).then((response)=>{
      this.searchResults = response;
      this.displayResults= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}