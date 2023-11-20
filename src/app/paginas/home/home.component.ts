import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeuService } from '../detalhes-filme/detalhes-filme.component'; // Verifique o caminho correto para o SeuService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: SeuService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  trendingTvResult: any = [];
  popularResult: any = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.bannerdata();subscribe(
      (result: { results: any }) => {
        console.log(result, 'Resultados do Banner');
        this.bannerResult = result?.results;
      },
      (error: any) => {
        console.error('Ocorreu um erro:', error);
      }
    );

    this.service.trendingMovieApiData();subscribe(
      (result: { results: any }) => {
        console.log(result, 'Resultados filmes em alta');
        this.trendingMovieResult = result?.results;
      },
      (error: any) => {
        console.error('Ocorreu um erro ao buscar os filmes em alta:', error);
      }
    );

    this.service.trendingTvApiData();subscribe(
      (result: { results: any }) => {
        console.log(result, 'Resultados de séries em alta');
        this.trendingTvResult = result?.results;
      },
      (error: any) => {
        console.error('Ocorreu um erro ao buscar as séries em alta:', error);
      }
    );

    this.service.popularApiData();subscribe(
      (result: { results: any }) => {
        console.log(result, 'Resultado dos mais populares');
        this.popularResult = result?.results;
      },
      (error: any) => {
        console.error('Ocorreu um erro ao buscar os mais populares:', error);
      }
    );
  }
}
function subscribe(arg0: (result: { results: any; }) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}

