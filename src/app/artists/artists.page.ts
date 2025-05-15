import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Artist {
  name: string;
  image: string;
  band: string;
  srcClip: SafeResourceUrl; // agora já tratado
  about: string;
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
  standalone: false,
})
export class ArtistsPage implements OnInit {

  artistsList: Artist[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.artistsList = [
      {
        name: "Zakk Wylde",
        image: "https://www.estadao.com.br/resizer/v2/ET66NZXAKVMW3P53VF3ONXCK4U.jpg?quality=80&auth=9f3dd7759114a9fb12c57f8fb957b819e286869963c056c7fb843e6a89b4eea7&width=1200",
        band: "Black Label Society",
        srcClip: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/KrCMWS_fB4o"),
        about: "Zakk Wylde é um guitarrista e vocalista americano, conhecido por seu trabalho com Ozzy Osbourne e por ser o fundador da banda de heavy metal Black Label Society. Seu estilo une peso, técnica e um visual marcante.",
      },
      {
        name: "Tom Petty",
        image: "https://i.pinimg.com/736x/77/aa/4b/77aa4b9d92249bf7932499f2ed47ac64.jpg",
        band: "Tom Petty and the Heartbreakers",
        srcClip: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/aowSGxim_O8"),
        about: "Tom Petty foi um cantor, compositor e guitarrista americano. Liderou a banda Tom Petty and the Heartbreakers e também fez parte do supergrupo Traveling Wilburys. Sua música é marcada por melodias cativantes, letras autênticas e uma sonoridade do rock clássico americano.",
      },
    ];
  }
}
