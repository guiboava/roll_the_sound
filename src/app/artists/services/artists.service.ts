import { Injectable } from '@angular/core';
import { Artist } from '../models/artist.type';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private artistsList: Artist[] = [
    {
      id:1,
      name: "Zakk Wylde",
      image: "https://www.estadao.com.br/resizer/v2/ET66NZXAKVMW3P53VF3ONXCK4U.jpg?quality=80&auth=9f3dd7759114a9fb12c57f8fb957b819e286869963c056c7fb843e6a89b4eea7&width=1200",
      band: "Black Label Society",
      srcClip: "https://www.youtube.com/embed/KrCMWS_fB4o",
      about: "Zakk Wylde é um guitarrista e vocalista americano, conhecido por seu trabalho com Ozzy Osbourne e por ser o fundador da banda de heavy metal Black Label Society. Seu estilo une peso, técnica e um visual marcante.",
    },
    {
      id:2,
      name: "Tom Petty",
      image: "https://i.pinimg.com/736x/77/aa/4b/77aa4b9d92249bf7932499f2ed47ac64.jpg",
      band: "Tom Petty and the Heartbreakers",
      srcClip: "https://www.youtube.com/embed/aowSGxim_O8",
      about: "Tom Petty foi um cantor, compositor e guitarrista americano. Liderou a banda Tom Petty and the Heartbreakers e também fez parte do supergrupo Traveling Wilburys. Sua música é marcada por melodias cativantes, letras autênticas e uma sonoridade do rock clássico americano.",
    },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  getById(artistId: number) {
    return this.artistsList.find(a => a.id === artistId);
  }

  getList() {
    return [...this.artistsList];
  }



  private add(artist: Artist) {
    this.artistsList = [...this.artistsList, {
      ...artist,
      id: this.getNextId()
    }];
  }

  private getNextId(): number {
    const maxId = this.artistsList.reduce((id, artist) => {
      if (!!artist.id && artist?.id > id) {
        id = artist.id;
      }
      return id;
    }, 0);
    return maxId + 1;
  }

  private update(updatedArtist: Artist) {
    this.artistsList = this.artistsList.map(a => {
      return (a.id === updatedArtist.id) ? updatedArtist : a;
    });
  }

  save(artist: Artist) {
    artist.id ? this.update(artist) : this.add(artist);
  }



  remove(artist: Artist) {
    this.artistsList = this.artistsList.filter(g => g.id !== artist.id);
  }
}
