import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilmeApiServico } from 'src/app/serviço/filme-api-service';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private service: FilmeApiServico){ }

  ngOnInit(): void {
  }
  
  searchResult: any;


  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    this.service.searchMovieData(this.searchForm.value).subscribe((result: { results: any; }) => {
      console.log(result,'Resultado do filme')
      this.searchResult = result.results;
    })
  }
  
}
