import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movies} from "../models/movies";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  fetchMovies(){
    return this.http.get<Movies[]>(' http://localhost:3000/movie')
  }
  addMovie(data:Movies){
    return this.http.post<Movies>('http://localhost:3000/movie',data);
  }
  removeMovies(id:any){
    return this.http.delete<Movies>('http://localhost:3000/movie/'+id);
  }
  getOffreById(id:any){
    return this.http.get<Movies>('http://localhost:3000/movie/'+id)
  }
  updateOffre(data:Movies,id:any):Observable<Movies>{
    return this.http.put<Movies>('http://localhost:3000/movie/'+id,data)
  }
}
