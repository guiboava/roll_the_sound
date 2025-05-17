import { Component, OnInit } from '@angular/core';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.scss'],
  standalone: false,
})
export class ArtistsFormComponent  implements OnInit {

  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;

  convertToEmbedUrl(url: string): string | null {
  if (!url) return null;

  const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
  const match = url.match(youtubeRegex);

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }


  return null;
}

  constructor() { }

  ngOnInit() {}

}
