import { Character, Episodio } from '../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  private readonly API_URL = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  // personagens por nome
  getCharacters(name: string): Observable<{ results: Character[] }> {
    const encoded = encodeURIComponent(name.trim());

    return this.http.get<{ results: Character[] }>(
      `${this.API_URL}/?name=${encoded}`
    );
  }

  // detalhes do personagem
  getCharactersById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/${id}`);
  }

  // episodios pela URL
  getEpisodiosByUrl(url: string): Observable<Episodio> {
    return this.http.get<Episodio>(url);
  }

}


