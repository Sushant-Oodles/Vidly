import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Genres } from "../models/genres";
import { JwtService } from "./jwt.service";

@Injectable({
  providedIn: "root",
})
export class GenresService {
  BASE_URL: string = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient, private jwtService: JwtService) {}

  getGenres(): Observable<Genres[]> {
    return this.httpClient.get<Genres[]>(`${this.BASE_URL}genres`);
  }

  postGenres(body: Genres) {
    return this.httpClient.post(`${this.BASE_URL}genres`, body);
  }

  deleteGenre(id: string): Observable<Genres> {
    return this.httpClient.delete<Genres>(`${this.BASE_URL}genres/${id}`);
  }

  updateGenre(id: string, body:Genres): Observable<Genres> {
    return this.httpClient.put<Genres>(`${this.BASE_URL}genres/${id}`,body);
  }

  getGenreByID(id: string): Observable<Genres> {
    return this.httpClient.get<Genres>(`${this.BASE_URL}genres/${id}`);
  }
}
// {
//   headers: new HttpHeaders().set("Authorization", this.jwtService.),
// }