import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.type';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private readonly API_URL = 'http://localhost:3000/artists';



  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getById(artistId: string) {
    return this.http.get<Artist>(`${this.API_URL}/${artistId}`);
  }

  getList() {
    return this.http.get<Artist[]>(this.API_URL)
  }

  private add(artist: Artist) {
    return this.http.post<Artist>(this.API_URL, artist);
  }

  private update(artist: Artist) {
    return this.http.put<Artist>(`${this.API_URL}/${artist.id}`, artist);
  }

  save(artist: Artist) {
    return artist.id ? this.update(artist) : this.add(artist);
  }

  remove(artist: Artist) {
    return this.http.delete<Artist>(this.API_URL + artist.id)
  }
}