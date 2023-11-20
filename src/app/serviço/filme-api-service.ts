import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeApiServico {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "eec432e5165f50d3a0aa0e723467355a";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`);
  }

  trendingTvApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/tv/week?api_key=${this.apikey}`);
  }

  popularApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/top_rated?api_key=${this.apikey}`);
  }

  searchMovieData(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
}
