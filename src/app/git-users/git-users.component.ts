import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { UserInterface } from '../user-interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  searchResults: UserInterface;
  searchQuery: string;
  displayResults: string;
  title:string;
  page:string;
  

  constructor(private GitSearchService: GitSearchService,private route: ActivatedRoute,private router: Router) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayResults = params.get('query');
      if(params.get('page'))
        this.page = params.get('page');
      else
        this.page = "0";
      this.gitUsuarios();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });

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